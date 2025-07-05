import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ReportData, ChatMessage } from '../types';
import { generateNarrative, startChat, sendMessageToChat } from '../services/geminiService';
import type { Chat } from '@google/genai';
import { Spinner } from './Spinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const stripMarkdown = (markdown: string): string => {
    return markdown
        .replace(/#{1,6}\s/g, '') // Headings
        .replace(/(\*\*|__)(.*?)\1/g, '$2') // Bold
        .replace(/(\*|_)(.*?)\1/g, '$2') // Italic
        .replace(/!\[(.*?)\]\(.*?\)/g, '$1') // Images
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
        .replace(/`{1,3}(.*?)`{1,3}/g, '$1') // Code
        .replace(/>\s/g, '') // Blockquotes
        .replace(/\n\s*[-*+]\s/g, '\n') // List items
        .replace(/\n{2,}/g, '\n') // Multiple newlines
        .trim();
};

interface ChatbotProps {
    data: ReportData;
    handleSpeak: (text: string) => void;
    currentlySpeaking: string | null;
}

const Chatbot: React.FC<ChatbotProps> = ({ data, handleSpeak, currentlySpeaking }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [history, setHistory] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setChat(startChat(data));
        setHistory([{
            role: 'model',
            content: `Hello! I'm ready to answer your questions about the "${data.title}" report.`
        }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading || !chat) return;

        const newUserMessage: ChatMessage = { role: 'user', content: userInput };
        setHistory(prev => [...prev, newUserMessage]);
        setUserInput('');
        setIsLoading(true);

        const responseText = await sendMessageToChat(chat, userInput);
        const newModelMessage: ChatMessage = { role: 'model', content: responseText };
        
        setHistory(prev => [...prev, newModelMessage]);
        setIsLoading(false);
    };

    const handleQuickQuestion = async (question: string) => {
        if (isLoading || !chat) return;
        
        const newUserMessage: ChatMessage = { role: 'user', content: question };
        setHistory(prev => [...prev, newUserMessage]);
        setIsLoading(true);

        const responseText = await sendMessageToChat(chat, question);
        const newModelMessage: ChatMessage = { role: 'model', content: responseText };
        
        setHistory(prev => [...prev, newModelMessage]);
        setIsLoading(false);
    };

    return (
        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 flex flex-col h-[calc(50vh)] max-h-[450px]">
            <h3 className="text-lg font-bold text-white mb-2 flex justify-between items-center">
                <span>AI Chatbot</span>
                <i className="fa-solid fa-robot text-blue-400"></i>
            </h3>
            <div className="flex-grow overflow-y-auto mb-4 pr-2 space-y-4">
                {history.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-lg max-w-sm md:max-w-md ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                           <div className="prose prose-sm prose-invert max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                           </div>
                           {msg.role === 'model' && (
                               <button onClick={() => handleSpeak(msg.content)} className="mt-2 text-xs text-blue-300 hover:text-blue-200">
                                   <i className={`fa-solid ${currentlySpeaking === msg.content ? 'fa-stop-circle' : 'fa-volume-high'} mr-1`}></i>
                                    {currentlySpeaking === msg.content ? 'Stop' : 'Read aloud'}
                               </button>
                           )}
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex justify-start">
                        <div className="p-3 rounded-lg bg-gray-700 text-gray-200">
                            <Spinner />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <div className="mb-2 flex flex-wrap gap-2">
                <button onClick={() => handleQuickQuestion('Summarize the key findings.')} className="bg-gray-600 hover:bg-gray-500 text-xs px-2 py-1 rounded-full">Summarize Findings</button>
                <button onClick={() => handleQuickQuestion('What are the interconnections with other sectors?')} className="bg-gray-600 hover:bg-gray-500 text-xs px-2 py-1 rounded-full">Explain Connections</button>
            </div>
            <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-grow bg-gray-900 border border-gray-600 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-500" disabled={isLoading}>
                    <i className="fa-solid fa-paper-plane"></i>
                </button>
            </form>
        </div>
    );
};


export const AnalysisPanel: React.FC<{ data: ReportData }> = ({ data }) => {
  const [narrative, setNarrative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);

  useEffect(() => {
    // Cleanup speech synthesis on component unmount or when data changes
    return () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            setCurrentlySpeaking(null);
        }
    };
  }, [data]);

  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) {
        alert('Sorry, your browser does not support text-to-speech.');
        return;
    }

    if (currentlySpeaking === text) {
        window.speechSynthesis.cancel();
        setCurrentlySpeaking(null);
        return;
    }

    window.speechSynthesis.cancel();
    
    const cleanText = stripMarkdown(text);
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';

    utterance.onend = () => {
        setCurrentlySpeaking(null);
    };

    utterance.onerror = (e) => {
        console.error('Speech synthesis error:', e);
        setCurrentlySpeaking(null);
    };

    setCurrentlySpeaking(text);
    window.speechSynthesis.speak(utterance);
  };


  const handleGenerateNarrative = useCallback(async () => {
    setIsLoading(true);
    // Stop any speech before generating new content
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        setCurrentlySpeaking(null);
    }
    const result = await generateNarrative(data);
    setNarrative(result);
    setIsLoading(false);
  }, [data]);

  useEffect(() => {
    setNarrative('');
  }, [data]);

  return (
    <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">AI-Powered Narrative</h2>
            {narrative && !isLoading && (
                <button 
                    onClick={() => handleSpeak(narrative)}
                    className="bg-blue-600/50 text-white font-semibold py-2 px-3 rounded-lg hover:bg-blue-500/50 transition-all duration-200 flex items-center justify-center text-sm"
                >
                    <i className={`fa-solid ${currentlySpeaking === narrative ? 'fa-stop-circle' : 'fa-volume-high'} mr-2`}></i>
                    <span>{currentlySpeaking === narrative ? 'Stop Speaking' : 'Read Aloud'}</span>
                </button>
            )}
        </div>
        
        {narrative ? (
            <div className="prose prose-invert max-w-none text-gray-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{narrative}</ReactMarkdown>
            </div>
        ) : (
            <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Click the button to generate an AI-powered analysis and discover the story behind the data.</p>
                <button 
                    onClick={handleGenerateNarrative}
                    disabled={isLoading}
                    className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-500 transition-all duration-200 flex items-center justify-center mx-auto"
                >
                    {isLoading ? <><Spinner /> Generating...</> : <><i className="fa-solid fa-wand-magic-sparkles mr-2"></i>Generate Analysis</>}
                </button>
            </div>
        )}
      </div>
      <Chatbot data={data} handleSpeak={handleSpeak} currentlySpeaking={currentlySpeaking} />
    </div>
  );
};
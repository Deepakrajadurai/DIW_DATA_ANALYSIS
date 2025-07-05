import React, { useState, useEffect, useRef } from 'react';
import type { ReportData, ChatMessage } from '../types';
import { startChat, sendMessageToChat } from '../services/geminiService';
import type { Chat } from '@google/genai';
import { Spinner } from './Spinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

interface ChatbotProps {
    data: ReportData;
}

export const Chatbot: React.FC<ChatbotProps> = ({ data }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [history, setHistory] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const { spokenText, speakingState, speak, pause, resume, stop } = useSpeechSynthesis();

    useEffect(() => {
        setChat(startChat(data));
        setHistory([{
            role: 'model',
            content: `Hello! I'm ready to answer your questions about the "${data.title}" report.`
        }]);
        stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleSendMessage = async (message: string) => {
        if (!message.trim() || isLoading || !chat) return;

        const newUserMessage: ChatMessage = { role: 'user', content: message };
        setHistory(prev => [...prev, newUserMessage]);
        if (message === userInput) {
          setUserInput('');
        }
        setIsLoading(true);

        const responseText = await sendMessageToChat(chat, message);
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
                {history.map((msg, index) => {
                    const isThisMsgActive = spokenText === msg.content && msg.content !== '';
                    return (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`p-3 rounded-lg max-w-sm md:max-w-md ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-200'}`}>
                               <div className="prose prose-sm prose-invert max-w-none break-words">
                                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                               </div>
                               {msg.role === 'model' && msg.content && (
                                    <div className="flex items-center mt-2 space-x-3 text-xs text-blue-300">
                                        {speakingState === 'speaking' && isThisMsgActive ? (
                                            <button onClick={pause} className="hover:text-white" aria-label="Pause"><i className="fa-solid fa-pause"></i></button>
                                        ) : speakingState === 'paused' && isThisMsgActive ? (
                                            <button onClick={resume} className="hover:text-white" aria-label="Resume"><i className="fa-solid fa-play"></i></button>
                                        ) : (
                                            <button onClick={() => speak(msg.content)} className="hover:text-white" aria-label="Read aloud"><i className="fa-solid fa-volume-high"></i></button>
                                        )}
                                        {(speakingState === 'speaking' || speakingState === 'paused') && isThisMsgActive && (
                                            <button onClick={stop} className="hover:text-white" aria-label="Stop"><i className="fa-solid fa-stop"></i></button>
                                        )}
                                    </div>
                               )}
                            </div>
                        </div>
                    );
                })}
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
                <button onClick={() => handleSendMessage('Summarize the key findings.')} className="bg-gray-600 hover:bg-gray-500 text-xs px-2 py-1 rounded-full">Summarize Findings</button>
                <button onClick={() => handleSendMessage('What are the interconnections with other sectors?')} className="bg-gray-600 hover:bg-gray-500 text-xs px-2 py-1 rounded-full">Explain Connections</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex space-x-2">
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

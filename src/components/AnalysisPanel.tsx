import React, { useState, useEffect, useCallback } from 'react';
import type { ReportData } from '../types';
import { generateNarrative } from '../services/geminiService';
import { Spinner } from './Spinner';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Chatbot } from './Chatbot';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export const AnalysisPanel: React.FC<{ data: ReportData }> = ({ data }) => {
  const [narrative, setNarrative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { currentlySpeaking, toggleSpeech, stopSpeaking } = useSpeechSynthesis();

  const handleGenerateNarrative = useCallback(async () => {
    setIsLoading(true);
    stopSpeaking();
    const result = await generateNarrative(data);
    setNarrative(result);
    setIsLoading(false);
  }, [data, stopSpeaking]);

  useEffect(() => {
    setNarrative('');
    stopSpeaking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">AI-Powered Narrative</h2>
            {narrative && !isLoading && (
                <button 
                    onClick={() => toggleSpeech(narrative)}
                    className="bg-blue-600/50 text-white font-semibold py-2 px-3 rounded-lg hover:bg-blue-500/50 transition-all duration-200 flex items-center justify-center text-sm"
                >
                    <i className={`fa-solid ${currentlySpeaking === narrative ? 'fa-stop-circle' : 'fa-volume-high'} mr-2`}></i>
                    <span>{currentlySpeaking === narrative ? 'Stop Speaking' : 'Read Aloud'}</span>
                </button>
            )}
        </div>
        
        {isLoading ? (
            <div className="text-center py-8 flex justify-center items-center">
                <Spinner /> <span className='ml-2'>Generating...</span>
            </div>
        ) : narrative ? (
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
                   <><i className="fa-solid fa-wand-magic-sparkles mr-2"></i>Generate Analysis</>
                </button>
            </div>
        )}
      </div>
      <Chatbot data={data} />
    </div>
  );
};
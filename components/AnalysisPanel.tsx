import React, { useState, useEffect, useCallback } from 'react';
import type { ReportData } from '../types';
import { generateNarrative } from '../services/geminiService';
import { Spinner } from './Spinner';
import { Chatbot } from './Chatbot';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export const AnalysisPanel: React.FC<{ data: ReportData }> = ({ data }) => {
  const [narrative, setNarrative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { currentlySpeaking, toggleSpeech, stopSpeaking } = useSpeechSynthesis();

  const handleGenerateNarrative = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setNarrative(''); // Clear previous narrative before fetching new one
    stopSpeaking();
    try {
      const result = await generateNarrative(data);
      if (result.startsWith("An error occurred")) {
        setError(result);
      } else {
        setNarrative(result);
      }
    } catch (e: any) {
        const errorMessage = "An unexpected error occurred during narrative generation.";
        console.error(errorMessage, e);
        setError(errorMessage);
    } finally {
        setIsLoading(false);
    }
  }, [data, stopSpeaking]);

  // When the report (data) changes, reset the panel to its initial state.
  useEffect(() => {
    setNarrative('');
    setError('');
    setIsLoading(false);
    stopSpeaking();
  }, [data, stopSpeaking]);
  
  const renderNarrativeContent = () => {
      if (isLoading) {
          return (
              <div className="text-center py-8 flex justify-center items-center min-h-[200px]">
                  <Spinner /> <span className='ml-2 text-gray-300'>Generating AI analysis...</span>
              </div>
          );
      }
      
      if (error) {
          return (
              <div className="text-center py-8 text-red-400 bg-red-900/20 rounded-lg p-4">
                 <p className="font-semibold">Analysis Failed</p>
                 <p className="text-sm mb-4">{error}</p>
                  <button 
                     onClick={handleGenerateNarrative}
                     className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center mx-auto"
                 >
                    <i className="fa-solid fa-arrows-rotate mr-2"></i>Try Again
                 </button>
             </div>
          );
      }
      
      if (narrative) {
          return (
              <div className="text-gray-300 whitespace-pre-wrap font-sans text-base leading-relaxed">
                  {narrative}
              </div>
          );
      }
      
      return (
          <div className="text-center py-8">
              <p className="text-gray-400 mb-4">Click the button to generate an AI-powered analysis and discover the story behind the data.</p>
              <button 
                  onClick={handleGenerateNarrative}
                  disabled={isLoading}
                  className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-500 transition-all duration-200 flex items-center justify-center mx-auto"
              >
                 <i className="fa-solid fa-wand-magic-sparkles mr-2"></i>Generate Analysis
              </button>
          </div>
      );
  };

  return (
    <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col min-h-[400px]">
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
            <h2 className="text-2xl font-bold text-white">AI-Powered Narrative</h2>
            {narrative && !isLoading && !error && (
                <button 
                    onClick={() => toggleSpeech(narrative)}
                    className="bg-blue-600/50 text-white font-semibold py-2 px-3 rounded-lg hover:bg-blue-500/50 transition-all duration-200 flex items-center justify-center text-sm"
                >
                    <i className={`fa-solid ${currentlySpeaking === narrative ? 'fa-stop-circle' : 'fa-volume-high'} mr-2`}></i>
                    <span>{currentlySpeaking === narrative ? 'Stop Speaking' : 'Read Aloud'}</span>
                </button>
            )}
        </div>
        
        <div className="flex-grow overflow-y-auto">
            {renderNarrativeContent()}
        </div>
      </div>
      <Chatbot data={data} />
    </div>
  );
};
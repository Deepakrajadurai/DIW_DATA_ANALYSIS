import React, { useState, useEffect, useCallback } from 'react';
import type { ReportData } from '../types';
import { generateNarrative } from '../services/geminiService';
import { Spinner } from './Spinner';
import { Chatbot } from './Chatbot';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';

export const AnalysisPanel: React.FC<{ data: ReportData }> = ({ data }) => {
  const [narrative, setNarrative] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { spokenText, speakingState, speak, pause, resume, stop } = useSpeechSynthesis();

  const handleGenerateNarrative = useCallback(async () => {
    setIsLoading(true);
    stop(); // Stop any currently playing speech from previous narratives
    setNarrative('');
    const result = await generateNarrative(data);
    setNarrative(result);
    setIsLoading(false);
  }, [data, stop]);

  useEffect(() => {
    setNarrative('');
    stop(); // Cleanup speech on data change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const isNarrativeActive = spokenText === narrative && narrative !== '';

  return (
    <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">AI-Powered Narrative</h2>
            {narrative && !isLoading && (
                <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                    {speakingState === 'speaking' && isNarrativeActive ? (
                        <button onClick={pause} className="bg-yellow-500/80 text-white font-semibold py-2 px-3 rounded-lg hover:bg-yellow-400/80 transition-all duration-200 flex items-center justify-center text-sm" aria-label="Pause">
                            <i className="fa-solid fa-pause mr-2"></i>
                            <span>Pause</span>
                        </button>
                    ) : speakingState === 'paused' && isNarrativeActive ? (
                        <button onClick={resume} className="bg-green-600/80 text-white font-semibold py-2 px-3 rounded-lg hover:bg-green-500/80 transition-all duration-200 flex items-center justify-center text-sm" aria-label="Resume">
                            <i className="fa-solid fa-play mr-2"></i>
                            <span>Resume</span>
                        </button>
                    ) : (
                        <button onClick={() => speak(narrative)} className="bg-blue-600/50 text-white font-semibold py-2 px-3 rounded-lg hover:bg-blue-500/50 transition-all duration-200 flex items-center justify-center text-sm" aria-label="Read Aloud">
                            <i className="fa-solid fa-volume-high mr-2"></i>
                            <span>Read Aloud</span>
                        </button>
                    )}
                    {(speakingState === 'speaking' || speakingState === 'paused') && isNarrativeActive && (
                         <button onClick={stop} className="bg-red-600/50 text-white font-semibold py-2 px-3 rounded-lg hover:bg-red-500/50 transition-all duration-200 flex items-center justify-center text-sm" aria-label="Stop">
                            <i className="fa-solid fa-stop mr-2"></i>
                            <span>Stop</span>
                        </button>
                    )}
                </div>
            )}
        </div>
        
        <div className="min-h-[200px]">
          {isLoading ? (
              <div className="text-center py-8 flex justify-center items-center">
                  <Spinner /> <span className='ml-2'>Generating...</span>
              </div>
          ) : narrative ? (
              <div className="font-serif text-lg leading-relaxed text-gray-200 break-words whitespace-pre-wrap">
                  {narrative}
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
      </div>
      <Chatbot data={data} />
    </div>
  );
};
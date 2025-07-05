
import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { generateStoryboard } from '../services/geminiService';
import type { ReportData, StoryboardData } from '../types';
import { Spinner } from './Spinner';
import { ChartComponent } from './ChartComponent';
import { RelationshipGraph } from './RelationshipGraph';

interface StoryboardPanelProps {
    allData: ReportData[];
}

export const StoryboardPanel: React.FC<StoryboardPanelProps> = ({ allData }) => {
    const [storyboardData, setStoryboardData] = useState<StoryboardData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleGenerateStoryboard = useCallback(async () => {
        setIsLoading(true);
        setError('');
        setStoryboardData(null);
        if (allData.length < 2) {
            setError("Please add at least two reports to generate a storyboard.");
            setIsLoading(false);
            return;
        }
        const result = await generateStoryboard(allData);
        if (!result) {
            setError("An error occurred while generating the storyboard. The AI couldn't process the request. Please check the console for details.");
        } else {
            setStoryboardData(result);
        }
        setIsLoading(false);
    }, [allData]);

    const InfoCard: React.FC<{ title: string; icon: string; children: React.ReactNode }> = ({ title, icon, children }) => (
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <i className={`fa-solid ${icon} mr-3 text-blue-400`}></i>
                {title}
            </h3>
            <div className="prose prose-invert max-w-none text-gray-300">
                {children}
            </div>
        </div>
    );

    return (
        <div className="flex-grow p-6 overflow-y-auto bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">AI Macroeconomic Storyboard</h2>
                <p className="text-gray-400 mb-6">Generate a high-level narrative with synthesized charts and AI analysis to see the bigger picture across all economic reports.</p>
                
                {!storyboardData && !isLoading && (
                    <div className="text-center py-8">
                        <button 
                            onClick={handleGenerateStoryboard}
                            disabled={isLoading || allData.length < 2}
                            className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-500 transition-all duration-200 flex items-center justify-center mx-auto text-lg disabled:cursor-not-allowed"
                            title={allData.length < 2 ? "Add at least two reports to enable this feature" : "Generate Storyboard"}
                        >
                            <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>Generate Storyboard
                        </button>
                         {allData.length < 2 && <p className="text-yellow-400 text-sm mt-4">This feature requires at least two economic reports to analyze relationships.</p>}
                    </div>
                )}
                
                {isLoading && (
                    <div className="flex justify-center items-center py-10">
                        <Spinner />
                        <span className="ml-4 text-lg text-gray-300">Synthesizing reports and building visualizations...</span>
                    </div>
                )}

                {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-md my-4">{error}</p>}
                
                {storyboardData && (
                    <>
                        <div className="mt-4 border-t border-gray-700 pt-6">
                            <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">The Singularity Thesis</h3>
                            <div className="prose prose-invert max-w-none text-gray-300">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{storyboardData.narrative}</ReactMarkdown>
                            </div>
                        </div>
                        
                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
                           <div className="lg:col-span-3">
                                <h3 className="text-2xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Inter-Report Relationships</h3>
                                {storyboardData.relationshipGraph && storyboardData.relationshipGraph.nodes.length > 0 ? (
                                    <RelationshipGraph graph={storyboardData.relationshipGraph} />
                                ) : (
                                    <div className="bg-gray-700/50 p-4 rounded-lg text-center text-gray-400 mt-4">
                                        <p>The AI did not generate a relationship graph for this synthesis.</p>
                                    </div>
                                )}
                           </div>
                           <div className="lg:col-span-2 flex flex-col gap-8">
                                <h3 className="text-2xl font-bold text-white mb-0 border-b border-gray-600 pb-2">Synthesized Visualizations</h3>
                                {storyboardData.charts.length > 0 ? (
                                    storyboardData.charts.map((chart, index) => (
                                        <ChartComponent key={index} chartConfig={chart} />
                                    ))
                                ) : (
                                    <div className="bg-gray-700/50 p-4 rounded-lg text-center text-gray-400 mt-4">
                                        <p>The AI did not generate specific visualizations for this synthesis.</p>
                                    </div>
                                )}
                           </div>
                        </div>

                        <div className="mt-10 space-y-8">
                            <InfoCard title="AI Introspection: The 'Why'" icon="fa-brain">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{storyboardData.introspection}</ReactMarkdown>
                            </InfoCard>

                            <InfoCard title="AI Retrospection: The 'What If'" icon="fa-magnifying-glass-chart">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>{storyboardData.retrospection}</ReactMarkdown>
                            </InfoCard>
                        </div>

                         <div className="text-center mt-12">
                            <button 
                                onClick={handleGenerateStoryboard}
                                disabled={isLoading}
                                className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-500 disabled:bg-gray-500 transition-all duration-200 flex items-center justify-center mx-auto"
                            >
                                <i className="fa-solid fa-arrows-rotate mr-2"></i>Regenerate Storyboard
                            </button>
                         </div>
                    </>
                )}
            </div>
        </div>
    );
};
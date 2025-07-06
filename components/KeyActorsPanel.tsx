
import React from 'react';
import type { StoryboardData } from '../types';
import { Spinner } from './Spinner';

interface KeyActorsPanelProps {
    storyboardData: StoryboardData | null;
    isLoading: boolean;
    onGenerateStoryboard: () => void;
}

export const KeyActorsPanel: React.FC<KeyActorsPanelProps> = ({ storyboardData, isLoading, onGenerateStoryboard }) => {

    if (isLoading) {
        return (
            <div className="flex-grow p-6 flex justify-center items-center bg-gray-900">
                <Spinner />
                <span className="ml-4 text-lg text-gray-300">Storyboard is being generated...</span>
            </div>
        );
    }

    if (!storyboardData || !storyboardData.keyActors || storyboardData.keyActors.length === 0) {
        return (
            <div className="flex-grow p-6 flex flex-col justify-center items-center text-center bg-gray-900">
                 <div className="bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700 max-w-2xl mx-auto">
                    <i className="fa-solid fa-users-viewfinder text-6xl text-blue-400 mb-4"></i>
                    <h2 className="text-3xl font-bold text-white mb-4">Key Actors Analysis</h2>
                    <p className="text-gray-400 mb-6">
                        This view displays the key actors and stakeholders identified by the AI in the macroeconomic storyboard.
                    </p>
                    <p className="text-yellow-400 bg-yellow-900/50 p-3 rounded-md mb-6">
                        No storyboard has been generated yet. Please generate an AI Storyboard to populate this view.
                    </p>
                    <button 
                        onClick={onGenerateStoryboard}
                        className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all duration-200 flex items-center justify-center mx-auto text-lg"
                    >
                        <i className="fa-solid fa-wand-magic-sparkles mr-3"></i>Go to Storyboard & Generate
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-grow p-6 overflow-y-auto bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">{storyboardData.title}: Key Actors</h2>
                <p className="text-gray-400 mb-8 max-w-4xl">
                    Identified by the AI as the central figures in the synthesized macroeconomic narrative.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {storyboardData.keyActors.map((actor, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 flex flex-col items-center text-center transform hover:-translate-y-2 hover:border-green-400 transition-all duration-300">
                             <div className="text-5xl text-green-400 mb-5 p-5 bg-gray-700/50 rounded-full">
                                <i className={actor.icon}></i>
                             </div>
                             <h3 className="text-2xl font-bold text-white mb-3">{actor.name}</h3>
                             <p className="text-gray-300 flex-grow">{actor.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

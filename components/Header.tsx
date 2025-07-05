
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 shadow-md p-4 border-b border-gray-700 flex items-center space-x-4 z-10 flex-shrink-0">
            <div className="p-2 bg-blue-600 rounded-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <h1 className="text-2xl font-bold text-white">German Economic Insights Dashboard</h1>
        </header>
    );
};
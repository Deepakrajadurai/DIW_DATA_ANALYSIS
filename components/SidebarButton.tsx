
import React from 'react';
import type { ReportTopic } from '../types';

interface SidebarButtonProps {
    topic: ReportTopic;
    isSelected: boolean;
    onClick: () => void;
    isSpecial?: boolean;
}

export const SidebarButton: React.FC<SidebarButtonProps> = ({ topic, isSelected, onClick, isSpecial = false }) => {
    const selectedClasses = isSpecial 
        ? 'bg-green-600 text-white shadow-lg'
        : 'bg-blue-600 text-white shadow-lg';
    
    const baseClasses = 'text-gray-400 hover:bg-gray-700 hover:text-white';

    return (
        <button
            onClick={onClick}
            className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${
                isSelected ? selectedClasses : baseClasses
            }`}
        >
            <span className="w-6 h-6 flex-shrink-0">{topic.icon}</span>
            <span className="font-medium truncate" title={topic.title}>{topic.title}</span>
        </button>
    );
};

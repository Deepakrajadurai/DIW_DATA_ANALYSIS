
import React from 'react';
import type { ReportTopic } from '../types';
import { StoryboardIcon, AddReportIcon } from './icons';

interface SidebarProps {
  topics: ReportTopic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
}

const specialButtons = [
  { id: 'storyboard', title: 'AI Storyboard', icon: <StoryboardIcon /> },
  { id: 'add_report', title: 'Add New Report', icon: <AddReportIcon /> },
]

export const Sidebar: React.FC<SidebarProps> = ({ topics, selectedTopicId, onSelectTopic }) => {
  return (
    <aside className="w-64 bg-gray-800 p-4 flex-shrink-0 flex flex-col border-r border-gray-700">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold mb-2 text-gray-300">Analysis Tools</h2>
        <nav className="flex flex-col space-y-2">
            {specialButtons.map((button) => (
              <button
                key={button.id}
                onClick={() => onSelectTopic(button.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  selectedTopicId === button.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="w-6 h-6">{button.icon}</span>
                <span className="font-medium">{button.title}</span>
              </button>
            ))}
        </nav>
        
        <hr className="border-gray-600 my-6" />

        <h2 className="text-xl font-bold mb-4 text-gray-300">Economic Reports</h2>
        <nav className="flex flex-col space-y-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                selectedTopicId === topic.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="w-6 h-6">{topic.icon}</span>
              <span className="font-medium">{topic.title}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto text-center text-gray-500 text-xs flex-shrink-0 pt-4">
          <p>&copy; 2024 DIW Berlin Analysis</p>
          <p>Powered by Gemini</p>
      </div>
    </aside>
  );
};

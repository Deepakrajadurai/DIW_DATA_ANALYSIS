import React from 'react';
import type { ReportTopic } from '../types';
import { StoryboardIcon, AddReportIcon, TimelineIcon } from './icons';
import { SidebarButton } from './SidebarButton';

interface SidebarProps {
  topics: ReportTopic[];
  selectedTopicId: string;
  onSelectTopic: (id: string) => void;
}

const specialButtons: ReportTopic[] = [
  { id: 'storyboard', title: 'AI Storyboard', icon: <StoryboardIcon /> },
  { id: 'highlights', title: 'Highlights Timeline', icon: <TimelineIcon /> },
  { id: 'add_report', title: 'Add New Report', icon: <AddReportIcon /> },
];

export const Sidebar: React.FC<SidebarProps> = ({ topics, selectedTopicId, onSelectTopic }) => {
  return (
    <aside className="w-72 bg-gray-800 p-4 flex-shrink-0 flex flex-col border-r border-gray-700">
      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-bold mb-2 text-gray-300">Analysis Tools</h2>
        <nav className="flex flex-col space-y-2">
            {specialButtons.map((button) => (
              <SidebarButton
                key={button.id}
                topic={button}
                isSelected={selectedTopicId === button.id}
                onClick={() => onSelectTopic(button.id)}
                isSpecial
              />
            ))}
        </nav>
        
        <hr className="border-gray-600 my-6" />

        <h2 className="text-xl font-bold mb-4 text-gray-300">Economic Reports</h2>
        <nav className="flex flex-col space-y-2">
          {topics.map((topic) => (
            <SidebarButton
              key={topic.id}
              topic={topic}
              isSelected={selectedTopicId === topic.id}
              onClick={() => onSelectTopic(topic.id)}
            />
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

import React from 'react';
import type { ReportData } from '../types';
import { ChartComponent } from './ChartComponent';

export const VisualizationPanel: React.FC<{ data: ReportData }> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-6 overflow-y-auto pr-2">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-3">{data.title}</h2>
        <p className="text-gray-300 mb-4">{data.summary}</p>
        <div className="border-t border-gray-700 pt-4">
            <h3 className="text-md font-semibold text-gray-200 mb-2">Key Findings:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
                {data.keyFindings.map((finding, index) => <li key={index}>{finding}</li>)}
            </ul>
        </div>
      </div>
      
      {data.charts.map((chartConfig, index) => (
        <ChartComponent key={index} chartConfig={chartConfig} />
      ))}
    </div>
  );
};

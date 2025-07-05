import React, { useMemo } from 'react';
import type { ReportData } from '../types';

interface HighlightsPanelProps {
    allData: ReportData[];
    onSelectTopic: (id: string) => void;
}

export const HighlightsPanel: React.FC<HighlightsPanelProps> = ({ allData, onSelectTopic }) => {
    const sortedData = useMemo(() => {
        // Filter out reports without a valid date before sorting
        return allData
            .filter(report => report.releaseDate && !isNaN(new Date(report.releaseDate).getTime()))
            .sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    }, [allData]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className="flex-grow p-6 overflow-y-auto bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Report Highlights Timeline</h2>
                <div className="relative border-l-2 border-gray-700 ml-6 pl-10">
                    {sortedData.map((report, index) => (
                        <div key={report.id} className="mb-12 relative">
                            <div className="absolute -left-[2.8rem] top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                                <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                            </div>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 hover:border-blue-500 transition-colors duration-300 group">
                                <p className="text-sm text-gray-400 mb-2">{formatDate(report.releaseDate)}</p>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{report.title}</h3>
                                <p className="text-gray-300 mb-4 italic">"{report.keyFindings[0]}"</p>
                                <button
                                    onClick={() => onSelectTopic(report.id)}
                                    className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                                    aria-label={`View full report for ${report.title}`}
                                >
                                    View Full Report &rarr;
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { VisualizationPanel } from './components/VisualizationPanel';
import { AnalysisPanel } from './components/AnalysisPanel';
import { StoryboardPanel } from './components/StoryboardPanel';
import { AddReportPanel } from './components/AddReportPanel';
import { HighlightsPanel } from './components/HighlightsPanel';
import { KeyActorsPanel } from './components/KeyActorsPanel';
import { REPORT_TOPICS } from './constants';
import * as databaseService from './services/databaseService';
import { generateStoryboard } from './services/geminiService';
import type { ReportTopic, ReportData, StoryboardData } from './types';
import { Header } from './components/Header';
import { DocumentIcon } from './components/icons';

const App: React.FC = () => {
  const [allData, setAllData] = useState<ReportData[]>([]);
  const [selectedTopicId, setSelectedTopicId] = useState<string>('storyboard');
  
  // State for shared AI Storyboard data
  const [storyboardData, setStoryboardData] = useState<StoryboardData | null>(null);
  const [isStoryboardLoading, setIsStoryboardLoading] = useState(false);
  const [storyboardError, setStoryboardError] = useState('');

  useEffect(() => {
    databaseService.initializeDatabase();
    const reportsFromDb = databaseService.getReports();
    setAllData(reportsFromDb);
  }, []);

  const topics = useMemo<ReportTopic[]>(() => {
    const topicIconMap = REPORT_TOPICS.reduce((acc, topic) => {
        acc[topic.id] = topic.icon;
        return acc;
    }, {} as Record<string, React.ReactNode>);

    const sortedData = [...allData].sort((a, b) => {
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
    });

    return sortedData.map(report => ({
        id: report.id,
        title: report.title,
        icon: topicIconMap[report.id] || <DocumentIcon />,
    }));
  }, [allData]);

  const selectedTopicData = useMemo((): ReportData | undefined => {
    return allData.find(item => item.id === selectedTopicId);
  }, [selectedTopicId, allData]);

  const handleAddNewReports = useCallback((newReports: ReportData[]) => {
    if (newReports.length === 0) {
      return;
    }

    const existingIds = new Set(allData.map(d => d.id));
    const uniqueNewReports = newReports.filter(report => !existingIds.has(report.id));

    if (uniqueNewReports.length > 0) {
        const newData = [...allData, ...uniqueNewReports];
        databaseService.saveReports(newData);
        setAllData(newData);
        setSelectedTopicId(uniqueNewReports[uniqueNewReports.length - 1].id);
    } else {
        setSelectedTopicId(newReports[newReports.length - 1].id);
    }
  }, [allData]);

  const handleGenerateStoryboard = useCallback(async () => {
    setIsStoryboardLoading(true);
    setStoryboardError('');
    setStoryboardData(null);
    if (allData.length < 2) {
        setStoryboardError("Please add at least two reports to generate a storyboard.");
        setIsStoryboardLoading(false);
        return;
    }
    const result = await generateStoryboard(allData);
    if (!result) {
        setStoryboardError("An error occurred while generating the storyboard. The AI couldn't process the request. Please check the console for details.");
    } else {
        setStoryboardData(result);
    }
    setIsStoryboardLoading(false);
  }, [allData]);


  const renderContent = () => {
    switch (selectedTopicId) {
        case 'storyboard':
            return <StoryboardPanel
                allData={allData}
                storyboardData={storyboardData}
                isLoading={isStoryboardLoading}
                error={storyboardError}
                onGenerateStoryboard={handleGenerateStoryboard}
            />;
        case 'key_actors':
            return <KeyActorsPanel 
                storyboardData={storyboardData}
                isLoading={isStoryboardLoading}
                onGenerateStoryboard={() => {
                    setSelectedTopicId('storyboard');
                    if (!storyboardData) {
                        handleGenerateStoryboard();
                    }
                }}
            />;
        case 'highlights':
            return <HighlightsPanel allData={allData} onSelectTopic={setSelectedTopicId} />;
        case 'add_report':
            return <AddReportPanel onReportsAdded={handleAddNewReports} />;
        default:
            if (selectedTopicData) {
                return (
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4 w-full overflow-y-auto">
                        <VisualizationPanel data={selectedTopicData} />
                        <AnalysisPanel data={selectedTopicData} />
                    </div>
                );
            }
            return (
                <div className="flex-grow flex items-center justify-center p-4 text-center">
                    <p className="text-gray-400">Please select a report from the sidebar, or add a new one.</p>
                </div>
            );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-900 text-gray-200">
      <Header />
      <div className="flex flex-grow overflow-hidden h-[calc(100vh-68px)]">
        <Sidebar 
          topics={topics} 
          selectedTopicId={selectedTopicId} 
          onSelectTopic={setSelectedTopicId} 
        />
        <main className="flex-grow flex w-full overflow-hidden">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { createReportFromText } from '../services/geminiService';
import { extractTextFromPdf } from '../services/pdfService';
import type { ReportData } from '../types';
import { Spinner } from './Spinner';

interface AddReportPanelProps {
    onReportsAdded: (newReports: ReportData[]) => void;
}

export const AddReportPanel: React.FC<AddReportPanelProps> = ({ onReportsAdded }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [error, setError] = useState('');
    const [isDragging, setIsDragging] = useState(false);

    const handleAnalyze = async (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedFiles.length === 0) {
            setError('Please select one or more PDF files to analyze.');
            return;
        }
        setIsLoading(true);
        setError('');

        const totalFiles = selectedFiles.length;
        let filesProcessed = 0;
        const newReports: ReportData[] = [];
        const errors: string[] = [];

        for (const file of selectedFiles) {
            filesProcessed++;
            setLoadingMessage(`Processing ${filesProcessed} of ${totalFiles}: ${file.name}`);
            try {
                const reportText = await extractTextFromPdf(file);
                if (!reportText.trim()) {
                    throw new Error('Could not extract text. The file might be empty or image-based.');
                }

                const newReportData = await createReportFromText(reportText);
                if (newReportData) {
                    newReports.push(newReportData);
                } else {
                    throw new Error('AI could not structure the data from the text.');
                }
            } catch (err: any) {
                 const errorMessage = `Failed to process "${file.name}": ${err.message || 'Unknown error'}`;
                 console.error(errorMessage, err);
                 errors.push(errorMessage);
            }
        }
        
        if (newReports.length > 0) {
            onReportsAdded(newReports);
        }

        setIsLoading(false);
        setLoadingMessage('');
        setSelectedFiles([]); // Clear list after processing

        if (errors.length > 0) {
            setError(`${errors.length} file(s) failed to process. First error: ${errors[0]}`);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            const pdfFiles = newFiles.filter(file => file.type === "application/pdf");
            
            if (pdfFiles.length !== newFiles.length) {
                setError('Some files were not PDFs and were ignored.');
            } else {
                setError('');
            }

            const uniqueNewFiles = pdfFiles.filter(
                newFile => !selectedFiles.some(existingFile => existingFile.name === newFile.name)
            );
            setSelectedFiles(prevFiles => [...prevFiles, ...uniqueNewFiles]);
            
            // Reset the input value to allow selecting the same file again after removing it
            e.target.value = '';
        }
    };
    
    const handleRemoveFile = (fileNameToRemove: string) => {
        setSelectedFiles(prevFiles => prevFiles.filter(file => file.name !== fileNameToRemove));
    };


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files) {
            const newFiles = Array.from(e.dataTransfer.files);
            const pdfFiles = newFiles.filter(file => file.type === "application/pdf");

            if (pdfFiles.length !== newFiles.length) {
                setError('Some files were not PDFs and were ignored.');
            } else {
                setError('');
            }
            
            const uniqueNewFiles = pdfFiles.filter(
                newFile => !selectedFiles.some(existingFile => existingFile.name === newFile.name)
            );
            setSelectedFiles(prevFiles => [...prevFiles, ...uniqueNewFiles]);
        }
    };

    return (
        <div className="flex-grow p-6 overflow-y-auto bg-gray-900">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-700 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Create Dashboards from PDFs</h2>
                <p className="text-gray-400 mb-6">
                    Upload one or more PDF reports. The AI will read them, extract key findings, generate charts, and create a new interactive dashboard for each file.
                </p>

                <form onSubmit={handleAnalyze}>
                    <div 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        className={`relative w-full min-h-64 border-2 border-dashed rounded-lg p-4 flex flex-col justify-center items-center text-center transition-colors duration-300 ${isDragging ? 'border-blue-500 bg-gray-700' : 'border-gray-600'}`}
                    >
                         <div 
                            className="absolute inset-0 bg-transparent cursor-pointer" 
                            onClick={() => document.getElementById('pdf-upload')?.click()}
                         ></div>
                        <input
                            type="file"
                            id="pdf-upload"
                            className="hidden"
                            accept="application/pdf"
                            onChange={handleFileChange}
                            disabled={isLoading}
                            multiple
                            aria-label="PDF report upload"
                        />
                         {selectedFiles.length > 0 ? (
                            <div className="w-full text-left overflow-y-auto max-h-48 pr-2 z-10">
                                <h4 className="font-semibold text-gray-300 mb-2">Selected Files:</h4>
                                <ul className="space-y-2">
                                    {selectedFiles.map(file => (
                                        <li key={file.name} className="bg-gray-700 p-2 rounded-md flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-2 overflow-hidden">
                                                <i className="fa-solid fa-file-pdf text-red-400 flex-shrink-0"></i>
                                                <span className="text-gray-200 truncate" title={file.name}>{file.name}</span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={(e) => { e.stopPropagation(); handleRemoveFile(file.name); }}
                                                className="text-gray-400 hover:text-white flex-shrink-0 ml-2"
                                                aria-label={`Remove ${file.name}`}
                                                disabled={isLoading}
                                            >
                                                <i className="fa-solid fa-times-circle"></i>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <div className="text-center z-10 pointer-events-none">
                                <i className="fa-solid fa-cloud-arrow-up text-5xl text-gray-500 mb-4"></i>
                                <p className="text-gray-300">
                                    <span className="font-semibold text-blue-400">Click to upload</span> or drag and drop PDF files here.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">Multiple files are supported</p>
                            </div>
                        )}
                    </div>

                    {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
                    
                    <div className="mt-6 text-center">
                        <button
                            type="submit"
                            disabled={isLoading || selectedFiles.length === 0}
                            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-500 transition-all duration-200 flex items-center justify-center mx-auto text-lg"
                        >
                            {isLoading ? (
                                <>
                                    <Spinner /> {loadingMessage || 'Analyzing...'}
                                </>
                            ) : (
                                <>
                                    <i className="fa-solid fa-microchip-ai mr-3"></i>Analyze {selectedFiles.length > 0 ? `${selectedFiles.length} PDF(s)` : ''} & Generate Dashboards
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
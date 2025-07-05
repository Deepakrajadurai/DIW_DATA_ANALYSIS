
import type { ReportData } from '../types';
import { PREPROCESSED_DATA } from '../constants/preprocessedData';

const USER_REPORTS_LOCAL_STORAGE_KEY = 'diw-dashboard-user-reports';

/**
 * Initializes the user reports storage in localStorage if it doesn't exist.
 */
export const initializeDatabase = (): void => {
    if (!localStorage.getItem(USER_REPORTS_LOCAL_STORAGE_KEY)) {
        localStorage.setItem(USER_REPORTS_LOCAL_STORAGE_KEY, JSON.stringify([]));
    }
};

/**
 * Retrieves all reports, combining preprocessed and user-added reports.
 * @returns {ReportData[]} An array of reports.
 */
export const getReports = (): ReportData[] => {
    const userReportsData = localStorage.getItem(USER_REPORTS_LOCAL_STORAGE_KEY);
    let userReports: ReportData[] = [];

    if (userReportsData) {
        try {
            userReports = JSON.parse(userReportsData) as ReportData[];
        } catch (e) {
            console.error('Failed to parse user reports from localStorage', e);
            // In case of corruption, reset it.
            localStorage.setItem(USER_REPORTS_LOCAL_STORAGE_KEY, JSON.stringify([]));
        }
    }
    
    // Combine static seed data with dynamic user-added data
    return [...PREPROCESSED_DATA, ...userReports];
};

/**
 * Saves the reports to the database (localStorage).
 * This function filters out the static preprocessed data and only saves user-added reports.
 * @param {ReportData[]} reports The full array of reports to save.
 */
export const saveReports = (reports: ReportData[]): void => {
    const preprocessedIds = new Set(PREPROCESSED_DATA.map(d => d.id));
    const userReports = reports.filter(report => !preprocessedIds.has(report.id));

    try {
        const jsonString = JSON.stringify(userReports);
        localStorage.setItem(USER_REPORTS_LOCAL_STORAGE_KEY, jsonString);
    } catch (e) {
        console.error('Failed to save user reports to localStorage', e);
    }
};

import React from 'react';
import type { ReportTopic } from './types';
import { ConstructionIcon, WomenIcon, EnergyIcon, DebtIcon, CareIcon } from './components/icons';

export const REPORT_TOPICS: ReportTopic[] = [
  { id: 'construction', title: 'Construction Industry Crisis', icon: <ConstructionIcon /> },
  { id: 'women_executives', title: 'Women in Leadership', icon: <WomenIcon /> },
  { id: 'energy_transition', title: 'Energy Transition', icon: <EnergyIcon /> },
  { id: 'sovereign_debt', title: 'Sovereign Debt Crises', icon: <DebtIcon /> },
  { id: 'gender_care_gap', title: 'Gender Care Gap', icon: <CareIcon /> },
];
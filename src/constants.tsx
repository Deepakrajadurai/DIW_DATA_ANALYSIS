import React from 'react';
import type { ReportTopic } from './types';
import { 
    ConstructionIcon, WomenIcon, EnergyIcon, DebtIcon, CareIcon, ElectricityIcon, 
    RetrofittingIcon, FreightIcon, SanctionsIcon, PandemicIcon, OutlookIcon, 
    RefugeeIcon, FinanceIcon, SupplyChainIcon, BehaviorIcon, MonetaryIcon, 
    PricingIcon, HeatIcon, RenovationIcon 
} from './components/icons';

export const REPORT_TOPICS: ReportTopic[] = [
  // Original 5
  { id: 'construction', title: 'Construction Industry Crisis', icon: <ConstructionIcon /> },
  { id: 'women_executives', title: 'Women in Leadership', icon: <WomenIcon /> },
  { id: 'energy_transition', title: 'Energy Transition', icon: <EnergyIcon /> },
  { id: 'sovereign_debt', title: 'Sovereign Debt Crises', icon: <DebtIcon /> },
  { id: 'gender_care_gap', title: 'Gender Care Gap', icon: <CareIcon /> },
  
  // Added 3
  { id: 'electricity_market_stability', title: 'Electricity Market Stability', icon: <ElectricityIcon /> },
  { id: 'thermal_retrofitting', title: 'Thermal Retrofitting', icon: <RetrofittingIcon /> },
  { id: 'electric_road_freight', title: 'Electric Road Freight', icon: <FreightIcon /> },
  
  // Adding the rest of the 28
  { id: 'sanctions_on_russia', title: 'Sanctions on Russia', icon: <SanctionsIcon /> },
  { id: 'gender_gap_coronavirus', title: 'Gender Gap & Coronavirus', icon: <PandemicIcon /> },
  { id: 'economic_outlook_spring_2024', title: 'Economic Outlook Spring 2024', icon: <OutlookIcon /> },
  { id: 'refugee_health_entitlements', title: 'Refugee Health Entitlements', icon: <RefugeeIcon /> },
  { id: 'natural_gas_decommissioning', title: 'Natural Gas Decommissioning', icon: <EnergyIcon /> },
  { id: 'renewable_energy_pool', title: 'Renewable Energy Pool', icon: <EnergyIcon /> },
  { id: 'supply_chain_bargaining', title: 'Supply Chain Bargaining Power', icon: <SupplyChainIcon /> },
  { id: 'remittances_by_migrants', title: 'Remittances by Migrants', icon: <FinanceIcon /> },
  { id: 'economic_outlook_summer_2024', title: 'Economic Outlook Summer 2024', icon: <OutlookIcon /> },
  { id: 'household_carbon_footprint', title: 'Household Carbon Footprint', icon: <BehaviorIcon /> },
  { id: 'sustainable_finance_taxonomies', title: 'Sustainable Finance Taxonomies', icon: <FinanceIcon /> },
  { id: 'paid_and_care_work_division', title: 'Division of Paid and Care Work', icon: <CareIcon /> },
  { id: 'income_work_health_satisfaction', title: 'Income, Work, and Health Satisfaction', icon: <BehaviorIcon /> },
  { id: 'economic_outlook_autumn_2024', title: 'Economic Outlook Autumn 2024', icon: <OutlookIcon /> },
  { id: 'ecb_monetary_policy_energy_crisis', title: 'ECB Monetary Policy & Energy Crisis', icon: <MonetaryIcon /> },
  { id: 'carbon_pricing_dividend', title: 'Carbon Pricing & Climate Dividend', icon: <PricingIcon /> },
  { id: 'heat_monitor_2023', title: 'Heat Monitor 2023', icon: <HeatIcon /> },
  { id: 'energy_efficient_renovation', title: 'Energy-Efficient Renovation', icon: <RenovationIcon /> },
  { id: 'russian_gas_sanctions_supply', title: 'Sanctions on Russian Gas & EU Supply', icon: <SanctionsIcon /> },
  { id: 'economic_outlook_winter_2024', title: 'Economic Outlook Winter 2024', icon: <OutlookIcon /> },
];

// Fix: Added React import to provide the namespace for ReactNode
import React from 'react';

export interface SaleData {
  month: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface CategoryData {
  name: string;
  value: number;
  color: string;
}

export interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  // React.ReactNode requires the 'React' namespace to be available via import
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

export interface InsightMessage {
  role: 'user' | 'assistant';
  content: string;
}

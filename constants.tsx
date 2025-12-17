
import { SaleData, CategoryData } from './types';

export const SALES_DATA: SaleData[] = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000 },
  { month: 'Fev', revenue: 52000, expenses: 31000, profit: 21000 },
  { month: 'Mar', revenue: 48000, expenses: 34000, profit: 14000 },
  { month: 'Abr', revenue: 61000, expenses: 38000, profit: 23000 },
  { month: 'Mai', revenue: 55000, expenses: 35000, profit: 20000 },
  { month: 'Jun', revenue: 67000, expenses: 40000, profit: 27000 },
  { month: 'Jul', revenue: 72000, expenses: 42000, profit: 30000 },
];

export const CATEGORY_DATA: CategoryData[] = [
  { name: 'Software', value: 45, color: '#6366f1' },
  { name: 'Consultoria', value: 25, color: '#8b5cf6' },
  { name: 'Treinamento', value: 15, color: '#ec4899' },
  { name: 'Outros', value: 15, color: '#94a3b8' },
];

export const RECENT_TRANSACTIONS = [
  { id: 1, client: 'Acme Corp', amount: 'R$ 12.500,00', status: 'Pago', date: '2023-10-24' },
  { id: 2, client: 'Globex Ltd', amount: 'R$ 8.200,00', status: 'Pendente', date: '2023-10-23' },
  { id: 3, client: 'Soylent Inc', amount: 'R$ 4.350,00', status: 'Pago', date: '2023-10-22' },
  { id: 4, client: 'Initech', amount: 'R$ 15.000,00', status: 'Cancelado', date: '2023-10-21' },
  { id: 5, client: 'Umbrella Corp', amount: 'R$ 9.100,00', status: 'Pago', date: '2023-10-20' },
];

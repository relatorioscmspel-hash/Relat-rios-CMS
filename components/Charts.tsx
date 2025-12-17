
import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { SALES_DATA, CATEGORY_DATA } from '../constants';

export const RevenueLineChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={SALES_DATA}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
      <XAxis dataKey="month" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `R$${value/1000}k`} />
      <Tooltip 
        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
      />
      <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} name="Receita" />
      <Line type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" name="Despesas" />
    </LineChart>
  </ResponsiveContainer>
);

export const ProfitAreaChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <AreaChart data={SALES_DATA}>
      <defs>
        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
      <XAxis dataKey="month" axisLine={false} tickLine={false} />
      <YAxis axisLine={false} tickLine={false} />
      <Tooltip />
      <Area type="monotone" dataKey="profit" stroke="#10b981" fillOpacity={1} fill="url(#colorProfit)" name="Lucro" />
    </AreaChart>
  </ResponsiveContainer>
);

export const CategoryPieChart = () => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={CATEGORY_DATA}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        dataKey="value"
      >
        {CATEGORY_DATA.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="bottom" height={36}/>
    </PieChart>
  </ResponsiveContainer>
);

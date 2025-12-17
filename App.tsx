
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Search, 
  Bell, 
  Sparkles,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { SALES_DATA, RECENT_TRANSACTIONS } from './constants';
import { RevenueLineChart, CategoryPieChart } from './components/Charts';
import { MetricCardProps } from './types';

// Helper Components
const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group ${
    active ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-500 hover:bg-slate-100'
  }`}>
    <Icon size={20} className={active ? 'text-white' : 'group-hover:text-indigo-600'} />
    <span className="font-medium">{label}</span>
  </div>
);

const MetricCard = ({ title, value, change, icon, trend }: MetricCardProps) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 rounded-xl bg-slate-50 text-indigo-600">
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-sm font-semibold px-2 py-1 rounded-full ${
        trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'
      }`}>
        {trend === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}%
      </div>
    </div>
    <p className="text-slate-500 text-sm font-medium">{title}</p>
    <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
  </div>
);

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 z-50 p-4 bg-indigo-600 text-white rounded-full shadow-2xl"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static z-40 h-full bg-white border-r border-slate-100 transition-all duration-300 ease-in-out
        ${isSidebarOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full lg:w-20 lg:translate-x-0'}
      `}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10 overflow-hidden">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="text-white" size={24} />
            </div>
            {isSidebarOpen && <h1 className="text-xl font-bold text-slate-900 tracking-tight">InsightStream</h1>}
          </div>

          <nav className="flex-1 space-y-2">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={BarChart3} label="Relatórios" />
            <SidebarItem icon={TrendingUp} label="Vendas" />
            <SidebarItem icon={Users} label="Clientes" />
            <SidebarItem icon={Settings} label="Ajustes" />
          </nav>

          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="hidden lg:flex items-center gap-3 px-4 py-3 mt-4 text-slate-400 hover:text-slate-600"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl w-full max-w-md">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquisar relatórios..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell size={20} className="text-slate-500" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-tight">Victor Siqueira</p>
                <p className="text-xs text-slate-500">Diretor Financeiro</p>
              </div>
              <img 
                src="https://picsum.photos/100/100" 
                alt="Profile" 
                className="w-10 h-10 rounded-xl object-cover ring-2 ring-indigo-50"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Dashboard Executivo</h2>
              <p className="text-slate-500">Bem-vindo de volta! Aqui está o resumo financeiro atual.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <button className="flex-1 lg:flex-none px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
                Exportar Dados
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              title="Receita Total" 
              value="R$ 395.000" 
              change={12.5} 
              icon={<TrendingUp size={24} />} 
              trend="up" 
            />
            <MetricCard 
              title="Custo Operacional" 
              value="R$ 251.000" 
              change={4.2} 
              icon={<BarChart3 size={24} />} 
              trend="down" 
            />
            <MetricCard 
              title="Lucro Líquido" 
              value="R$ 144.000" 
              change={18.3} 
              icon={<TrendingUp size={24} />} 
              trend="up" 
            />
            <MetricCard 
              title="Novos Contratos" 
              value="42" 
              change={2.1} 
              icon={<Users size={24} />} 
              trend="neutral" 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Evolução de Receita</h4>
                  <p className="text-sm text-slate-500">Performance mensal consolidada</p>
                </div>
                <select className="bg-slate-50 border-none outline-none text-sm font-medium text-slate-600 px-4 py-2 rounded-lg">
                  <option>Últimos 6 Meses</option>
                  <option>Este Ano</option>
                </select>
              </div>
              <RevenueLineChart />
            </div>

            {/* Category Chart */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 mb-2">Distribuição por Categoria</h4>
              <p className="text-sm text-slate-500 mb-6">Volume de vendas segmentado</p>
              <CategoryPieChart />
              <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-indigo-500"></span> Software</span>
                  <span className="font-bold">45%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-purple-500"></span> Consultoria</span>
                  <span className="font-bold">25%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-pink-500"></span> Treinamento</span>
                  <span className="font-bold">15%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-12">
            {/* Recent Transactions Table */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">Transações Recentes</h4>
                <button className="text-sm text-indigo-600 font-bold hover:underline">Ver todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <th className="pb-4">Cliente</th>
                      <th className="pb-4">Valor</th>
                      <th className="pb-4 text-center">Status</th>
                      <th className="pb-4 text-right">Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {RECENT_TRANSACTIONS.map((tx) => (
                      <tr key={tx.id} className="group hover:bg-slate-50/50">
                        <td className="py-4">
                          <p className="text-sm font-bold text-slate-900">{tx.client}</p>
                        </td>
                        <td className="py-4 text-sm font-medium text-slate-700">{tx.amount}</td>
                        <td className="py-4">
                          <div className={`mx-auto w-fit px-3 py-1 rounded-full text-xs font-bold ${
                            tx.status === 'Pago' ? 'text-emerald-600 bg-emerald-50' : 
                            tx.status === 'Pendente' ? 'text-amber-600 bg-amber-50' : 
                            'text-rose-600 bg-rose-50'
                          }`}>
                            {tx.status}
                          </div>
                        </td>
                        <td className="py-4 text-right text-xs text-slate-500">{tx.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;


import React from 'react';
import { 
  Search, 
  Bell
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Header */}
      <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
        <div className="flex items-center gap-4 bg-slate-100 px-4 py-2 rounded-xl w-full max-w-md">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Pesquisar..." 
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

      {/* Empty Main Content */}
      <main className="flex-1 p-8">
        {/* All content removed as requested */}
      </main>
    </div>
  );
};

export default App;

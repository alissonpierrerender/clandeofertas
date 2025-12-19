
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 border-b border-white/10 glass top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-xl shadow-lg shadow-amber-500/30">
              <i className="fas fa-crown text-slate-900 text-xl"></i>
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight uppercase">
              <span className="text-white">CLAN</span>
              <span className="text-amber-500 ml-1">OFERTAS</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-10 text-sm font-bold tracking-wide uppercase">
            <a href="#vantagens" className="text-white hover:text-amber-400 transition-colors">Vantagens</a>
            <a href="#lojas" className="text-white hover:text-amber-400 transition-colors">Lojas</a>
            <a href="#assistant" className="text-white hover:text-amber-400 transition-colors">Assistente AI</a>
          </div>
          <a 
            href="https://t.me/clandeofertas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-amber-400 to-amber-600 hover:brightness-110 text-slate-950 px-6 py-2.5 rounded-xl text-xs md:text-sm font-black uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-500/20"
          >
            Aderir ao Clan
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

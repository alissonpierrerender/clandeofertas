
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="bg-amber-500 p-2 rounded-xl shadow-lg shadow-amber-500/30">
            <i className="fas fa-crown text-slate-950 text-base"></i>
          </div>
          <span className="font-black uppercase tracking-[0.4em] text-white text-xl">CLAN DE OFERTAS</span>
        </div>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-loose mb-12 font-medium">
          O CLAN é uma comunidade independente focada em economia real. Podemos receber uma pequena comissão por links afiliados, sem custo algum para você.
        </p>
        <div className="flex justify-center gap-10 mb-16">
          <a href="#" className="text-slate-500 hover:text-amber-500 transition-all transform hover:scale-125"><i className="fab fa-instagram text-3xl"></i></a>
          <a href="#" className="text-slate-500 hover:text-amber-500 transition-all transform hover:scale-125"><i className="fab fa-tiktok text-3xl"></i></a>
          <a href="https://t.me/clandeofertas" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-all transform hover:scale-125"><i className="fab fa-telegram-plane text-3xl"></i></a>
        </div>
        <div className="text-[10px] text-slate-600 font-black uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} &bull; CLAN DE OFERTAS &bull; TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 md:pt-48 pb-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full border border-amber-400/40 bg-amber-500/10 backdrop-blur-md">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 gold-dot"></span>
          <span className="text-amber-300 text-[10px] md:text-xs font-black tracking-widest uppercase">Ofertas verificadas pela nossa elite</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-white drop-shadow-2xl">
          A elite da economia <br />
          <span className="text-amber-400">na palma da mão.</span>
        </h1>
        
        <p className="text-slate-300 text-lg md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-md">
          Esqueça os bots genéricos. Receba os preços que as lojas tentam esconder, verificados por especialistas. Junte-se ao clan exclusivo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href="https://t.me/clandeofertas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-xl font-black flex items-center justify-center gap-4 transition-all shadow-2xl shadow-blue-600/40"
          >
            <i className="fab fa-telegram-plane text-2xl group-hover:rotate-12 transition-transform"></i>
            Canal de Ofertas Grátis
          </a>
          
          <div className="flex items-center gap-4 bg-slate-800/80 p-4 rounded-2xl border border-white/20 shadow-xl backdrop-blur-xl">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img key={i} src={`https://picsum.photos/seed/${i + 50}/48/48`} className="w-11 h-11 rounded-full border-2 border-slate-900 shadow-lg" alt="Membro" />
              ))}
            </div>
            <div className="text-left border-l border-white/20 pl-4">
              <div className="text-white font-black text-sm md:text-base">+15.000 Membros</div>
              <div className="text-amber-400 text-[10px] font-bold uppercase tracking-tighter">Comunidade VIP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

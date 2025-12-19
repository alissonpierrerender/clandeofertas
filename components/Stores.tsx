
import React from 'react';

const storeLogos = [
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Mercado Livre', url: 'https://seeklogo.com/images/M/mercado-livre-logo-956627C4B2-seeklogo.com.png' },
  { name: 'AliExpress', url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Aliexpress_logo.svg' },
  { name: 'Shopee', url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg' },
  { name: 'KaBuM!', url: 'https://static.kabum.com.br/conteudo/icons/logo.svg' },
  { name: 'Magalu', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Magalu_logo_%282017%29.svg' }
];

const Stores: React.FC = () => {
  return (
    <section id="lojas" className="py-24 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-white font-black text-3xl mb-4 tracking-tight">Parceiros Oficiais</h2>
        <p className="text-slate-400 mb-16 text-lg font-medium">Monitoramos os preços nas maiores plataformas do mundo em tempo real.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {storeLogos.map((store) => (
            <div 
              key={store.name}
              className="group relative flex flex-col items-center justify-center p-8 rounded-[2rem] gap-4 bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-amber-500/60 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial-gradient from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src={store.url} alt={store.name} className="h-10 w-auto object-contain filter drop-shadow-md grayscale group-hover:grayscale-0 transition-all duration-500" />
              <span className="font-bold text-slate-400 group-hover:text-white text-[10px] uppercase tracking-widest transition-colors">{store.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stores;

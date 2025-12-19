
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AIAssistant from './components/AIAssistant';
import Stores from './components/Stores';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Stores />
        
        <Features />

        <AIAssistant />

        {/* Final CTA Section */}
        <section className="py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-[4rem] blur-xl opacity-20 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative glass rounded-[4rem] p-16 md:p-28 text-center overflow-hidden border border-white/20">
                <h2 className="text-4xl md:text-7xl font-black mb-10 text-white drop-shadow-xl leading-tight">Chega de pagar o <br />preço de tabela.</h2>
                <p className="text-slate-300 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-bold">
                  O CLAN está à sua espera. A entrada é grátis, a economia é eterna.
                </p>
                <a 
                  href="https://t.me/clandeofertas" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-5 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 px-12 md:px-16 py-6 md:py-8 rounded-[2.5rem] text-xl md:text-4xl font-black shadow-2xl tracking-tight hover:scale-105 transition-transform"
                >
                  ENTRAR NO CLAN
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;

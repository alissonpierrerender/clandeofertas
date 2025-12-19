
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage, GroundingSource } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: 'Olá! Sou o Assistente do CLAN. Posso te ajudar a encontrar as melhores ofertas ou tirar dúvidas sobre qualquer produto. O que você procura hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Determine if it's a search query or a conversation
      const isSearch = input.toLowerCase().includes('oferta') || 
                       input.toLowerCase().includes('preço') || 
                       input.toLowerCase().includes('encontre') || 
                       input.toLowerCase().includes('comprar');

      if (isSearch) {
        const result = await geminiService.searchDeals(input);
        setMessages(prev => [...prev, { role: 'assistant', content: result.text, sources: result.sources }]);
      } else {
        const result = await geminiService.getShoppingAdvice([...messages, userMsg]);
        setMessages(prev => [...prev, { role: 'assistant', content: result.text }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Ops, tive um problema ao processar sua solicitação. Tente novamente em instantes!' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 px-4 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-4">Seu Personal Shopper AI</h2>
          <p className="text-slate-400 font-medium">Use nossa inteligência artificial para monitorar preços em tempo real.</p>
        </div>

        <div className="glass rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] shadow-2xl">
          {/* Chat Header */}
          <div className="p-6 border-b border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                <i className="fas fa-robot text-slate-900"></i>
              </div>
              <div>
                <div className="text-white font-bold">CLAN Assistant</div>
                <div className="text-emerald-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span> Online
                </div>
              </div>
            </div>
            <i className="fas fa-ellipsis-v text-slate-500"></i>
          </div>

          {/* Chat Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-slate-900/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-xl' 
                    : 'bg-slate-800 text-slate-100 rounded-tl-none border border-white/10'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  
                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-[10px] font-bold uppercase text-slate-400 mb-2">Fontes Verificadas:</p>
                      <div className="flex flex-wrap gap-2">
                        {msg.sources.map((s, si) => (
                          <a 
                            key={si} 
                            href={s.uri} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[10px] bg-slate-700 hover:bg-slate-600 px-2 py-1 rounded text-amber-400 font-bold transition-colors"
                          >
                            {s.title.slice(0, 20)}...
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-2">
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-6 bg-white/5 border-t border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ex: Qual o menor preço do iPhone 15 hoje?"
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors pr-16"
              />
              <button 
                onClick={handleSend}
                disabled={loading}
                className="absolute right-2 p-3 bg-amber-500 text-slate-900 rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;

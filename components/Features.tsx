
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Curadoria de Elite",
      desc: "Nossa equipe de especialistas testa manualmente cada cupom e verifica o histórico de preços. Nada de spam automático.",
      icon: "fa-check-double",
      color: "bg-amber-500"
    },
    {
      title: "Alertas Instantâneos",
      desc: "Erros de preço duram segundos. Com nossa infraestrutura ultra-rápida, você recebe o alerta antes do estoque acabar.",
      icon: "fa-bolt",
      color: "bg-blue-500"
    },
    {
      title: "Transparência Total",
      desc: "Lojas 100% oficiais. Links diretos e protegidos. Sua segurança e economia são nossas prioridades número um.",
      icon: "fa-shield-halved",
      color: "bg-emerald-500"
    }
  ];

  return (
    <section id="vantagens" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group p-10 rounded-[3rem] bg-slate-900/60 border border-white/10 shadow-2xl hover:bg-slate-900/90 hover:border-amber-500/40 transition-all duration-500 transform hover:-translate-y-2">
              <div className={`w-16 h-16 ${f.color}/20 rounded-2xl flex items-center justify-center mb-8 border border-${f.color.split('-')[1]}-500/40 group-hover:scale-110 transition-transform`}>
                <i className={`fas ${f.icon} text-${f.color.split('-')[1]}-500 text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-black mb-4 text-white group-hover:text-amber-400 transition-colors">{f.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg font-medium group-hover:text-slate-200 transition-colors">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-donkey-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-trust-500/10 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-slate-900 mb-10 leading-tight">
          La spesa solidale, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-donkey-500 to-donkey-600">a portata di tap.</span>
        </h1>
        
        <p className="text-3xl text-slate-600 mb-14 max-w-4xl mx-auto leading-normal font-light">
          Donkey connette donatori, negozi e associazioni. Dona cibo fresco ai bisognosi della tua città in pochi tap e guadagna sconti per ogni donazione.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#waitlist" 
            onClick={(e) => scrollToSection(e, 'waitlist')}
            className="w-full sm:w-auto px-12 py-6 bg-donkey-600 hover:bg-donkey-700 text-white rounded-2xl font-bold text-2xl transition-all shadow-xl shadow-donkey-500/25 flex items-center justify-center gap-3 group"
          >
            Unisciti alla lista d'attesa
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={28} />
          </a>
          <a 
            href="#demo-anchor" 
            onClick={(e) => scrollToSection(e, 'demo-anchor')}
            className="w-full sm:w-auto px-12 py-6 bg-white border-2 border-slate-200 hover:border-donkey-300 text-slate-700 hover:text-donkey-600 rounded-2xl font-bold text-2xl transition-all flex items-center justify-center"
          >
            Prova la demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
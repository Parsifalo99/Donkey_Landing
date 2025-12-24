import React, { useState } from 'react';
import Hero from './components/Landing/Hero';
import WaitlistForm from './components/Landing/WaitlistForm';
import PrivacyPolicy from './components/Legal/PrivacyPolicy';
import TermsOfService from './components/Legal/TermsOfService';
import CookiePolicy from './components/Legal/CookiePolicy';
import { Globe, Smartphone, Award, ChevronDown, CheckCircle2, ArrowRightLeft, Mail } from 'lucide-react';

type ViewState = 'home' | 'privacy' | 'terms' | 'cookies';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      // Timeout to allow render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-100">
        <div className="container mx-auto px-6 h-24 flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src="/images/donkey-logo2.jpg" alt="Donkey Logo" className="w-12 h-12 rounded-xl shadow-sm" />
            <span className="text-3xl font-bold tracking-tight text-slate-900">Donkey</span>
          </button>
          
          {/* Only show nav links if on home, or handle redirection */}
          <div className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-600">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')}
              className="hover:text-donkey-600 transition-colors cursor-pointer"
            >
              Caratteristiche
            </a>
            <a 
              href="#demo-anchor" 
              onClick={(e) => scrollToSection(e, 'demo-anchor')}
              className="hover:text-donkey-600 transition-colors cursor-pointer"
            >
              Prova la Demo
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')}
              className="hover:text-donkey-600 transition-colors cursor-pointer"
            >
              Come funziona
            </a>
            <a 
              href="#faq" 
              onClick={(e) => scrollToSection(e, 'faq')}
              className="hover:text-donkey-600 transition-colors cursor-pointer"
            >
              FAQ
            </a>
          </div>
          <a 
            href="#waitlist" 
            onClick={(e) => scrollToSection(e, 'waitlist')}
            className="px-8 py-3 bg-slate-900 text-white text-lg font-bold rounded-xl hover:bg-slate-800 transition-colors"
          >
            Unisciti
          </a>
        </div>
      </nav>

      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />

            {/* Stats Section */}
            <section className="py-20 bg-white border-y border-slate-100">
                <div className="container mx-auto px-4 flex flex-wrap justify-center gap-20 text-center">
                    <div>
                        <div className="text-6xl md:text-7xl font-bold text-donkey-500 mb-3">6M</div>
                        <div className="text-xl font-medium text-slate-500">Persone in povertà alimentare</div>
                    </div>
                    <div>
                        <div className="text-6xl md:text-7xl font-bold text-slate-800 mb-3">&lt;15%</div>
                        <div className="text-xl font-medium text-slate-500">ETS integralmente digitalizzati</div>
                    </div>
                    <div>
                        <div className="text-6xl md:text-7xl font-bold text-red-700 mb-3">+5,8%</div>
                        <div className="text-xl font-medium text-slate-500">Inflazione beni alimentari 2024</div>
                    </div>
                </div>
                <p className="text-center text-base text-slate-400 mt-10">*Dati ISTAT e report settore no-profit</p>
            </section>

            {/* Solution Pillars */}
            <section id="features" className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">La tecnologia al servizio della solidarietà</h2>
                        <p className="text-2xl text-slate-600 font-light leading-relaxed">Abbiamo ripensato la donazione rendendola trasparente, comoda e premiante.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: Smartphone, title: 'Facile come fare la spesa', desc: 'Scegli, compri, doni. Tutto dal tuo telefono.' },
                            { icon: Globe, title: 'Aiuti chi vive vicino a te', desc: 'Le tue donazioni vanno a chi ne ha bisogno nella tua città.' },
                            { icon: CheckCircle2, title: 'Guarda dove va il tuo aiuto', desc: 'Segui il percorso della tua donazione, dall\'acquisto alla consegna.' },
                            { icon: Award, title: 'Più doni, più risparmi', desc: 'Accumuli punti per ogni donazione e ottieni sconti nei negozi dove hai donato.' }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-donkey-50 text-donkey-600 rounded-2xl flex items-center justify-center mb-8">
                                    <feature.icon size={32} />
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-slate-900">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-lg">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Demo Section - REPLACED WITH IFRAME */}
            <section className="py-32 bg-white overflow-hidden relative">
                 <div className="container mx-auto px-4 relative z-10">
                     <div className="text-center mb-16">
                         <span className="text-donkey-600 font-bold tracking-widest uppercase text-lg">Prova il prodotto</span>
                         <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mt-4">
                             <span className="text-donkey-600">Donkey</span>, l'App della Spesa Solidale.
                         </h2>
                         <p className="text-2xl text-slate-500 mt-6 max-w-3xl mx-auto font-light">Interagisci con la demo qui sotto. Nessuna registrazione richiesta. Demo in sviluppo: potrebbero verificarsi problemi di rendering. Il prodotto finale sarà ottimizzato e completo.</p>
                     </div>
                     
                     {/* 
                        RESPONSIVE CONTAINER UPDATE:
                        - Mobile: w-[calc(100%+2rem)] -ml-4 (Edge-to-edge), bg-white, no rounded corners.
                        - Height Fix: Increased min-h to 750px on mobile to prevent squashing.
                        - Desktop: max-w-7xl (Contained), bg-slate-100, rounded-3xl
                     */}
                     <div className="w-[calc(100%+2rem)] -ml-4 md:w-full md:ml-auto md:max-w-7xl md:mx-auto my-8 md:my-16 h-[90vh] md:h-[85vh] min-h-[750px] md:min-h-[600px] max-h-[1200px] md:max-h-[900px] bg-white md:bg-slate-100 rounded-none md:rounded-3xl border-y md:border border-slate-200 shadow-none md:shadow-2xl overflow-hidden relative" id="demo-anchor">
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                             <Smartphone size={48} className="mb-4 opacity-50" />
                             <p className="text-xl font-bold">Demo Preview</p>
                             <p>Caricamento applicazione...</p>
                         </div>
                         <iframe 
                             src="https://sparkling-palmier-b0b511.netlify.app/"
                             className="w-full h-full relative z-10 bg-white block"
                             title="Donkey Interactive Demo"
                             loading="lazy"
                         ></iframe>
                     </div>

                     <div className="flex justify-center mt-10 md:mt-20">
                         <div className="inline-flex items-center gap-4 text-lg text-slate-400 font-medium">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                            Demo live attiva
                         </div>
                     </div>
                 </div>
            </section>

            {/* How It Works Steps */}
            <section id="how-it-works" className="py-32 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl font-bold mb-24 text-center">Come funziona Donkey</h2>
                    <div className="relative">
                        {/* Connection Line */}
                        <div className="hidden md:block absolute top-16 left-0 w-full h-1 bg-slate-700"></div>
                        
                        <div className="grid md:grid-cols-4 gap-12">
                            {[
                                { step: '1', title: 'Scegli', desc: 'Seleziona il negozio e i prodotti da donare.' },
                                { step: '2', title: 'Dona', desc: 'Paghi e il negozio prepara subito la tua donazione.' },
                                { step: '3', title: 'Traccia', desc: 'Segui il percorso della tua donazione fino alla consegna ai volontari.' },
                                { step: '4', title: 'Guadagna', desc: 'Accumuli punti e scopri quante persone hai aiutato.' }
                            ].map((s, i) => (
                                <div key={i} className="relative z-10 text-center">
                                    <div className="w-32 h-32 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-10 text-donkey-500 shadow-2xl">
                                        {s.step}
                                    </div>
                                    <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
                                    <p className="text-slate-200 text-xl leading-relaxed">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-5xl font-bold text-center mb-20 text-slate-900">Perché Donkey è diverso</h2>
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[800px]">
                                <thead className="bg-slate-50 border-b border-slate-200">
                                    <tr>
                                        <th className="p-5 md:p-10 text-slate-500 font-bold text-xl uppercase tracking-wide">Caratteristica</th>
                                        <th className="p-5 md:p-10 font-bold text-donkey-600 bg-donkey-50/50 w-1/3 text-2xl">Donkey</th>
                                        <th className="p-5 md:p-10 text-slate-400 font-bold w-1/3 text-xl">Altre Organizzazioni</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-5 md:p-10 text-slate-700 text-xl font-medium">Cosa doni</td>
                                        <td className="p-5 md:p-10 font-bold bg-donkey-50/10 text-xl">Scegli tu i prodotti</td>
                                        <td className="p-5 md:p-10 text-slate-500 text-xl">Prodotti predefiniti</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 md:p-10 text-slate-700 text-xl font-medium">Tracciabilità e Trasparenza</td>
                                        <td className="p-5 md:p-10 font-bold bg-donkey-50/10 text-xl">Tracciabilità completa in app</td>
                                        <td className="p-5 md:p-10 text-slate-500 text-xl">Variabile</td>
                                    </tr>
                                    <tr>
                                        <td className="p-5 md:p-10 text-slate-700 text-xl font-medium">Impatto Locale</td>
                                        <td className="p-5 md:p-10 font-bold bg-donkey-50/10 text-xl">Negozi e comunità della tua città</td>
                                        <td className="p-5 md:p-10 text-slate-500 text-xl">Variabile / Debole</td>
                                    </tr>
                                     <tr>
                                        <td className="p-5 md:p-10 text-slate-700 text-xl font-medium">Vantaggi per te</td>
                                        <td className="p-5 md:p-10 font-bold bg-donkey-50/10 text-xl">Punti da usare nei negozi dove doni</td>
                                        <td className="p-5 md:p-10 text-slate-500 text-xl">Soddisfazione personale</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:hidden text-center mt-4 text-slate-400 text-sm flex items-center justify-center gap-2">
                        <ArrowRightLeft size={16} className="animate-pulse" />
                        <span>Scorri orizzontalmente per vedere tutto</span>
                    </div>
                </div>
            </section>

            {/* CTA Finale */}
            <section className="py-40 bg-gradient-to-br from-donkey-500 to-donkey-700 text-white text-center">
                <div className="container mx-auto px-4">
                     <h2 className="text-5xl md:text-7xl font-bold mb-16">Pronto a fare la differenza?</h2>
                     <WaitlistForm />
                </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="py-32 bg-slate-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold mb-16 text-center">Domande Frequenti</h2>
                    <div className="space-y-8">
                        {[
                            { 
                                q: "Come posso essere sicuro che la mia donazione arrivi a chi ne ha bisogno?", 
                                a: "Donkey collabora direttamente con associazioni di volontariato verificate e negozi locali affidabili. Ogni donazione viene tracciata dal momento dell'acquisto fino alla consegna. Puoi seguire il percorso della tua donazione attraverso l'app e ricevere notifiche sullo stato di consegna. Inoltre, pubblichiamo regolarmente report di trasparenza che mostrano l'impatto complessivo delle donazioni nella comunità." 
                            },
                            { 
                                q: "Che tipo di prodotti posso donare?", 
                                a: "Puoi donare una vasta gamma di prodotti alimentari non deperibili e a lunga conservazione: pasta, riso, legumi in scatola, olio, zucchero, farina, prodotti per l'infanzia e molto altro. L'app ti mostrerà una lista di prodotti disponibili per la donazione presso i negozi partner, garantendo che siano sempre prodotti di cui c'è effettivamente bisogno." 
                            },
                            { 
                                q: "Ci sono costi aggiuntivi per l'utilizzo dell'app?", 
                                a: "L'app Donkey è gratuita da scaricare e utilizzare. Per mantenere la piattaforma operativa e migliorare continuamente il nostro servizio, applichiamo una piccola commissione su ogni acquisto effettuato tramite l'app. Questa commissione è una percentuale minima dell'importo totale dell'acquisto e viene utilizzata per coprire i costi di gestione, sviluppo e manutenzione della piattaforma. Prima di finalizzare ogni acquisto, vedrai chiaramente l'importo esatto della commissione applicata. Il nostro obiettivo è mantenere questa commissione il più bassa possibile, garantendo al contempo la sostenibilità e l'efficienza del servizio." 
                            },
                            { 
                                q: "Come faccio a sapere che la mia donazione fa davvero la differenza?", 
                                a: "Donkey ti tiene costantemente aggiornato sull'impatto delle tue donazioni. Attraverso l'app potrai vedere quante persone hai aiutato, quanti pasti sono stati distribuiti grazie al tuo contributo e ricevere storie e testimonianze (nel rispetto della privacy) da parte dei beneficiari. Inoltre, organizziamo regolarmente eventi comunitari dove puoi incontrare le associazioni partner e vedere di persona l'impatto del tuo supporto." 
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-slate-900 mb-4 text-2xl">{faq.q}</h4>
                                <p className="text-slate-600 text-xl leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
          </>
        )}

        {currentView === 'privacy' && <PrivacyPolicy onBack={goHome} />}
        {currentView === 'terms' && <TermsOfService onBack={goHome} />}
        {currentView === 'cookies' && <CookiePolicy onBack={goHome} />}

      </main>

      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-slate-800">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div className="flex items-center gap-4 mb-8 md:mb-0">
                    <img src="/images/donkey-logo2.jpg" alt="Donkey Logo" className="w-12 h-12 rounded-xl" />
                    <span className="text-white font-bold text-3xl">Donkey</span>
                </div>
                
                {/* Contact Section moved here for symmetry */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                        <Mail size={20} className="text-donkey-500" />
                        Contattaci
                    </h4>
                    <a href="mailto:donkey.ciao@gmail.com" className="text-lg hover:text-white transition-colors text-slate-300">
                        donkey.ciao@gmail.com
                    </a>
                </div>
            </div>

            <div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between text-lg">
                <p>&copy; 2026 Donkey - l'App della Spesa Solidale. Tutti i diritti riservati.</p>
                <div className="flex gap-10 mt-8 md:mt-0">
                    <button onClick={() => { setCurrentView('privacy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy Policy</button>
                    <button onClick={() => { setCurrentView('terms'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Termini di Servizio</button>
                    <button onClick={() => { setCurrentView('cookies'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Cookie</button>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
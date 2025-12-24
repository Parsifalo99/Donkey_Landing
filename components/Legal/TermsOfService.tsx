import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TermsOfService: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-donkey-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Torna alla Home
        </button>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Termini di Servizio</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-lg"></p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Accettazione dei Termini</h2>
            <p>
              Accedendo e utilizzando Donkey ("Servizio"), accetti di essere vincolato da questi Termini di Servizio. Se non accetti questi termini, ti preghiamo di non utilizzare il Servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Descrizione del Servizio</h2>
            <p>
              Donkey è una piattaforma che facilita la donazione di prodotti alimentari e beni di prima necessità mettendo in contatto donatori, negozi ed enti del terzo settore. Attualmente il servizio è in fase dimostrativa ("Demo") e di raccolta adesioni ("Waitlist").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Uso della Demo</h2>
            <p>
              La sezione "Demo" del sito è puramente simulativa. Nessun ordine reale viene processato, nessun pagamento viene addebitato e nessun bene fisico viene movimentato. I dati inseriti nella demo risiedono esclusivamente nel browser dell'utente (Local Storage).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Proprietà Intellettuale</h2>
            <p>
              Il Servizio e il suo contenuto originale, le caratteristiche e le funzionalità sono e rimarranno di proprietà esclusiva di Donkey, dei suoi fondatori e dei suoi licenziatari.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Limitazione di Responsabilità</h2>
            <p>
              In nessun caso Donkey, né i suoi direttori, dipendenti, partner, agenti, fornitori o affiliati, saranno responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi, derivanti dall'uso del servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Modifiche</h2>
            <p>
              Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi momento. Continuando ad accedere o utilizzare il nostro Servizio dopo che tali revisioni diventano efficaci, accetti di essere vincolato dai termini rivisti.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Contatti</h2>
            <p>
              Per qualsiasi domanda riguardante questi Termini, ti preghiamo di contattarci all'indirizzo donkey.ciao@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
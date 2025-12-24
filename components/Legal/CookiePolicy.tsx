import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const CookiePolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-donkey-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Torna alla Home
        </button>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-lg"></p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Cookie utilizzati da questo sito</h2>
            <p>Attualmente, questo sito utilizza esclusivamente:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Cookie Tecnici e Local Storage:</strong> Necessari per il funzionamento della "Demo Interattiva". Utilizziamo il <code>localStorage</code> del tuo browser per salvare temporaneamente lo stato della demo (es. ordini simulati, punteggio, ruolo selezionato) in modo che tu possa ricaricare la pagina senza perdere i progressi della simulazione.
              </li>
            </ul>
            <p className="mt-4">
              <strong>Non utilizziamo cookie di profilazione o di terze parti per scopi pubblicitari.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Gestione dei Cookie</h2>
            <p>
              Poiché utilizziamo solo tecnologie tecniche essenziali per il funzionamento della demo e la navigazione del sito, non è richiesto il consenso preventivo dell'utente. Tuttavia, puoi sempre cancellare i dati salvati nel Local Storage utilizzando la funzione "Reset" all'interno della Demo o le impostazioni del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Modifiche alla Cookie Policy</h2>
            <p>
              Potremmo aggiornare questa Cookie Policy di tanto in tanto. Ti invitiamo a rivedere periodicamente questa pagina per le ultime informazioni sulle nostre pratiche in materia di privacy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
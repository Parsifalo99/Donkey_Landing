import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-donkey-600 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} /> Torna alla Home
        </button>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p className="text-lg"></p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduzione</h2>
            <p>
              Benvenuto su Donkey. La tua privacy è molto importante per noi. Questa Privacy Policy spiega come raccogliamo, utilizziamo, divulghiamo e proteggiamo le tue informazioni quando visiti la nostra applicazione web Donkey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Dati che raccogliamo</h2>
            <p>Possiamo raccogliere le seguenti categorie di dati:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Dati forniti volontariamente:</strong> Come il tuo indirizzo email quando ti iscrivi alla lista d'attesa o ci contatti.</li>
              <li><strong>Dati di utilizzo:</strong> Informazioni su come interagisci con la nostra demo (salvati esclusivamente in locale sul tuo dispositivo).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Finalità del trattamento</h2>
            <p>Utilizziamo i tuoi dati per:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fornirti accesso al servizio e gestire la tua iscrizione alla lista d'attesa.</li>
              <li>Comunicarti aggiornamenti, novità e informazioni relative al lancio del servizio.</li>
              <li>Migliorare l'esperienza utente e analizzare l'utilizzo del sito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Condivisione dei dati</h2>
            <p>
              Non vendiamo, scambiamo o trasferiamo a terzi i tuoi dati personali identificabili. Potremmo condividere informazioni generiche aggregate non legate ad alcuna informazione di identificazione personale con i nostri partner commerciali e inserzionisti per le finalità sopra indicate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Sicurezza dei dati</h2>
            <p>
              Adottiamo adeguate pratiche di raccolta, memorizzazione ed elaborazione dei dati e misure di sicurezza per proteggere da accessi non autorizzati, alterazione, divulgazione o distruzione dei tuoi dati personali.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">6. I tuoi diritti (GDPR)</h2>
            <p>
              In conformità con il GDPR, hai il diritto di accedere, rettificare, cancellare, limitare il trattamento dei tuoi dati. Per esercitare questi diritti, contattaci all'indirizzo donkey.ciao@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
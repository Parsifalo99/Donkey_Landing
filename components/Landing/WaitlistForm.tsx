import React, { useState } from 'react';
import { Check, Loader2, AlertCircle } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('LOADING');
    setErrorMessage('');

    try {
      // Chiama la Netlify Function
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, city })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('SUCCESS');
        localStorage.setItem('donkey_lead', 'true');
      } else {
        throw new Error(data.message || 'Errore durante l\'iscrizione');
      }
    } catch (error) {
      setStatus('ERROR');
      setErrorMessage(error instanceof Error ? error.message : 'Si è verificato un errore. Riprova più tardi.');
      console.error('Errore iscrizione:', error);
    }
  };

  if (status === 'SUCCESS') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center animate-fade-in">
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check size={48} />
        </div>
        <h3 className="text-4xl font-bold text-slate-800 mb-4">Sei in lista!</h3>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed">
          Controlla la tua email per la conferma. Ti terremo aggiornato sul lancio!
        </p>
        <button 
          onClick={() => { 
            setStatus('IDLE'); 
            setEmail(''); 
            setCity(''); 
          }}
          className="text-xl text-donkey-600 font-bold hover:underline"
        >
          Iscrivi un altro indirizzo
        </button>
      </div>
    );
  }

  return (
    <div id="waitlist" className="bg-white rounded-3xl shadow-2xl p-12 border border-slate-100 max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-slate-900 mb-4">Unisciti a noi</h2>
        <p className="text-xl text-slate-500">
          Iscriviti ora per essere avvisato sul lancio dell'app e ottenere vantaggi esclusivi
        </p>
      </div>

      {status === 'ERROR' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
          <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={22} />
          <div>
            <p className="text-red-800 font-semibold">Oops! Qualcosa è andato storto</p>
            <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="email" className="block text-lg font-bold text-slate-700 mb-3">
            Email <span className="text-red-500">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-5 text-xl text-slate-900 rounded-2xl border border-slate-300 focus:ring-4 focus:ring-donkey-500/20 focus:border-donkey-500 transition-shadow outline-none"
            placeholder="latuaemail@email.com"
          />
        </div>
        
        <div>
          <label htmlFor="city" className="block text-lg font-bold text-slate-700 mb-3">
            Città (opzionale)
          </label>
          <input 
            type="text" 
            id="city" 
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-6 py-5 text-xl text-slate-900 rounded-2xl border border-slate-300 focus:ring-4 focus:ring-donkey-500/20 focus:border-donkey-500 transition-shadow outline-none"
            placeholder="Es. Milano"
          />
        </div>
        
        <div className="flex items-start gap-4 pt-2">
          <input 
            type="checkbox" 
            id="privacy" 
            required 
            className="mt-1.5 w-6 h-6 text-donkey-600 rounded border-slate-300 focus:ring-donkey-500" 
          />
          <label htmlFor="privacy" className="text-base text-slate-500 leading-relaxed text-left">
            Acconsento al trattamento dei dati personali (zero spam, solo aggiornamenti sul lancio).
          </label>
        </div>
        
        <div>
          <button 
            type="submit" 
            disabled={status === 'LOADING'}
            className="w-full py-6 bg-slate-900 text-white text-2xl font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-4 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'LOADING' ? (
              <>
                <Loader2 className="animate-spin" size={28} />
                Iscrizione in corso...
              </>
            ) : (
              'Unisciti alla Lista'
            )}
          </button>
          <p className="text-sm text-slate-400 text-center mt-4">
            Ti mandiamo una mail appena andiamo online!
          </p>
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
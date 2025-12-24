import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Role } from '../../types';
import DonorView from './DonorView';
import StoreView from './StoreView';
import CharityView from './CharityView';
import { ShoppingBag, Store, Heart, RotateCcw, Info } from 'lucide-react';

const DonkeyDemo: React.FC = () => {
  const { role, setRole, resetDemo } = useDemo();
  const [showTooltip, setShowTooltip] = useState(false);

  const RoleButton = ({ r, icon: Icon, label }: { r: Role; icon: any; label: string }) => (
    <button
      onClick={() => setRole(r)}
      className={`flex items-center gap-2 px-8 py-4 rounded-t-xl text-lg font-bold transition-colors ${
        role === r
          ? 'bg-white text-donkey-600 border-t border-x border-slate-200'
          : 'bg-slate-100 text-slate-500 hover:text-slate-700'
      }`}
    >
      <Icon size={20} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="w-full max-w-7xl mx-auto my-16" id="demo-anchor">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 px-2">
        <h3 className="text-4xl font-bold text-slate-800 flex items-center gap-4">
          Prova Donkey <span className="text-lg font-bold text-donkey-500 bg-donkey-50 px-4 py-2 rounded-full border border-donkey-100 uppercase tracking-wide">Live Demo</span>
        </h3>
        <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="relative">
                <button 
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className="text-slate-400 hover:text-donkey-500 transition-colors"
                >
                    <Info size={28} />
                </button>
                {showTooltip && (
                    <div className="absolute bottom-full right-0 mb-3 w-80 bg-slate-800 text-white text-base p-5 rounded-xl shadow-2xl z-50">
                        Questa è una simulazione completa. I dati vengono salvati solo nel tuo browser. Prova a donare come "Donatore" e poi cambia ruolo per gestire l'ordine!
                    </div>
                )}
            </div>
            <button 
                onClick={resetDemo}
                className="text-base font-medium flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors border border-slate-300 rounded-xl px-5 py-3"
            >
                <RotateCcw size={18} /> Reset
            </button>
        </div>
      </div>

      <div className="app-frame bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
        {/* App Header / Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-8 pt-8 flex gap-2 overflow-x-auto">
          <RoleButton r="DONOR" icon={ShoppingBag} label="Donatore" />
          <RoleButton r="STORE" icon={Store} label="Negozio" />
          <RoleButton r="CHARITY" icon={Heart} label="Organizzazione" />
        </div>

        {/* App Viewport */}
        <div className="h-[800px] bg-slate-50 relative overflow-hidden">
             {role === 'DONOR' && <DonorView />}
             {role === 'STORE' && <StoreView />}
             {role === 'CHARITY' && <CharityView />}
        </div>
      </div>
    </div>
  );
};

export default DonkeyDemo;
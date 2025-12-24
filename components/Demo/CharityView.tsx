import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Truck, MapPin, BarChart3 } from 'lucide-react';

const CharityView: React.FC = () => {
  const { orders, updateOrderStatus, impactStats } = useDemo();

  const readyOrders = orders.filter(o => o.status === 'READY');
  const completedOrders = orders.filter(o => o.status === 'COMPLETED');

  return (
    <div className="flex h-full bg-slate-50">
      {/* Sidebar - Impact Stats */}
      <div className="w-80 bg-slate-900 text-white p-8 hidden md:block">
        <h3 className="font-bold text-xl mb-8 flex items-center gap-3">
            <BarChart3 className="text-donkey-500" size={24} />
            Impatto Live
        </h3>
        <div className="space-y-8">
            <div>
                <div className="text-4xl font-bold text-donkey-400 mb-1">{impactStats.mealsProvided}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">Pasti Equivalenti</div>
            </div>
            <div>
                <div className="text-3xl font-bold mb-1">{impactStats.kgDonated.toFixed(1)}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">Kg Recuperati</div>
            </div>
            <div>
                <div className="text-3xl font-bold mb-1">{impactStats.familiesHelped}</div>
                <div className="text-sm text-slate-400 uppercase tracking-wide font-medium">Famiglie Aiutate</div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto demo-scroll">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Logistica Ritiri</h2>
        
        <div className="mb-10">
            <h3 className="font-bold text-slate-600 mb-4 text-base uppercase">Pronti per il ritiro ({readyOrders.length})</h3>
            {readyOrders.length === 0 ? (
                <div className="text-slate-400 text-base italic border border-dashed border-slate-300 rounded-xl p-6">
                    Nessun ordine pronto nei negozi partner.
                </div>
            ) : (
                <div className="space-y-4">
                    {readyOrders.map(order => (
                        <div key={order.id} className="bg-white p-6 rounded-xl border border-l-4 border-l-donkey-500 shadow-sm flex justify-between items-center">
                            <div>
                                <div className="font-bold text-lg text-slate-800 mb-2">Ordine #{order.id}</div>
                                <div className="flex items-center text-base text-slate-500 gap-2">
                                    <MapPin size={18} />
                                    via Roma 10 (Supermercato Il Girasole)
                                </div>
                            </div>
                            <button 
                                onClick={() => updateOrderStatus(order.id, 'COMPLETED')}
                                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl text-base font-medium flex items-center gap-2 transition-colors"
                            >
                                <Truck size={20} />
                                Ritira
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>

        <div>
            <h3 className="font-bold text-slate-600 mb-4 text-base uppercase">Completati recenti</h3>
             <div className="space-y-3">
                {completedOrders.slice(0, 5).map(order => (
                    <div key={order.id} className="text-base text-slate-500 flex justify-between p-3 bg-slate-100 rounded-lg">
                        <span>#{order.id} - Consegnato</span>
                        <span>{new Date(order.timestamp).toLocaleDateString()}</span>
                    </div>
                ))}
                {completedOrders.length === 0 && <p className="text-sm text-slate-400">Nessuno storico.</p>}
             </div>
        </div>
      </div>
    </div>
  );
};

export default CharityView;
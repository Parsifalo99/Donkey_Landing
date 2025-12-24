import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Package, Check, Clock } from 'lucide-react';

const StoreView: React.FC = () => {
  const { orders, updateOrderStatus } = useDemo();
  
  // Filter for active orders relevant to store
  const activeOrders = orders.filter(o => o.status !== 'COMPLETED').sort((a,b) => b.timestamp - a.timestamp);

  return (
    <div className="p-8 bg-slate-50 h-full overflow-y-auto demo-scroll">
       <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Dashboard Negozio</h2>
            <div className="text-base font-medium text-slate-500">
                {activeOrders.length} ordini attivi
            </div>
       </div>

       {activeOrders.length === 0 ? (
           <div className="flex flex-col items-center justify-center h-80 text-slate-400">
               <Package size={64} className="mb-4 opacity-50"/>
               <p className="text-lg">Nessun ordine in arrivo</p>
               <p className="text-sm mt-2">Torna su "Donatore" per creare un ordine.</p>
           </div>
       ) : (
           <div className="grid gap-5">
               {activeOrders.map(order => (
                   <div key={order.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                       <div>
                           <div className="flex items-center gap-3 mb-2">
                               <span className="font-mono text-base font-bold text-slate-700">{order.id}</span>
                               <span className="text-sm text-slate-400">{new Date(order.timestamp).toLocaleTimeString()}</span>
                           </div>
                           <div className="flex gap-2 text-base text-slate-700">
                               {order.items.map(i => i.name).join(', ')}
                           </div>
                           <div className="mt-3 text-sm font-semibold text-donkey-600">
                               Valore: €{order.total.toFixed(2)}
                           </div>
                       </div>

                       <div className="flex gap-3 w-full md:w-auto">
                           {order.status === 'PENDING' && (
                               <button 
                                   onClick={() => updateOrderStatus(order.id, 'PREPARING')}
                                   className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-blue-50 text-blue-600 border border-blue-200 px-6 py-3 rounded-xl text-base font-medium hover:bg-blue-100 transition"
                               >
                                   <Clock size={18} /> Prepara
                               </button>
                           )}
                           {order.status === 'PREPARING' && (
                               <button 
                                   onClick={() => updateOrderStatus(order.id, 'READY')}
                                   className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl text-base font-medium hover:bg-green-600 shadow-md shadow-green-500/20 transition"
                               >
                                   <Check size={18} /> Segna Pronto
                               </button>
                           )}
                           {order.status === 'READY' && (
                               <div className="text-green-600 font-medium text-base border border-green-200 bg-green-50 px-4 py-2 rounded-lg">
                                   In attesa di ritiro
                               </div>
                           )}
                       </div>
                   </div>
               ))}
           </div>
       )}
    </div>
  );
};

export default StoreView;
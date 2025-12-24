import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { MOCK_STORES, MOCK_PRODUCTS } from '../../constants';
import { Product } from '../../types';
import { CheckCircle, ShoppingCart, MapPin, ChevronRight, Star, Clock } from 'lucide-react';

const DonorView: React.FC = () => {
  const { createOrder, orders, userPoints } = useDemo();
  const [step, setStep] = useState(1);
  const [selectedStore, setSelectedStore] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const addToCart = (p: Product) => {
    setCart([...cart, p]);
  };

  const handleCheckout = () => {
    if (!selectedStore || cart.length === 0) return;
    setIsAnimating(true);
    setTimeout(() => {
      createOrder(selectedStore, cart);
      setCart([]);
      setStep(3);
      setIsAnimating(false);
    }, 1500); // Simulate processing
  };

  const resetFlow = () => {
    setStep(1);
    setSelectedStore(null);
  };

  const calculateTotal = () => cart.reduce((sum, i) => sum + i.price, 0);
  const calculatePoints = () => cart.reduce((sum, i) => sum + i.points, 0);

  // Filter orders for the current "User"
  const myOrders = orders.filter(o => o.timestamp > Date.now() - 86400000); // Last 24h

  return (
    <div className="flex h-full">
      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-auto demo-scroll bg-white">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Benvenuto, Andrea</h2>
                <p className="text-base text-slate-500">Cosa vuoi donare oggi?</p>
            </div>
            <div className="flex items-center gap-2 bg-donkey-50 px-4 py-2 rounded-full border border-donkey-100">
                <Star className="text-donkey-500 fill-donkey-500" size={20} />
                <span className="font-bold text-donkey-700 text-lg">{userPoints} pts</span>
            </div>
        </div>

        {/* Wizard Steps */}
        {step === 1 && (
            <div className="animate-fade-in">
                <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-3 text-xl">
                    <span className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Seleziona un negozio
                </h3>
                <div className="grid gap-4">
                    {MOCK_STORES.map(store => (
                        <div 
                            key={store.id}
                            onClick={() => { setSelectedStore(store.id); setStep(2); }}
                            className="p-5 border border-slate-200 rounded-xl hover:border-donkey-500 hover:bg-donkey-50 cursor-pointer transition-all flex justify-between items-center group"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 p-3 rounded-full text-slate-500 group-hover:text-donkey-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-slate-800">{store.name}</div>
                                    <div className="text-sm text-slate-500">{store.address}</div>
                                </div>
                            </div>
                            <ChevronRight className="text-slate-300 group-hover:text-donkey-500" size={24} />
                        </div>
                    ))}
                </div>
            </div>
        )}

        {step === 2 && (
            <div className="animate-fade-in pb-24">
                <button onClick={() => setStep(1)} className="text-sm text-slate-400 mb-6 hover:underline font-medium">&larr; Indietro</button>
                <h3 className="font-bold text-slate-700 mb-6 flex items-center gap-3 text-xl">
                    <span className="bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Scegli i prodotti
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {MOCK_PRODUCTS.map(p => (
                        <div key={p.id} className="border border-slate-200 rounded-xl p-4 flex justify-between items-start hover:shadow-md transition-shadow">
                            <div>
                                <p className="font-bold text-base text-slate-800">{p.name}</p>
                                <p className="text-sm text-slate-500">{p.category}</p>
                                <div className="mt-3 flex items-center gap-2">
                                    <span className="font-bold text-slate-900 text-lg">€{p.price.toFixed(2)}</span>
                                    <span className="text-sm text-donkey-600 font-medium bg-donkey-50 px-2 py-0.5 rounded">+{p.points} pts</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => addToCart(p)}
                                className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-700 transition-colors"
                            >
                                <ShoppingCart size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {step === 3 && (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Grazie per il tuo dono!</h3>
                <p className="text-lg text-slate-600 mb-8 max-w-sm">Il tuo ordine è stato inviato al negozio. Puoi seguirne lo stato qui a destra.</p>
                <div className="bg-donkey-50 border border-donkey-100 p-6 rounded-xl mb-8 w-full max-w-sm">
                    <p className="text-base text-donkey-800 font-bold">Hai guadagnato un buono sconto!</p>
                    <div className="text-4xl font-bold text-donkey-600 my-2">-10%</div>
                    <p className="text-sm text-donkey-600 font-medium">Utilizzabile alla tua prossima spesa.</p>
                </div>
                <button 
                    onClick={resetFlow}
                    className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium text-lg hover:bg-slate-800 transition-colors"
                >
                    Fai un'altra donazione
                </button>
            </div>
        )}
      </div>

      {/* Sidebar / Cart / Tracking */}
      <div className="w-96 bg-slate-50 border-l border-slate-200 p-6 flex flex-col overflow-y-auto demo-scroll">
        
        {step === 2 && (
            <div className="flex-1 flex flex-col">
                <h4 className="font-bold text-slate-700 mb-5 text-lg">Riepilogo Donazione</h4>
                <div className="flex-1 overflow-y-auto mb-6 space-y-3">
                    {cart.length === 0 ? (
                        <p className="text-base text-slate-400 italic text-center mt-12">Il carrello è vuoto</p>
                    ) : (
                        cart.map((item, idx) => (
                            <div key={idx} className="flex justify-between text-base border-b border-slate-100 pb-2">
                                <span>{item.name}</span>
                                <span className="font-medium">€{item.price.toFixed(2)}</span>
                            </div>
                        ))
                    )}
                </div>
                <div className="border-t border-slate-200 pt-5">
                    <div className="flex justify-between font-bold text-slate-800 mb-1 text-lg">
                        <span>Totale</span>
                        <span>€{calculateTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium text-donkey-600 mb-6">
                        <span>Punti stimati</span>
                        <span>+{calculatePoints()}</span>
                    </div>
                    <button 
                        onClick={handleCheckout}
                        disabled={cart.length === 0 || isAnimating}
                        className={`w-full py-4 rounded-xl font-bold text-lg text-white flex justify-center items-center ${
                            cart.length === 0 ? 'bg-slate-300 cursor-not-allowed' : 'bg-donkey-500 hover:bg-donkey-600 shadow-lg shadow-donkey-500/30'
                        }`}
                    >
                        {isAnimating ? (
                            <span className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></span>
                        ) : 'Dona Ora'}
                    </button>
                </div>
            </div>
        )}

        {(step === 1 || step === 3) && (
             <div className="flex-1">
                <h4 className="font-bold text-slate-700 mb-5 flex items-center gap-2 text-lg">
                    <Clock size={20} /> Cronologia
                </h4>
                <div className="space-y-4">
                    {myOrders.length === 0 && <p className="text-sm text-slate-400">Nessuna donazione recente.</p>}
                    {myOrders.map(order => (
                        <div key={order.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-bold text-slate-700">{order.id}</span>
                                <StatusBadge status={order.status} />
                            </div>
                            <p className="text-sm text-slate-500 mb-3">
                                {order.items.length} prodotti • {MOCK_STORES.find(s => s.id === order.storeId)?.name}
                            </p>
                            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                <div 
                                    className={`h-full bg-donkey-500 transition-all duration-500`}
                                    style={{ width: getProgressWidth(order.status) }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        )}
      </div>
    </div>
  );
};

const getProgressWidth = (status: string) => {
    switch(status) {
        case 'PENDING': return '25%';
        case 'PREPARING': return '50%';
        case 'READY': return '75%';
        case 'COMPLETED': return '100%';
        default: return '0%';
    }
}

const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
        PENDING: 'bg-yellow-100 text-yellow-700',
        PREPARING: 'bg-blue-100 text-blue-700',
        READY: 'bg-green-100 text-green-700',
        COMPLETED: 'bg-slate-100 text-slate-600',
    };
    const labels = {
        PENDING: 'In attesa',
        PREPARING: 'In prep.',
        READY: 'Pronto',
        COMPLETED: 'Ritirato',
    }
    // @ts-ignore
    return <span className={`text-xs uppercase font-bold px-2 py-1 rounded ${styles[status]}`}>{labels[status]}</span>
}

export default DonorView;
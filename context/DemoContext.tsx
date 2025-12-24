import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Role, Order, Product, OrderStatus, ImpactStats } from '../types';
import { INITIAL_STATS } from '../constants';

interface DemoContextType {
  role: Role;
  setRole: (role: Role) => void;
  orders: Order[];
  createOrder: (storeId: string, items: Product[]) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
  userPoints: number;
  resetDemo: () => void;
  impactStats: ImpactStats;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};

export const DemoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<Role>('DONOR');
  
  // Persisted State
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('donkey_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [userPoints, setUserPoints] = useState<number>(() => {
    const saved = localStorage.getItem('donkey_points');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [impactStats, setImpactStats] = useState<ImpactStats>(() => {
      const saved = localStorage.getItem('donkey_stats');
      return saved ? JSON.parse(saved) : INITIAL_STATS;
  });

  useEffect(() => {
    localStorage.setItem('donkey_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('donkey_points', userPoints.toString());
  }, [userPoints]);

  useEffect(() => {
      localStorage.setItem('donkey_stats', JSON.stringify(impactStats));
  }, [impactStats]);


  const createOrder = (storeId: string, items: Product[]) => {
    const total = items.reduce((sum, item) => sum + item.price, 0);
    const points = items.reduce((sum, item) => sum + item.points, 0);
    
    const newOrder: Order = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      items,
      total,
      pointsEarned: points,
      storeId,
      status: 'PENDING',
      timestamp: Date.now(),
      estimatedCompletion: '30 min'
    };

    setOrders(prev => [newOrder, ...prev]);
    setUserPoints(prev => prev + points);
    
    // Update global stats slightly to show impact
    setImpactStats(prev => ({
        ...prev,
        mealsProvided: prev.mealsProvided + items.length, // simple logic
        kgDonated: prev.kgDonated + (items.length * 0.5)
    }));
  };

  const updateOrderStatus = (orderId: string, status: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status } : o));
    
    // If completed, update impact logic if needed (already done on creation for immediate gratification)
  };

  const resetDemo = () => {
    setOrders([]);
    setUserPoints(0);
    setImpactStats(INITIAL_STATS);
    localStorage.removeItem('donkey_orders');
    localStorage.removeItem('donkey_points');
    localStorage.removeItem('donkey_stats');
    window.location.reload();
  };

  return (
    <DemoContext.Provider value={{ role, setRole, orders, createOrder, updateOrderStatus, userPoints, resetDemo, impactStats }}>
      {children}
    </DemoContext.Provider>
  );
};
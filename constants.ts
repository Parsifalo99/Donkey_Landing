import { Product, Store } from './types';
import { ShoppingBasket, Milk, Wheat, Apple, Drumstick } from 'lucide-react';

export const MOCK_STORES: Store[] = [
  { id: 's1', name: 'Supermercato Il Girasole', address: 'Via Roma 10, Milano' },
  { id: 's2', name: 'Bottega Bio Verde', address: 'Corso Italia 45, Milano' },
  { id: 's3', name: 'Market Express', address: 'Piazza Duomo 2, Milano' },
];

export const MOCK_PRODUCTS: Product[] = [
  { id: 'p1', name: 'Pasta Integrale (500g)', category: 'Dispensa', price: 1.20, points: 10, icon: 'Wheat' },
  { id: 'p2', name: 'Latte UHT (1L)', category: 'Colazione', price: 1.50, points: 12, icon: 'Milk' },
  { id: 'p3', name: 'Mele Golden (1kg)', category: 'Fresco', price: 2.00, points: 15, icon: 'Apple' },
  { id: 'p4', name: 'Pollo (500g)', category: 'Fresco', price: 5.50, points: 40, icon: 'Drumstick' },
  { id: 'p5', name: 'Kit Emergenza', category: 'Bundle', price: 10.00, points: 100, icon: 'ShoppingBasket' },
];

export const INITIAL_STATS = {
  mealsProvided: 12450,
  kgDonated: 4500,
  familiesHelped: 850,
  co2Saved: 1200,
};
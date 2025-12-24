export type Role = 'DONOR' | 'STORE' | 'CHARITY';

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  points: number;
  icon: string;
};

export type OrderStatus = 'PENDING' | 'PREPARING' | 'READY' | 'COMPLETED';

export type Order = {
  id: string;
  items: Product[];
  total: number;
  pointsEarned: number;
  storeId: string;
  status: OrderStatus;
  timestamp: number;
  estimatedCompletion?: string;
};

export type Store = {
  id: string;
  name: string;
  address: string;
};

export type ImpactStats = {
  mealsProvided: number;
  kgDonated: number;
  familiesHelped: number;
  co2Saved: number;
};

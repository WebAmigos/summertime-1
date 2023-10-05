export enum OrderStatus {
  STARTED = 'started',
  COMPLETED = 'completed',
  CANCELED = 'canceled',
  ABANDONED = 'abandoned',
}

export enum Currency {
  PLN = 'PLN',
  USD = 'USD',
}

export interface Money {
  value: number;
  currency: Currency;
}

export interface OrderState {
  status: OrderStatus;
  totalValue: Money;
  netValue: Money;
}

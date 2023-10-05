import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { OrderStatus, type Money, OrderState, Currency } from '@ems/contracts';

const initialState: OrderState = {
  status: OrderStatus.STARTED,
  totalValue: {
    value: 0,
    currency: Currency.PLN,
  },
  netValue: {
    value: 0,
    currency: Currency.PLN,
  },
};

export const counterSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<OrderStatus>) => {
      state.status = action.payload;
    },
    markAsCompleted: (state) => {
      state.status = OrderStatus.COMPLETED;
    },
    markAsAbandoned: (state) => {
      state.status = OrderStatus.ABANDONED;
    },
    markAsCanceled: (state) => {
      state.status = OrderStatus.CANCELED;
    },
    setTotalValue: (state, action: PayloadAction<Money>) => {
      state.totalValue = action.payload;
    },
    setNetValue: (state, action: PayloadAction<Money>) => {
      state.netValue = action.payload;
    },
  },
});

export const {
  changeStatus,
  markAsCompleted,
  markAsAbandoned,
  markAsCanceled,
  setTotalValue,
  setNetValue,
} = counterSlice.actions;

export default counterSlice.reducer;

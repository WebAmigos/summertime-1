import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { z } from 'zod';

import { Currency, OrderState, OrderStatus } from '@ems/contracts';

import {
  changeStatus,
  markAsCompleted,
  markAsAbandoned,
  markAsCanceled,
  setNetValue,
  setTotalValue,
} from './orderSlice';
import type { RootState } from '../../store';

const orderEventSchema = z.object({
  status: z.nativeEnum(OrderStatus),
  totalValue: z.object({
    value: z.number(),
    currency: z.nativeEnum(Currency),
  }),
  netValue: z.object({
    value: z.number(),
    currency: z.nativeEnum(Currency),
  }),
}) satisfies z.ZodType<OrderState>;

type Props = {
  id: string;
};

const BASE_URL = `http://localhost:3000/api`;

export function Order({ id }: Props) {
  const order = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    const eventSource = new EventSource(`${BASE_URL}/orders/${id}/status`);
    eventSource.onmessage = (event) => {
      try {
        const orderDto = JSON.parse(event.data);

        console.log({ order });

        const eventData = orderEventSchema.parse(orderDto);
        console.log('eventData', eventData);

        if (eventData.status === OrderStatus.COMPLETED) {
          dispatch(markAsCompleted());
          eventSource.close();
        }
      } catch (e) {
        /* empty */
        console.error(e);
      }

      // setStock(stock);
    };
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <div>
        <p>Status: {order.status}</p>
      </div>
      <div>
        <button aria-label="Cancel" onClick={() => dispatch(markAsCompleted())}>
          Complete
        </button>
        <button aria-label="Cancel" onClick={() => dispatch(markAsCanceled())}>
          Cancel
        </button>
        <button
          aria-label="Complete"
          onClick={() => dispatch(markAsAbandoned())}
        >
          Abandon
        </button>
      </div>
      <div>
        <button
          aria-label="Trigger processing"
          onClick={() => dispatch(markAsCompleted())}
        >
          Trigger processing
        </button>
      </div>
    </div>
  );
}

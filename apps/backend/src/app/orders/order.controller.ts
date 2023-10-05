import { Controller, Sse, Post } from '@nestjs/common';
import { Observable, fromEvent, interval, map } from 'rxjs';
import { EventEmitter2 } from '@nestjs/event-emitter';

import { Currency, OrderState, OrderStatus } from '@ems/contracts';

import { SSEService } from './event.service';

// interface MessageEvent {
//   data: string | object;
// }

const NEW_ORDER_EVENT_NAME = 'new-order';

// The sse method returns an Observable that emits multiple MessageEvent (in this example, it emits a new MessageEvent every second). The MessageEvent object should respect the following interface to match the specification

export interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}

@Controller('orders')
export class OrderController {
  constructor(
    private sseService: SSEService,
    private eventEmitter: EventEmitter2
  ) {}

  @Sse('/:id/status')
  sendEvent(): Observable<MessageEvent> {
    return interval(10000).pipe(
      map((num: number) => ({
        data: {
          status: OrderStatus.COMPLETED,
          totalValue: {
            value: 123,
            currency: Currency.PLN,
          },
          netValue: {
            value: 100,
            currency: Currency.PLN,
          },
        } satisfies OrderState,
      }))
    );

    // option with receiving data from events
    // return fromEvent(this.eventEmitter, NEW_ORDER_EVENT_NAME).pipe(
    //   map((_data: any) => {
    //     return new MessageEvent('new-order', {
    //       data: { status: 'new', ..._data },
    //     });
    //   })
    // );

    // return interval(10000).pipe(
    //   map((num: number) => ({
    //     data: { status: num },
    //   }))
    // );
  }

  // sendEvent(): Observable<MessageEvent> {
  //   return fromEvent(this.eventEmitter, NEW_ORDER_EVENT_NAME).pipe(
  //     map((_data) => {
  //       return new MessageEvent('new-order', { data: 'new order' });
  //     })
  //   );
  // }

  // sendEvent(): Observable<MessageEvent> {
  //   return interval(1000).pipe(
  //     map((num: number) => ({
  //       data: `hello ${num}`,
  //     }))
  //   );
  // }

  // FORM_EVENT
  // sendEvent(): Observable<MessageEvent> {
  //   return fromEvent(this.eventEmitter, NEW_ORDER_EVENT_NAME).pipe(
  //     map((_data) => {
  //       return new MessageEvent('new-order', { data: 'new order' });
  //     })
  //   );
  // }
  // Subject

  @Post('emit')
  emit() {
    this.sseService.emitEvent(NEW_ORDER_EVENT_NAME, { sth: 'ok' });
    return { result: 'ok' };
  }
}

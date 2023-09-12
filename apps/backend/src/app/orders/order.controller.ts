import { Controller, Get, Post, Sse } from '@nestjs/common';
import { OrderService } from './order.service';
import { Observable, fromEvent, interval, map, pipe } from 'rxjs';
import { SSEService } from './event.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

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
    private readonly orderService: OrderService,
    private sseService: SSEService,
    private eventEmitter: EventEmitter2
  ) {}

  @Get()
  getHello() {
    return this.orderService.getHello();
  }

  @Sse('event')
  // BASIC
  // sendEvent(): Observable<MessageEvent> {
  //   return interval(1000).pipe(
  //     map((num: number) => ({
  //       data: `hello ${num}`,
  //     }))
  //   );
  // }
  // FORM_EVENT
  sendEvent(): Observable<MessageEvent> {
    return fromEvent(this.eventEmitter, NEW_ORDER_EVENT_NAME).pipe(
      map((_data) => {
        return new MessageEvent('new-order', { data: 'new order' });
      })
    );
  }
  // Subject

  @Post('emit')
  emit() {
    // this.eventEmitter.emit('new-order');
    this.sseService.emitEvent(NEW_ORDER_EVENT_NAME);
    return { result: 'ok' };
  }
}

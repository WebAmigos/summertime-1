import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { SSEService } from './event.service';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Module({
  providers: [OrderService, SSEService, EventEmitter2],
  controllers: [OrderController],
})
export class OrderModule {}

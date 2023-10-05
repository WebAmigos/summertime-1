import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SSEService {
  constructor(private eventEmitter: EventEmitter2) {}

  emitEvent(eventName: string, data: any) {
    this.eventEmitter.emit(eventName, data);
  }
}

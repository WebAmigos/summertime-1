import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class SSEService {
  constructor(private eventEmitter: EventEmitter2) {}

  emitEvent(eventName: string) {
    this.eventEmitter.emit(eventName);
  }
}

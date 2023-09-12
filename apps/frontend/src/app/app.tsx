import { useEffect, useState } from 'react';
// import NxWelcome from './nx-welcome';
import { Button } from '@ems/common-ui';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

export function App() {
  const [events, setEvents] = useState<{ value: string; timestamp: number }[]>(
    []
  );
  // const eventSource = new EventSource('http://localhost:3000/api/orders/event');
  const eventSource = new EventSourcePolyfill(
    'http://localhost:3000/api/orders/event',
    { withCredentials: true }
  );

  useEffect(() => {
    eventSource.onmessage = (event: MessageEvent) => {
      const { data, timestamp } = JSON.parse(event.data);
      const entry = { value: data.data, timestamp };
      // console.log('message: ', { data });
      setEvents((prev) => [...prev, entry]);
    };

    eventSource.onerror = (event: MessageEvent) => {
      console.error(event);
      eventSource?.close();
    };

    return () => {
      eventSource?.close();
    };
  }, []);

  return (
    <div>
      <Button label="Click me" />
    </div>
  );
}

export default App;

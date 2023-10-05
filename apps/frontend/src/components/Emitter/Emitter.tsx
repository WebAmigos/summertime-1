import { Button } from '@ems/common-ui';
import type { MouseEvent } from 'react';

export const Emitter = () => {
  // const emitEvent = (event: MouseEvent<HTMLButtonElement>, value: number) => {
  //   console.log({ event, value });
  // };
  const emitEvent = (value: number) => {
    return (event: MouseEvent<HTMLButtonElement>) => {
      console.log({ event, value });
    };
  };

  return (
    <div>
      <Button onClick={emitEvent(1)} label="1" />
      <Button onClick={emitEvent(2)} label="2" />
      <Button onClick={emitEvent(3)} label="3" />
    </div>
  );
};

import { Button } from '@ems/common-ui';
import type { MouseEvent } from 'react';

export const Emitter = () => {
  const emitEvent = (event: MouseEvent<HTMLButtonElement>, value: number) => {
    console.log({ event, value });
  };

  return (
    <div>
      <Button onClick={(event) => emitEvent(event, 1)} label="1" />
      <Button onClick={(event) => emitEvent(event, 2)} label="2" />
      <Button onClick={(event) => emitEvent(event, 3)} label="3" />
    </div>
  );
};

import { Button } from '@ems/common-ui';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const adjustCount = (value: number) => {
    setCount((currentState) => currentState + value);
    setCount((currentState) => currentState + value);
    console.log(value);
  };

  return (
    <>
      <Button label="-" onClick={() => adjustCount(-1)} />
      <span>{count}</span>
      <Button label="+" onClick={() => adjustCount(1)} />
    </>
  );
};

import { Button } from '@ems/common-ui';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const adjustCount = (value: number) => {
    setCount(count + value);
  };

  return (
    <>
      <Button label="-" onClick={() => adjustCount(-1)} />
      <span>{count}</span>
      <Button label="+" onClick={() => adjustCount(1)} />
    </>
  );
};

import { useCallback, useMemo, useState } from 'react';

import { Checkbox } from '../Checkbox';
import { MemoizedComponentForButton } from './MemoizedComponentForButton';

import './styles.css';

export default {
  title: 'Performance/WithHooks',
};

export const ReactUseMemoWithoutCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  console.log(`render parent`);

  return (
    <div className="parent">
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponentForButton
        data={{ value: 'test test test' }}
        onClick={() => alert('hey!')}
      />
    </div>
  );
};

export const ReactUseMemoWithCallback = () => {
  const [isChecked, setIsChecked] = useState(false);
  const toggle = () => setIsChecked((value) => !value);

  console.log(`render parent`);

  const data = useMemo(
    () => ({ value: `test test test ${new Date().toLocaleTimeString()}` }),
    []
  );
  const onClick = useCallback(() => alert('hey!'), []);

  return (
    <div className="parent">
      <Checkbox
        id="demo-checkbox"
        label="toggle checkbox"
        defaultChecked={isChecked}
        onChange={toggle}
      />
      <MemoizedComponentForButton data={data} onClick={onClick} />
    </div>
  );
};

import { useState } from 'react';

import { Checkbox } from '../Checkbox';
import { MemoizedComponentForCheckbox } from './MemoizedComponent';

import './styles.css';

export default {
  title: 'Performance/Memo',
};

export const ReactMemoWithPropsAndTextChildren = () => {
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
      <MemoizedComponentForCheckbox checked={isChecked}>
        text and props
      </MemoizedComponentForCheckbox>
    </div>
  );
};

export const ReactMemoChildrenTextOnly = () => {
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
      <MemoizedComponentForCheckbox>text only</MemoizedComponentForCheckbox>
    </div>
  );
};

export const ReactMemoChildrenWithMarkup = () => {
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
      <MemoizedComponentForCheckbox>
        <div>text only</div>
      </MemoizedComponentForCheckbox>
    </div>
  );
};

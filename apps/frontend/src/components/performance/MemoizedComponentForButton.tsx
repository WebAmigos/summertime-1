import { Button } from '@ems/common-ui';
import { memo } from 'react';

type MemoizedComponentProps = Readonly<{
  data: { value: string };
  onClick(): void;
}>;

export const MemoizedComponentForButton = memo(
  ({ data, onClick }: MemoizedComponentProps) => {
    console.log('render MemoizedComponent');
    return (
      <div className="child">
        This is data value: <code>{data.value}</code>
        <Button onClick={onClick} label="Click me" />
      </div>
    );
  }
);

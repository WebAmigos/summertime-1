import { memo } from 'react';

type MemoizedComponentProps = Readonly<{
  children: React.ReactNode;
  checked?: boolean;
}>;

export const MemoizedComponentForCheckbox = memo(
  ({ children, checked }: MemoizedComponentProps) => {
    console.log('render MemoizedComponent');
    return (
      <div className="child">
        Displaying <code>children</code>: "<strong>{children}</strong>" and{' '}
        <strong>{checked ? 'is' : 'is not'}</strong> checked
      </div>
    );
  }
  // (prevProps) => {
  //   if (prevProps.checked === true) {
  //     return true;
  //   }
  // }
);

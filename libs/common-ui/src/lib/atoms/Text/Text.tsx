import React, { ComponentProps, memo } from 'react';
import { clsx } from 'clsx';

type Props = {
  bgColor?: string;
  // children: string;
  children: React.ReactNode;
  className?: string;
}

// create function
// function must return UI fragment
export const Text = memo(({ children, className, ...rest }: ComponentProps<'p'> & Props) => {

  const classes = clsx(
    'mt-2 mb-2',
    'text-slate-700 font-medium',
    'dark:text-white',
    className
  );

  return (
    <p
      className={classes}
      {...rest}>
      {children}
    </p>
  );
});


// class TextSecond extends React.Component<Props> {
//   render() {
//     return (
//       <p>{this.props.children}</p>
//     );
//   }
// }
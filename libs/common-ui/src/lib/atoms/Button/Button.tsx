import { ComponentProps } from 'react';
import clsx from 'clsx';

// emerald: #2ecc71
// peter-river: #3498db
// amethyst: #9b59b6

// const colors: Record<string, string> = {
const colors = {
  emerald: '#2ecc71',
  'peter-river': '#3498db',
  amethyst: '#9b59b6',
};

type ColorType = keyof typeof colors;

type Props = {
  label: string;
  color?: ColorType;
  bgColor?: ColorType;
  className?: string;
  // onClick: () => void //
  // onClick?: MouseEventHandler<HTMLButtonElement>
};

export const Button = ({
  label,
  color,
  bgColor,
  onClick,
  className,
  ...rest
}: ComponentProps<'button'> & Props) => {
  // }: Pick<ComponentProps<'button'>, 'onClick'> & Props) => {
  // }: ComponentProps<'button'> & Props) => {

  const _color = color ? colors[color] : '';
  const _bgColor = bgColor ? colors[bgColor] : '';

  const classes = clsx(
    'px-4 py-1',
    'text-sm text-blue-600',
    'font-semibold',
    'rounded-full border border-blue-200',
    'hover:text-white hover:bg-blue-600 hover:border-transparent',
    'focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
    'dark:text-blue-200',
    className
  );

  return (
    <button
      onClick={onClick}
      style={{
        color: _color,
        backgroundColor: _bgColor,
      }}
      className={classes}
      {...rest}
    >
      {label}
    </button>
  );
};

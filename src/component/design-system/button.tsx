import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  variant?: 'blue' | 'red' | 'white';
}

export function Button({ className, children, variant = 'white', ...props }: ButtonProps) {
  const variantClasses = {
    white: 'color-dark-700 bg-white border-grey-500',
    blue: 'color-white bg-blue-700 border-blue-700',
    red: 'color-white bg-red-700 border-red-700',
  };
  return (
    <button
      className={classNames(
        className,
        'py-1 px-4 text-sm font-bold leading-6 rounded-lg shadow-button border border-solid h-fit hover:cursor-pointer',
        variantClasses[variant],
      )}
      {...props}
    >
      {children}
    </button>
  );
}

import classNames from 'classnames';
import { HtmlHTMLAttributes, ReactNode } from 'react';

interface ModalContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export function ModalContainer({ children, className, ...props }: ModalContainerProps) {
  return (
    <div className='fixed top-0 left-0 z-50 h-screen w-screen bg-dark-400/50'>
      <div
        className={classNames(
          className,
          'fixed top-1/2 left-1/2 -translate-1/2 bg-white rounded-2.5 p-6',
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

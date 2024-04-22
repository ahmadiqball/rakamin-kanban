import classNames from 'classnames';
import { HtmlHTMLAttributes, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  openModal: boolean;
  className?: string;
  children?: ReactNode;
}

export function ModalContainer({ openModal, children, className, ...props }: ModalContainerProps) {
  if (!openModal) return null;

  const Container = (
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

  return createPortal(Container, document.getElementById('modal')!);
}

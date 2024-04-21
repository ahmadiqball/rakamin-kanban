import { ReactNode } from 'react';

interface ModalContainerProps {
  children?: ReactNode;
}

export function ModalContainer({ children }: ModalContainerProps) {
  return (
    <div className='fixed top-0 left-0 z-50 h-screen w-screen bg-dark-400/50'>
      <div className='fixed top-1/2 left-1/2 -translate-1/2 bg-white rounded-2.5 p-6'>
        {children}
      </div>
    </div>
  );
}

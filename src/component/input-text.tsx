import classNames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  placeholder: string;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  ({ label, placeholder, className, ...props }, ref) => {
    return (
      <div className='w-full color-dark-400'>
        <label className='text-xs'>{label}</label>
        <input
          ref={ref}
          placeholder={placeholder}
          className={classNames(
            className,
            'block py-1 px-4 mt-4 bg-white border-2 border-solid border-grey-500 rounded-lg text-sm leading-6 placeholder:(color-grey-700)',
          )}
          {...props}
        />
      </div>
    );
  },
);

InputText.displayName = 'InputText';

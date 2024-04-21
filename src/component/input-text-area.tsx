import classNames from 'classnames';
import { InputHTMLAttributes, forwardRef } from 'react';

interface InputTextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
  placeholder: string;
}

export const InputTextArea = forwardRef<HTMLTextAreaElement, InputTextAreaProps>(
  ({ label, placeholder, className, ...props }, ref) => {
    return (
      <div className='w-full color-dark-400'>
        <label className='text-xs'>{label}</label>
        <textarea
          ref={ref}
          placeholder={placeholder}
          className={classNames(
            className,
            'block resize-none py-1 px-4 mt-4 bg-white border-2 border-grey-500 rounded-lg text-sm leading-6 placeholder:(color-grey-700)',
          )}
          {...props}
        />
      </div>
    );
  },
);

InputTextArea.displayName = 'InputTextArea';

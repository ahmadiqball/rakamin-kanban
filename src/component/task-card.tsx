import classNames from 'classnames';

interface TaskCardProps {
  name: string;
  progress: number | null;
}

export function TaskCard({ name, progress }: TaskCardProps) {
  return (
    <div className='p-4 bg-grey-300 rounded-1 border border-solid border-grey-500'>
      <h6 className='color-dark-500 text-sm font-bold leading-6 pb-2'>{name}</h6>
      <div className='pt-2 border-t border-t-dashed border-grey-500 flex items-center'>
        <div className='h-4 rounded-full w-[175px] bg-grey-400 mr-3 overflow-hidden'>
          <div
            className={classNames('h-full', {
              'bg-green-700': progress === 100,
              'bg-blue-700': progress || 0 < 100,
            })}
            style={{ width: `${progress || 0}%` }}
          />
        </div>
        {progress === 100 ? (
          <span className='h-4 w-4 bg-green-700 flex items-center justify-center rounded-full'>
            <svg
              width='8'
              height='6'
              viewBox='0 0 8 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.6001 2.89098L3.2001 4.49098L6.29105 1.40002'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </span>
        ) : (
          <span className='color-grey-700 text-xs leading-4 font-inter'>{`${progress || 0}%`}</span>
        )}

        <button className='relative h-6 w-6 ml-6.5 flex gap-0.75 items-center justify-center bg-transparent border-none rounded-1 transition-all-250 hover:(bg-grey-400 cursor-pointer)'>
          {[...Array(3)].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className='h-1 w-1 bg-grey-700 inline-block rounded-full'
            />
          ))}
        </button>
      </div>
    </div>
  );
}

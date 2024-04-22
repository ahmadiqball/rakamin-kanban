import classNames from 'classnames';

interface TaskDropdownProps {
  editAction: () => void;
  deleteAction: () => void;
  firstGroup: boolean;
  lastGroup: boolean;
}

export function TaskDropdown({
  editAction,
  firstGroup,
  lastGroup,
  deleteAction,
}: TaskDropdownProps) {
  return (
    <div
      className={classNames(
        'absolute top-full left-full -translate-5 py-2 w-80 bg-white shadow-dropdown color-dark-600 rounded-lg font-semibold z-10',
        {
          '-translate-x-full': lastGroup,
        },
      )}
    >
      {!lastGroup ? (
        <div className='flex items-center gap-4 px-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'>
          <i className='i-kra-arrow text-2xl' />
          Move Right
        </div>
      ) : null}

      {!firstGroup ? (
        <div className='flex items-center gap-4 px-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'>
          <i className='i-kra-arrow text-2xl rotate-180' />
          Move Left
        </div>
      ) : null}

      <div
        onClick={editAction}
        className='flex items-center gap-4 px-4 py-1.5 text-sm leading-6 hover:(color-blue-700 cursor-pointer)'
      >
        <i className='i-kra-pencil text-2xl' />
        Edit
      </div>

      <div
        onClick={deleteAction}
        className='flex items-center gap-4 px-4 py-1.5 text-sm leading-6 hover:(color-red-700 cursor-pointer)'
      >
        <i className='i-kra-trash-can text-2xl' />
        Delete
      </div>
    </div>
  );
}

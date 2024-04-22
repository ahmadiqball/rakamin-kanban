import classNames from 'classnames';
import { TaskCard } from './task-card';
import { useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';
import { ModalCreateTask } from '../modal/modal-create-task';
import { AuthQueryResult, TodoQueryResult } from '~~/typings/query-type';

interface BoardGroupProps {
  description?: string;
  firstGroup: boolean;
  lastGroup: boolean;
  title: string;
  groupId: number;
  variant: number;
}

const variantClasses = {
  1: 'bg-blue-100 border-blue-300 color-blue-700',
  2: 'bg-orange-100 border-orange-300 color-orange-700',
  3: 'bg-red-100 border-red-300 color-red-700',
  0: 'bg-green-100 border-green-300 color-green-700',
};

export function BoardGroup({
  groupId,
  description,
  title,
  variant,
  firstGroup,
  lastGroup,
}: BoardGroupProps) {
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();

  const { data: todo } = useQuery({
    queryKey: ['todo', groupId],
    queryFn: async (): Promise<Array<TodoQueryResult>> => {
      const auth: AuthQueryResult = queryClient.getQueryData(['auth'])!;

      const res = await fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${groupId}/items`, {
        headers: {
          Authorization: `Bearer ${auth.auth_token}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });

  return (
    <div
      className={classNames(
        'p-4 border-2 border-solid rounded-1 flex flex-col gap-2 w-93 min-w-93 h-fit',
        variantClasses[variant as keyof typeof variantClasses],
      )}
    >
      <span
        className={classNames(
          'py-0.5 px-2 border-1 border-solid rounded-1 text-xs leading-5 inline w-fit',
          variantClasses[variant as keyof typeof variantClasses],
        )}
      >
        {title}
      </span>
      <p className='color-dark-400 text-xs font-bold leading-5'>{description}</p>
      <div className='flex flex-col gap-3'>
        {todo && todo.length > 0 ? (
          todo?.map((item) => (
            <TaskCard
              firstGroup={firstGroup}
              lastGroup={lastGroup}
              key={item.id}
              todoId={item.id}
              groupId={groupId}
              name={item.name}
              progress={item.progress_percentage}
            />
          ))
        ) : (
          <div className='px-4 py-2 bg-grey-300 rounded-1 border border-solid border-grey-500 color-grey-800'>
            No task
          </div>
        )}
      </div>

      <button
        onClick={() => setOpenModal(!openModal)}
        className='border-none bg-transparent w-fit color-dark-700 text-xs leading-5 flex items-center gap-1.5 hover:cursor-pointer'
      >
        <i className='i-kra-plus-circle text-4.5 color-dark-600' />
        New Task
      </button>

      {openModal ? (
        <ModalCreateTask
          closeModal={() => setOpenModal(false)}
          groupId={groupId}
        />
      ) : null}
    </div>
  );
}

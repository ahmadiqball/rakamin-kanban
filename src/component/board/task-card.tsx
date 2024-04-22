import classNames from 'classnames';
import { useState } from 'react';
import { TaskDropdown } from './task-dropdown';
import { ModalEditTask } from '../modal/modal-edit-task';
import { ModalDeleteTask } from '../modal/modal-delete-task';
import { useMutation, useQueryClient } from 'react-query';
import { AuthQueryResult, TodoQueryResult } from '~~/typings/query.entity';

interface TaskCardProps {
  firstGroup: boolean;
  lastGroup: boolean;
  name: string;
  progress: number | null;
  groupId: number;
  todoId: number;
}

export function TaskCard({
  name,
  progress,
  groupId,
  todoId,
  firstGroup,
  lastGroup,
}: TaskCardProps) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const queryClient = useQueryClient();

  const moveTodoItem = useMutation({
    mutationFn: async (newGroupId: number) => {
      const auth: AuthQueryResult = queryClient.getQueryData(['auth'])!;
      const todosData: Array<TodoQueryResult> = queryClient.getQueryData(['todo', groupId]) || [];
      const taskData = todosData.filter((todo) => todo.id === todoId)[0];
      const data = {
        name: taskData.name,
        progress_percentage: taskData.progress_percentage,
        target_todo_id: newGroupId,
      };
      const res = await fetch(
        `https://todo-api-18-140-52-65.rakamin.com/todos/${groupId}/items/${todoId}`,
        {
          method: 'PATCH',
          headers: {
            Authorization: `Bearer ${auth.auth_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );

      const resData = await res.json();

      return resData;
    },
    onSuccess: (data) => {
      if (!data.message) {
        queryClient.setQueryData(['todo', groupId], (oldData?: Array<TodoQueryResult>) => {
          const newData = oldData?.filter((todo) => todo.id !== data.id);
          return newData || [];
        });

        queryClient.setQueryData(['todo', data.todo_id], (oldData?: Array<TodoQueryResult>) => {
          oldData?.push(data);
          oldData?.sort((a, b) => a.id - b.id);
          return oldData || [];
        });

        setOpenDropdown(false);
      }
    },
  });

  function openEditModalHandler() {
    setOpenEditModal(true);
    setOpenDropdown(false);
  }

  function openDeleteModalHandler() {
    setOpenDeleteModal(true);
    setOpenDropdown(false);
  }

  function moveTaskHandler(direction: string) {
    const factor = direction === 'left' ? -1 : 1;
    moveTodoItem.mutate(groupId + factor);
  }

  return (
    <div className='relative p-4 bg-grey-300 rounded-1 border border-solid border-grey-500'>
      <h6 className='color-dark-500 text-sm font-bold leading-6 pb-2'>{name}</h6>
      <div className='pt-2 border-t border-t-dashed border-grey-500 flex items-center justify-between'>
        <div className='flex items-center w-54'>
          <div className='h-4 rounded-full w-full bg-grey-400 mr-3 overflow-hidden'>
            <div
              className={classNames('h-full', {
                'bg-green-700': progress === 100,
                'bg-blue-700': progress || 0 < 100,
              })}
              style={{ width: `${progress || 0}%` }}
            />
          </div>
          {progress === 100 ? (
            <span className='h-4 w-4 min-w-4 bg-green-700 flex items-center justify-center rounded-full'>
              <i className='i-kra-check color-white text-2' />
            </span>
          ) : (
            <span className='color-grey-700 text-xs leading-4 font-inter'>{`${progress || 0}%`}</span>
          )}
        </div>

        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          className='h-6 w-6 flex gap-0.75 items-center justify-center bg-transparent border-none rounded-1 transition-all-250 hover:(bg-grey-400 cursor-pointer)'
        >
          {[...Array(3)].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className='h-1 w-1 bg-grey-700 inline-block rounded-full'
            />
          ))}
        </button>
        {openDropdown ? (
          <TaskDropdown
            moveAction={moveTaskHandler}
            editAction={openEditModalHandler}
            deleteAction={openDeleteModalHandler}
            firstGroup={firstGroup}
            lastGroup={lastGroup}
          />
        ) : null}
        {openEditModal ? (
          <ModalEditTask
            closeModal={() => setOpenEditModal(false)}
            todoId={todoId}
            groupId={groupId}
          />
        ) : null}

        {openDeleteModal ? (
          <ModalDeleteTask
            closeModal={() => setOpenDeleteModal(false)}
            todoId={todoId}
            groupId={groupId}
          />
        ) : null}
      </div>
    </div>
  );
}

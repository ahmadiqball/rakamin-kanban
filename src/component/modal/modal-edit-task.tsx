import { FormEvent, useRef } from 'react';
import { Button } from '../design-system/button';
import { InputText } from '../design-system/input-text';
import { ModalContainer } from './modal-container';
import { useMutation, useQueryClient } from 'react-query';
import { AuthQueryResult, TodoQueryResult } from '~~/typings/query.entity';

interface ModalEditTaskProps {
  closeModal: () => void;
  groupId: number;
  todoId: number;
  defaultName: string;
  defaultProgress: number | null;
}

interface InputData {
  name: string;
  progress_percentage: number;
}

export function ModalEditTask({
  closeModal,
  groupId,
  todoId,
  defaultName,
  defaultProgress,
}: ModalEditTaskProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const editTodoItem = useMutation({
    mutationFn: async (data: InputData) => {
      const auth: AuthQueryResult = queryClient.getQueryData(['auth'])!;
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
          newData?.push(data);
          newData?.sort((a, b) => a.id - b.id);
          return newData || [];
        });

        closeModal();
      }
    },
  });

  function submitHandler(event: FormEvent) {
    event.preventDefault();
    const todosData: Array<TodoQueryResult> = queryClient.getQueryData(['todo', groupId])!;
    const taskData = todosData.filter((todo) => todo.id === todoId)[0];
    const formValue = formRef.current!;
    const data = {
      name: formValue.taskName.value || taskData.name,
      progress_percentage: formValue.progress.value || taskData.progress_percentage,
      target_todo_id: groupId,
    };

    editTodoItem.mutate(data);
  }

  return (
    <ModalContainer className='w-105'>
      <div className='flex justify-between items-center'>
        <h5 className='color-dark-700 text-lg font-bold'>Create Task</h5>
        <i
          className='i-kra-close color-dark-500 text-2xl hover:cursor-pointer'
          onClick={closeModal}
        />
      </div>
      <form
        className='mt-6 flex flex-col gap-5'
        ref={formRef}
        onSubmit={submitHandler}
      >
        <InputText
          label='Task Name'
          placeholder='Type your Task'
          name='taskName'
          className='w-full'
          defaultValue={defaultName}
        />
        <InputText
          label='Progress'
          placeholder='70%'
          type='number'
          name='progress'
          className='w-36'
          defaultValue={defaultProgress || undefined}
          max={100}
          min={0}
        />
        <div className='flex justify-end gap-2.5 pt-3'>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            variant='blue'
            type='submit'
          >
            Save Task
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
}

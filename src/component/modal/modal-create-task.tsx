import { FormEvent, useRef } from 'react';
import { Button } from '../design-system/button';
import { InputText } from '../design-system/input-text';
import { ModalContainer } from './modal-container';
import { useMutation, useQueryClient } from 'react-query';
import { AuthQueryResult, TodosQueryResult } from '~~/typings/query.entity';

interface ModalCreateTaskProps {
  openModal: boolean;
  closeModal: () => void;
  groupId: number;
}

interface InputData {
  name: string;
  progress_percentage: number;
}

export function ModalCreateTask({ openModal, closeModal, groupId }: ModalCreateTaskProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const createTodoItem = useMutation({
    mutationFn: async (data: InputData) => {
      const auth: AuthQueryResult = queryClient.getQueryData(['auth'])!;
      const res = await fetch(`https://todo-api-18-140-52-65.rakamin.com/todos/${groupId}/items`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${auth.auth_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      return resData;
    },
    onSuccess: (data) => {
      if (!data.message) {
        queryClient.setQueryData(['todo', groupId], (oldData?: Array<TodosQueryResult>) => {
          return [...(oldData || []), data];
        });

        closeModal();
      }
    },
  });

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const formValue = formRef.current!;

    const data = {
      name: formValue.taskName.value,
      progress_percentage: formValue.progress.value,
    };

    createTodoItem.mutate(data);
  }

  return (
    <ModalContainer
      className='w-105'
      openModal={openModal}
    >
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
        />
        <InputText
          label='Progress'
          placeholder='70%'
          type='number'
          max={100}
          min={0}
          name='progress'
          className='w-36'
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

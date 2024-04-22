import { FormEvent, useRef } from 'react';
import { Button } from '../design-system/button';
import { InputText } from '../design-system/input-text';
import { InputTextArea } from '../design-system/input-text-area';
import { ModalContainer } from './modal-container';
import { useMutation, useQueryClient } from 'react-query';
import { TodosQueryResult } from '~~/typings/query-type';

interface ModalNewGroupProps {
  closeModal: () => void;
}

interface InputData {
  title: string;
  description: string;
}

export function ModalNewGroup({ closeModal }: ModalNewGroupProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const createTodoGroup = useMutation({
    mutationFn: async (data: InputData) => {
      const token = sessionStorage.getItem('userId');
      const res = await fetch('https://todo-api-18-140-52-65.rakamin.com/todos', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      return resData;
    },
    onSuccess: (data) => {
      if (!data.message) {
        queryClient.setQueryData(['todos'], (oldData?: Array<TodosQueryResult>) => {
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
      title: formValue.groupTitle.value,
      description: formValue.description.value,
    };

    createTodoGroup.mutate(data);
  }

  return (
    <ModalContainer className='w-105'>
      <h5 className='color-dark-700 text-lg font-bold'>Add New Group</h5>
      <form
        className='mt-6 flex flex-col gap-5'
        ref={formRef}
        onSubmit={submitHandler}
      >
        <InputText
          label='Title'
          placeholder='Title'
          name='groupTitle'
          className='w-full'
        />
        <InputTextArea
          label='Description'
          placeholder='Description'
          name='description'
          className='w-full'
        />
        <div className='flex justify-end gap-2.5 pt-3'>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            variant='blue'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
}
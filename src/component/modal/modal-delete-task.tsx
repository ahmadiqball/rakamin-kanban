import { Button } from '../design-system/button';
import { ModalContainer } from './modal-container';
import { useMutation, useQueryClient } from 'react-query';
import { AuthQueryResult, TodoQueryResult } from '~~/typings/query-type';

interface ModalDeleteTaskProps {
  closeModal: () => void;
  groupId: number;
  todoId: number;
}

export function ModalDeleteTask({ closeModal, groupId, todoId }: ModalDeleteTaskProps) {
  const queryClient = useQueryClient();

  const deleteTodoItem = useMutation({
    mutationFn: async () => {
      const auth: AuthQueryResult = queryClient.getQueryData(['auth'])!;
      const res = await fetch(
        `https://todo-api-18-140-52-65.rakamin.com/todos/${groupId}/items/${todoId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${auth.auth_token}`,
            'Content-Type': 'application/json',
          },
        },
      );

      try {
        const resData = await res.json();

        return resData;
      } catch {
        return {};
      }
    },
    onSuccess: (data) => {
      if (!data.message) {
        queryClient.setQueryData(['todo', groupId], (oldData?: Array<TodoQueryResult>) => {
          const newData = oldData?.filter((todo) => todo.id !== todoId);
          return newData || [];
        });

        closeModal();
      }
    },
  });

  function deleteHandler() {
    deleteTodoItem.mutate();
  }

  return (
    <ModalContainer className='w-105'>
      <div className='flex justify-between items-center'>
        <h5 className='color-dark-700 text-lg font-bold'>Delete Task</h5>
        <i
          className='i-kra-close color-dark-500 text-2xl hover:cursor-pointer'
          onClick={closeModal}
        />
      </div>
      <p className='color-dark-500 text-sm mt-4'>
        Are you sure want to delete this task? your action can’t be reverted.
      </p>
      <div className='flex justify-end gap-2.5 pt-3'>
        <Button onClick={closeModal}>Cancel</Button>
        <Button
          variant='red'
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </div>
    </ModalContainer>
  );
}

import { useState } from 'react';
import { useQuery } from 'react-query';
import BoardGroup from '~~/component/board-group';
import { Button } from '~~/component/button';
import { ModalNewGroup } from '~~/component/modal-new-group';
import { TodosQueryResult } from '~~/typings/query-type';

interface AuthQueryResult {
  auth_token: string;
}

export function KanbanV1() {
  const [openModal, setOpenModal] = useState(false);

  const { data: auth } = useQuery({
    queryKey: ['auth'],
    queryFn: async (): Promise<AuthQueryResult> => {
      const res = await fetch('https://todo-api-18-140-52-65.rakamin.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: 'ahmad.iqbal@rakamin.com',
          password: 'password',
        }),
      });

      const data = await res.json();
      sessionStorage.setItem('userId', data.auth_token);
      return data;
    },
  });

  const { data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: async (): Promise<Array<TodosQueryResult>> => {
      const res = await fetch('https://todo-api-18-140-52-65.rakamin.com/todos', {
        headers: {
          Authorization: `Bearer ${auth?.auth_token}`,
        },
      });
      const data = await res.json();

      return data;
    },
    enabled: !!auth,
  });

  return (
    <main>
      <section className='flex gap-2.5 items-center px-5 py-4.5 border-b border-b-solid border-grey-500'>
        <h1>Product Roadmap</h1>
        <Button
          variant='blue'
          className='flex items-center gap-1'
          onClick={() => setOpenModal(!openModal)}
        >
          <i className='i-kra-plus text-xs color-white' />
          Add New Group
        </Button>
      </section>
      <section className='p-6 flex gap-4 max-w-screen overflow-x-scroll min-h-[calc(100vh-70px)]'>
        {todos?.map((todo) => (
          <BoardGroup
            description={todo.description}
            title={todo.title}
            variant={todo.id % 4}
            groupId={todo.id}
            key={todo.id}
          />
        ))}
      </section>

      {openModal ? <ModalNewGroup closeModal={() => setOpenModal(false)} /> : null}
    </main>
  );
}

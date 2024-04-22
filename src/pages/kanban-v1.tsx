import { useState } from 'react';
import { useQuery } from 'react-query';
import { BoardGroup } from '~~/component/board/board-group';
import { Button } from '~~/component/design-system/button';
import { ModalNewGroup } from '~~/component/modal/modal-new-group';
import { AuthQueryResult, TodosQueryResult } from '~~/typings/query.entity';

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
          email: import.meta.env.VITE_AUTH_EMAIL,
          password: import.meta.env.VITE_AUTH_PASSWORD,
        }),
      });

      const data = await res.json();

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
        {todos?.map((todo, index) => (
          <BoardGroup
            firstGroup={index === 0}
            lastGroup={index === todos.length - 1}
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

import BoardGroup from '~~/component/board-group';
import { Button } from '~~/component/button';
import { ModalContainer } from '~~/component/modal-container';

const dummyTodos = [
  {
    id: 1,
    title: 'Group Task 1',
    created_by: '1',
    created_at: '2021-04-20T23:47:50.046Z',
    updated_at: '2021-04-20T23:47:50.046Z',
    description: 'January - March',
  },
  {
    id: 2,
    title: 'Group Task 2',
    created_by: '1',
    created_at: '2021-04-21T00:04:23.906Z',
    updated_at: '2021-04-21T00:04:23.906Z',
  },
  {
    id: 3,
    title: 'Group Task 1',
    created_by: '1',
    created_at: '2021-04-20T23:47:50.046Z',
    updated_at: '2021-04-20T23:47:50.046Z',
    description: 'January - March',
  },
  {
    id: 4,
    title: 'Group Task 2',
    created_by: '1',
    created_at: '2021-04-21T00:04:23.906Z',
    updated_at: '2021-04-21T00:04:23.906Z',
  },
];

export function KanbanV1() {
  return (
    <main>
      <section className='flex gap-2.5 items-center px-5 py-4.5 border-b border-b-solid border-grey-500'>
        <h1>Product Roadmap</h1>
        <Button
          variant='blue'
          className='flex items-center gap-1'
        >
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 2.5V9.5'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M2.5 6H9.5'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Add New Group
        </Button>
      </section>
      <section className='p-6 flex gap-4 max-w-screen overflow-x-scroll min-h-[calc(100vh-70px)]'>
        {dummyTodos.map((todo) => (
          <BoardGroup
            description={todo.description}
            title={todo.title}
            variant={todo.id % 4}
            key={todo.id}
          />
        ))}
      </section>
      <ModalContainer />
    </main>
  );
}

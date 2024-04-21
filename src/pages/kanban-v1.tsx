import { Button } from '~~/component/button';

export function KanbanV1() {
  return (
    <main>
      <section className='flex gap-2.5 items-center px-5 py-4.5'>
        <h1>Product Roadmap</h1>
        <Button variant='blue'>+ Add New Group</Button>
      </section>
    </main>
  );
}

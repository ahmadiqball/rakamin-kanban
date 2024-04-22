import { RouteObject, Navigate, createBrowserRouter } from 'react-router-dom';
import { KanbanV1 } from '~~/pages/kanban-v1';

const routes: RouteObject[] = [
  {
    errorElement: (
      <Navigate
        replace
        to='/v1'
      />
    ),
  },
  {
    Component: KanbanV1,
    path: '/v1',
  },
];

export const router = createBrowserRouter(routes);

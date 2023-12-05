import { useRoutes } from 'react-router-dom';

import { ToDosRoutes } from '@/features/todos';

import type { RouteObject } from 'react-router-dom';

const getRoutes = (): RouteObject[] => {
  return [{ path: '/todos/*', element: <ToDosRoutes /> }];
};

const AppRoutes = (): React.JSX.Element | null => {
  const root: RouteObject[] = [{ path: '/', element: <ToDosRoutes /> }];
  const todos: RouteObject[] = [{ path: '/todos/*', element: <ToDosRoutes /> }];

  const element = useRoutes([...root, ...todos]);

  return element;
};

export { getRoutes, AppRoutes };

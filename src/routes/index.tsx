import { RouteObject, useRoutes } from 'react-router-dom';

import { ToDosRoutes } from '@/features/todos';

const getRoutes = (): RouteObject[] => {
  return [{ path: '/todos/*', element: <ToDosRoutes /> }];
};

const AppRoutes = () => {
  const root: RouteObject[] = [{ path: '/', element: <ToDosRoutes /> }];
  const todos: RouteObject[] = [{ path: '/todos/*', element: <ToDosRoutes /> }];

  const element = useRoutes([...root, ...todos]);

  return <>{element}</>;
};

export { getRoutes, AppRoutes };

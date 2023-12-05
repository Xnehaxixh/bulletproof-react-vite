import { http, HttpResponse } from 'msw';

import { db } from '@/__msw__/db';
import { config } from '@/config';
import type { TodoEntity } from '@/features/todos';
import type { ListResponse } from '@/types/ListResponse';

const API_ROUTE_TODOS = `${config.apiUrl}/todos`;

const todosHandlers = [
  http.get<never, never, ListResponse<TodoEntity>>(API_ROUTE_TODOS, () => {
    return HttpResponse.json({
      count: db.todo.count(),
      data: db.todo.getAll(),
    });
  }),
];

export { todosHandlers };

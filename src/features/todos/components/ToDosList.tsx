import React from 'react';

import { TodoEntity } from '@/features/todos/types';

type ToDoItemProps = {
  readonly data: TodoEntity;
};

const ToDoItem: React.FC<ToDoItemProps> = ({ data: { id, name, completed } }) => {
  return (
    <pre>
      <span>{id}</span>
      <span> | </span>
      <span>{completed ? '✅' : '🟩'}</span>
      <span> | </span>
      <span>{name}</span>
    </pre>
  );
};

const ToDosList: React.FC<{ readonly items: TodoEntity[] }> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ToDoItem key={item.id} data={item} />
      ))}
    </div>
  );
};

export { ToDosList };

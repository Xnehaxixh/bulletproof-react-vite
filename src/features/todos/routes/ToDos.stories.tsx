import React from 'react';

import { ToDos } from '@/features/todos/routes/ToDos';

import type { Meta } from '@storybook/react';

const meta: Meta<typeof ToDos> = {
  title: 'Features/Todos',
  component: ToDos,
};

// eslint-disable-next-line import/no-default-export
export default meta;
export const ListPage = {
  render: (): React.JSX.Element => <ToDos />,
};

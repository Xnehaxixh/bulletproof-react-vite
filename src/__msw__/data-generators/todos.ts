import { faker } from '@faker-js/faker';

import type { TodoEntity } from '@/features/todos';

type Overrides = Record<string, unknown>;

export const todoGenerator = (
  overrides?: TodoEntity & Overrides
): {
  completed: boolean;
  id: string;
  name: string;
} => ({
  id: faker.datatype.uuid(),
  name: faker.lorem.sentence(),
  completed: false,
  ...overrides,
});

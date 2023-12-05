import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { queryClient } from '@/lib';
import { getRoutes } from '@/routes';

interface TestParams {
  currentUrl: string;
}

const renderTest = ({ currentUrl }: TestParams): ReturnType<typeof render> => {
  const router = createMemoryRouter(getRoutes(), { initialEntries: [currentUrl] });

  return render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export type { TestParams };
export { renderTest };

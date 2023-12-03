import React from 'react';

import { AppProvider } from '@/providers/app';
import { AppRoutes } from '@/routes';

export const App = (): React.JSX.Element => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};

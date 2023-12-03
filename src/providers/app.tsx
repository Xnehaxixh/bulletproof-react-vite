import React, { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '@/lib';

type AppProviderProps = {
  readonly children: ReactNode;
};

const AppProvider = ({ children }: AppProviderProps): React.JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>{children}</Router>
    </QueryClientProvider>
  );
};

export { AppProvider };

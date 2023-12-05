/* eslint-disable @limegrass/import-alias/import-alias */
import React from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../../src/lib/react-query';

import type { Decorator } from '@storybook/react';

export const providersDecorator: Decorator = (Story) => (
  <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
);

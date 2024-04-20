'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import store from '@/lib/store/store';

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

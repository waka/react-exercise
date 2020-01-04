// @flow

import React from 'react';

import { GlobalStateProvider } from './flux/stores/global_store';
import List from './components/tasks/list';

const Container: React.FC = () => (
  <GlobalStateProvider>
    <List />
  </GlobalStateProvider>
);

export default Container;

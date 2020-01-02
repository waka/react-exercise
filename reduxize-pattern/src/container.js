// @flow

import React from 'react';
import { Container as FluxContainer } from './utils';

import TodoStore from './flux/stores/todo_store';

class Container extends React.Component<{}, {}> {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return { todo: TodoStore.getState() };
  }

  render() {
    return <div>hoge</div>;
  }
}

export default FluxContainer.create(Container);

// @flow

import React from 'react';
import { Container as FluxContainer } from './utils';
import { countUp } from './flux/actions/counter_action';
import { addTask } from './flux/actions/task_action';
import CounterStore from './flux/stores/counter_store';
import TaskStore from './flux/stores/task_store';
import Counter from './components/counter';
import Form from './components/form';
import List from './components/list';
import type { Task } from 'types';

type Props = {};
type State = { count: number, tasks: Array<Task> };

class Container extends React.Component<Props, State> {
  static getStores() {
    return [CounterStore, TaskStore];
  }

  static calculateState() {
    return { ...CounterStore.getState(), ...TaskStore.getState() };
  }

  handleAdd(e: SyntheticEvent<>, task: Task) {
    e.preventDefault();
    addTask(task);
  }

  handleCountUp(e: SyntheticEvent<>) {
    e.preventDefault();
    countUp();
  }

  render() {
    return (
      <>
        <div>
          <Form onSubmit={this.handleAdd} />
          <List tasks={this.state.tasks} />
        </div>
        <Counter count={this.state.count} onCountUp={this.handleCountUp} />
      </>
    );
  }
}

export default FluxContainer.create(Container, { withProps: true });

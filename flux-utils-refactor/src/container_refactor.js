// @flow

import React from 'react';
import { useFluxStores } from './hooks/flux-utils';
import { countUp } from './flux/actions/counter_action';
import { addTask } from './flux/actions/task_action';
import CounterStore from './flux/stores/counter_store';
import TaskStore from './flux/stores/task_store';
import Counter from './components/counter';
import Form from './components/form';
import List from './components/list';
import type { Task } from 'types';

type Props = {};

const getStores = () => [CounterStore, TaskStore];

const calculateState = () => {
  return { ...CounterStore.getState(), ...TaskStore.getState() };
};

const handleAdd = (e: SyntheticEvent<>, task: Task) => {
  e.preventDefault();
  addTask(task);
};

const handleCountUp = (e: SyntheticEvent<>) => {
  e.preventDefault();
  countUp();
};

const Container: React.FC = (_props: Props) => {
  const state = useFluxStores(getStores(), calculateState);
  return (
    <>
      <div>
        <Form onSubmit={handleAdd} />
        <List tasks={state.tasks} />
      </div>
      <Counter count={state.count} onCountUp={handleCountUp} />
    </>
  );
};

export default Container;

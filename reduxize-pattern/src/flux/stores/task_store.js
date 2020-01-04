// @flow

import { ReduceStore } from '../../utils';
import dispatcher from '../dispatcher';
import type { Task } from '../../types';

type State = Array<Task>;
type Action = {
  type: string,
  payload: { tasks: Array<Task> }
};

class TaskStore extends ReduceStore {
  getInitialState(): State {
    return { tasks: [] };
  }

  reduce(state: State, action: Action): State {
    const tasks = state.tasks;
    switch (action.type) {
      case 'add':
        tasks.push(action.payload.tasks[0]);
        return { tasks };
      case 'delete':
        return { tasks };
      default:
        return { tasks };
    }
  }
}

export default new TaskStore(dispatcher);

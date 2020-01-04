// @flow

import dispatcher from '../dispatcher';
import type { Task } from 'types';

const addTask = (task: Task) => {
  dispatcher.dispatch({
    type: 'add',
    payload: { tasks: [ task ] }
  });
};

export { addTask };

// @flow

import { ReduceStore } from '../../utils';
import dispatcher from '../dispatcher';

class TodoStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(state, _action) {
    return state;
  }
}

export default new TodoStore(dispatcher);

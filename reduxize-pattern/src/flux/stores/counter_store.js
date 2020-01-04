// @flow

import { ReduceStore } from '../../utils';
import dispatcher from '../dispatcher';

type State = number;
type Action = {
  type: string
};

class CounterStore extends ReduceStore {
  getInitialState(): State {
    return { count: 0 };
  }

  reduce(state: State, action: Action): State {
    switch (action.type) {
      case 'countup':
        const count = state.count + 1;
        return { count };
      default:
        return state;
    }
  }
}

export default new CounterStore(dispatcher);

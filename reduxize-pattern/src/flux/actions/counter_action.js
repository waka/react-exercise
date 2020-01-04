// @flow

import dispatcher from '../dispatcher';

const countUp = () => {
  dispatcher.dispatch({ type: 'countup' });
};

export { countUp };

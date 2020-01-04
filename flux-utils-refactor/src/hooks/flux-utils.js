// @flow

import { useEffect, useReducer } from 'react';

const useFluxStores = (stores, reducer, deps = []) => {
  const [state, dispatch] = useReducer(reducer, reducer());

  useEffect(() => {
    const tokens = stores.map(store => store.addListener(() => {
      dispatch(store);
    }));
    return () => tokens.forEach(token => token.remove());
  });

  return state;
};

export { useFluxStores };

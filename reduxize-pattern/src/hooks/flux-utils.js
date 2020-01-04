// @flow

import { useEffect, useReducer } from 'react';

// const batchDispatch = (stores, dispatch) => stores.forEach(store => dispatch(store));

const useFluxStores = (stores, reducer, deps = []) => {
  const [state, dispatch] = useReducer(reducer, reducer());

  useEffect(() => {
    //const listener = () => batchDispatch(stores, dispatch);
    const tokens = stores.map(store => store.addListener(() => {
      dispatch(store);
    }));
    return () => tokens.forEach(token => token.remove());
  });

  return state;
};

export { useFluxStores };

// @flow

import React, { useReducer } from 'react';
import type { User } from '../../types';

export type State = {|
  date: string,
  users: Array<User>,
  items: Array<string>
|};

const reducer = (state = {}, _action): State => state;

// Usage:
//   const { state, dispatch } = useContext(GlobalStore);
const GlobalStore = React.createContext();

// Usage:
//   <GlobalStateProvider>
//     <AnyComponent />
//   </GlobalStateProvider>
const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, window.GLOBAL);
  return (
    <GlobalStore.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStore.Provider>
  );
};

export { GlobalStore, GlobalStateProvider };

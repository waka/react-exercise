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
//   const { state, dispatch } = useContext(Store);
const Store = React.createContext();

// Usage:
//   <Provider>
//     <AnyComponent />
//   </Provider>
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, window.GLOBAL);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  );
};

export { Store, Provider };

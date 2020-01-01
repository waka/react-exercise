// @flow

import React, { useContext } from 'react';
import { Store } from '../../flux/stores/global_store';
import ListItem from './list_item';

const List: React.FC = () => {
  const { state } = useContext(Store);
  const { date, users } = state;

  return (
    <React.Fragment>
      <h2>List</h2>
      <h3>{date}</h3>
      {users.map(user => <ListItem user={user} />)}
    </React.Fragment>
  );
};

export default List;

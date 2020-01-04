// @flow

import React, { useContext } from 'react';
import { GlobalStore } from '../../flux/stores/global_store';
import type { User } from '../../types';

const ListItem: React.FC = (props: { user: User }) => {
  const { user } = props;
  const { state } = useContext(GlobalStore);
  const items = state.items;

  return (
    <ul>
      <li>name: {user.name}</li>
      <li>email: {user.email}</li>
      <li>{items.join(', ')}</li>
    </ul>
  );
};

export default ListItem;

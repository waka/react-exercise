// @flow

import React from 'react';
import ListItem from './list_item';
import type { Task } from '../../types';

type Props = {
  tasks: Array<Task>
};

const List: React.FC = ({ tasks }: Props) => (
  <div>
    {tasks.map((task, idx) => <ListItem key={idx} task={task} />)}
  </div>
);

export default List;

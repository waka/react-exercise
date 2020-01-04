// @flow

import React from 'react';
import type { Task } from '../../types';

type Props = {
  task: Task
};

const ListItem: React.FC = ({ task }: Props) => (
  <dl>
    <dt>title: {task.title}</dt>
    <dd>description: {task.description}</dd>
  </dl>
);

export default ListItem;

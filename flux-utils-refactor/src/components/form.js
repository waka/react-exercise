// @flow

import React, { useState } from 'react';
import type { Task } from 'types';

type Props = {
  onSubmit: (e: SyntheticEvent<>, task: Task) => void
};

const Form: React.FC = ({ onSubmit }: Props) => {
  const [task, setTask] = useState({ title: '', description: '' });
  return (
    <form onSubmit={(e) => onSubmit(e, task)}>
      <div>
        <label>タイトル:</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div>
        <label>概要:</label>
        <input
          type="text"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div>
        <button type="submit">追加</button>
      </div>
    </form>
  );
};

export default Form;

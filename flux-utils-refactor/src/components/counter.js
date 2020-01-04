// @flow

import React from 'react';

type Props = {
  count: number,
  onCountUp: (e: SyntheticEvent<>) => void
};

const Counter: React.FC = ({ count, onCountUp }: Props) => (
  <div>
    <span>{count}回</span>
    <button onClick={onCountUp}>カウントアップ</button>
  </div>
);

export default Counter;

// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container_refactor';

window.onload = () => {
  const el = document.getElementById('root');
  if (el) {
    // $FlowIgnore: React.ComponentType で怒られるので無視する
    ReactDOM.render(<Container />, el);
  }
};

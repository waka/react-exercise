// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import Container from './container';

window.onload = () => {
  const el = document.getElementById('root');
  if (el) {
    ReactDOM.render(<Container />, el);
  }
};

// @flow

import React from 'react';
import { Container as FluxContainer } from 'flux/utils';

class Container extends React.Component<{}, {}> {
  static getStores() {
    return [];
  }

  static calculateState() {
    return {};
  }

  render() {
    return <div />;
  }
}

export default FluxContainer.create(Container);

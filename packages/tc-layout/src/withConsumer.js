import React from 'react';

import Context from './Context';

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

function withConsumer(WrappedComponent) {
  function WithConsumer(props) {
    return (
      <Context.Consumer>
        {api => <WrappedComponent {...props} layout={api} />}
      </Context.Consumer>
    );
  }

  WithConsumer.displayName =
    `WithConsumer(${getDisplayName(WrappedComponent)})`;

  return WithConsumer;
}

export default withConsumer;

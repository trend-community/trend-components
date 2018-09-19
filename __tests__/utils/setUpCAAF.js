import React from 'react';
import { mount } from 'enzyme';

export default function setUpCAAF(Component, defaultProps = {}) {
  return function __setUpCAAF__({
    children = () => <div>{Component.displayName || Component.name}</div>,
    ...props } = defaultProps
  ) {
    let renderArg;
    const childSpy = jest.fn(controllerArg => {
      renderArg = controllerArg;
      return children(controllerArg);
    });
    const wrapper = mount(<Component { ...props }>{ childSpy }</Component>);

    return { childSpy, wrapper, ...renderArg };
  }
}

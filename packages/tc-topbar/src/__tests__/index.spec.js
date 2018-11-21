import React from 'react';
import { mount, shallow } from 'enzyme';

import Topbar from '../Topbar';

describe('tc-topbar', () => {
  [
    'getElementProps',
    'getInnerProps',
    'getSectionProps',
    'getIconProps',
    'getTitleProps'
  ].forEach(propGetter => {
    it(`should expose ${propGetter}.`, () => {
      expect(setUp()[propGetter]()).toMatchSnapshot();
    });
  });

  it('should call the child function.', () => {
    const { childSpy } = setUp();
    expect(childSpy).toHaveBeenCalled();
  });

  it('should add scroll listener for "fixed" Topbar.', () => {
    const scrollTarget = { addEventListener: jest.fn() };
    const { wrapper } = setUp({ scrollTarget, fixed: true });
    expect(wrapper.prop('scrollTarget').addEventListener).toHaveBeenCalled();
  });

  it('should add scroll listener on scrollTarget by default.', () => {
    const scrollTarget = { addEventListener: jest.fn() };
    const { wrapper } = setUp({ scrollTarget, fixedScroll: true });
    expect(wrapper.prop('scrollTarget').addEventListener).toHaveBeenCalled();
  });
});

function setUp({ children = () => <div />,...props } = {}) {
  let renderArg;
  const childSpy = jest.fn(controllerArg => {
    renderArg = controllerArg;
    return children(controllerArg);
  });
  const wrapper = mount(<Topbar { ...props }>{ childSpy }</Topbar>);

  return { childSpy, wrapper, ...renderArg };
}

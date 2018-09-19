import React from 'react';
import { mount, shallow } from 'enzyme';

import setUpCAAF from '../utils/setUpCAAF';
import Topbar from '../../packages/trend-react-components/Topbar';

const setUp = setUpCAAF(Topbar, { children: () => <header>topbar</header> });

describe('[trend-react-components/Topbar]', () => {
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

  it('should render the component.', () => {
    const { childSpy } = setUp();
    expect(childSpy()).toMatchSnapshot();
  });

  it('should add scroll listener for "fixed" Topbar.', () => {
    const scrollTarget = { addEventListener: jest.fn() };
    const { wrapper } = setUp({ scrollTarget, fixed: true });
    expect(wrapper.prop('scrollTarget').addEventListener).toHaveBeenCalled();
  });

  it('should add scroll listener for "fixedScroll" Topbar.', () => {
    const scrollTarget = { addEventListener: jest.fn() };
    const { wrapper } = setUp({ scrollTarget, fixedScroll: true });
    expect(wrapper.prop('scrollTarget').addEventListener).toHaveBeenCalled();
  });

  it('should not add scroll listener if not "fixed" or "fixedScroll".', () => {
    const scrollTarget = { addEventListener: jest.fn() };
    const { wrapper } = setUp({ scrollTarget });
    const result = wrapper.prop('scrollTarget').addEventListener;
    expect(result).toHaveBeenCalledTimes(0);
  });
});

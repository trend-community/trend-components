import React from 'react';
import { mount, shallow } from 'enzyme';

import Button from '../../packages/tc-react-button';

describe('[tc-react-button]', () => {
  it('should render a button element.', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.type()).toEqual('button');
  });

  it('should have correct className.', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.prop('className').includes('tc-Button')).toBeTruthy();
  });

  it('should default prop "type" to button.', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.prop('type')).toEqual('button');
  });

  ['accent', ['accent', 'flat'], 'ctab compact'].forEach(modifiers => {
    it(`should construct the modifiers ${modifiers} correctly.`, () => {
      const wrapper = shallow(<Button modifiers={modifiers} />);
      expect(wrapper.prop('className')).toMatchSnapshot();
    });
  });

  it('should render children as a node.', () => {
    const wrapper = shallow(<Button><span>button</span></Button>);
    expect(wrapper.find('span')).toBeTruthy();
  });

  it('should render children as a function.', () => {
    const { childSpy } = setUp();
    expect(childSpy).toHaveBeenCalled();
  });

  it('should pass in prop getter for button icons.', () => {
    const { getButtonIconProps } = setUp();
    expect(getButtonIconProps({ id: 'button-icon' })).toMatchSnapshot();
  });
});

function setUp({ children = () => <span>button</span>, ...props } = {}) {
  let renderArg;
  const childSpy = jest.fn(controllerArg => {
    renderArg = controllerArg;
    return children(controllerArg);
  });
  const wrapper = mount(<Button { ...props }>{ childSpy }</Button>);

  return { childSpy, wrapper, ...renderArg };
}

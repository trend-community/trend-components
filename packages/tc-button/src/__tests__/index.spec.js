import React from 'react';
import { shallow } from 'enzyme';

import Button from '../';

describe('tc-button', () => {
  it('should render a button element.', () => {
    const wrapper = shallow(<Button>button</Button>);
    expect(wrapper.type()).toEqual('button');
  });

  it('should have correct default className.', () => {
    const wrapper = shallow(<Button>button</Button>);
    expect(wrapper.prop('className')).toMatchSnapshot();
  });

  it('should set a default "type" prop.', () => {
    const wrapper = shallow(<Button>button</Button>);
    expect(wrapper.prop('type')).toEqual('button');
  });

  it('should disable the button when `disabled`.', () => {
    const wrapper = shallow(<Button disabled>button</Button>);
    expect(wrapper.prop('disabled')).toBeTruthy();
  });

  it('should render a flat accent button.', () => {
    const wrapper = shallow(<Button variant="flat" accent>button</Button>);
    expect(wrapper.prop('className')).toMatchSnapshot();
  });

  it('should render a compact ghost button.', () => {
    const wrapper = shallow(<Button variant="ghost" size="compact" />);
    expect(wrapper.prop('className')).toMatchSnapshot();
  });

  it('should render a disabled ctab accent button.', () => {
    const wrapper = shallow(<Button variant="ctab" accent disabled />);
    expect(wrapper.props()).toMatchSnapshot();
  });

  it('should pass through additional props to button.', () => {
    const wrapper = shallow(<Button id="test" aria-label="test-button" />);
    expect(wrapper.props()).toMatchSnapshot();
  });

  it('should render children.', () => {
    const testCase = 'test';
    const wrapper = shallow(<Button children={testCase} />);
    expect(wrapper.text()).toEqual(testCase);
  });

  it('should expose a static prop getter for icons.', () => {
    expect(Button.getIconProps).toBeTruthy();
    expect(Button.getIconProps()).toMatchSnapshot();
    expect(Button.getIconProps({ id: 'test' })).toMatchSnapshot();
  });
});

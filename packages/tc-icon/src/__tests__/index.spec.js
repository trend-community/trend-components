import React from 'react';
import { shallow } from 'enzyme';

import withIcon from '../';

const IconComponent = props => <svg {...props} />;

const Icon = withIcon(IconComponent);

describe('tc-icon (withIcon)', () => {
  it('should set the wrapped icon with the correct props.', () => {
    const wrapper = shallow(<Icon />);
    const WrappedComponent = wrapper.find('IconComponent').dive();
    expect(WrappedComponent.props()).toMatchSnapshot();
  });

  it('should allow the size to be updated.', () => {
    const wrapper = shallow(<Icon size={2} />);
    const WrappedComponent = wrapper.find('IconComponent').dive();
    expect(WrappedComponent.props()).toMatchSnapshot();
  });

  it('should merge the styles.', () => {
    const style = {
      overflow: 'hidden',
      height: '1rem',
      width: '1rem'
    };
    const wrapper = shallow(<Icon style={style} />);
    const WrappedComponent = wrapper.find('IconComponent').dive();
    expect(WrappedComponent.prop('style')).toMatchSnapshot();
  });
});

import React from 'react';
import { mount } from 'enzyme';

import { cssClasses } from '../constants';
import Divider from '../';

function expected({ cn = cssClasses.root, o = 'horizontal' } = {}) {
  return `<hr class="${cn}" role="separator" aria-orientation="${o}">`;
}

describe('tc-divider', () => {
  it('should render a divider.', () => {
    const wrapper = mount(<Divider />);
    const result = wrapper.html();

    expect(result).toEqual(expected());
  });

  it('should render with a vertical orientation.', () => {
    const result = mount(<Divider orientation="vertical" />).html();
    expect(result).toEqual(expected({ o: 'vertical' }))
  });

  it('should render with the "indent" variant.', () => {
    const result = mount(<Divider variant="indent" />).html();
    const { root, indent } = cssClasses;
    expect(result).toEqual(expected({ cn: `${root} ${indent}`}));
  });
});

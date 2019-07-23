import React from 'react';
import { mount } from 'enzyme';

import VisuallyHidden, { useVisuallyHidden } from '../';

describe('tc-visuallyhidden', () => {
  it('should render.', () => {
    const result = mount(<VisuallyHidden>text</VisuallyHidden>).html();
    const expected = '<span style="clip: rect(1px, 1px, 1px, 1px); overflow: hidden; position: absolute; border: 0px; height: 1px; padding: 0px; width: 1px;">text</span>';

    expect(result).toEqual(expected);
  });

  it('should render "as" a div tag.', () => {
    const wrapper = mount(<VisuallyHidden as="div">text</VisuallyHidden>);
    expect(wrapper.find('div')).toHaveLength(1);
  });
});

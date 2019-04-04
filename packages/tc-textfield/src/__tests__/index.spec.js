import React from 'react';
import { mount, shallow } from 'enzyme';

import Data from '../../../tc-icon/src/Data';
import { cssClasses, validityMap } from '../constants';
import TextField from '../';

describe('tc-textfield', () => {
  let props;

  beforeEach(() => {
    props = {
      helperText: 'Helper text',
      BeginningIcon: Data
    }
  });

  // Test main component.
  it('should render a div with the component className.', () => {
    const wrapper = shallow(<TextField />);
    const elem = wrapper.find(`div.${cssClasses.ROOT}`);

    expect(elem).toHaveLength(1);
  });

  // Test icon.
  it('should be able to render an input correctly.', () => {
    const wrapper = mount(<TextField><TextField.Input /></TextField>);
    const input = wrapper.find(`input.${cssClasses.INPUT}`);

    expect(input).toHaveLength(1);
    expect(input.prop('id')).toBeTruthy();
    wrapper.unmount();
  });

  // Test icons.
  it('should render the TextField with the beginning icon correctly.', () => {
    const wrapper = mount(<TextField {...props} />);
    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.BEGINNING_ICON}`
    );
    const icon = wrapper.find(`svg.${cssClasses.ICON}`);

    expect(elem).toHaveLength(1);
    expect(icon).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render the TextField with the ending icon correctly.', () => {
    props.BeginningIcon = false;
    props.EndingIcon = Data
    const wrapper = mount(<TextField {...props} />);
    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.ENDING_ICON}`
    );
    const icon = wrapper.find(`svg.${cssClasses.ICON}`);

    expect(elem).toHaveLength(1);
    expect(icon).toHaveLength(1);
    wrapper.unmount();
  });

  it('should render the TextField with both beginning and ending.', () => {
    props.EndingIcon = Data
    const wrapper = mount(<TextField {...props} />);
    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.BEGINNING_ICON}.${cssClasses.ENDING_ICON}`
    );
    const icon = wrapper.find(`svg.${cssClasses.ICON}`);

    expect(elem).toHaveLength(1);
    expect(icon).toHaveLength(2);
    wrapper.unmount();
  });

  // Test visual state.
  it('should disable the TextField correctly.', () => {
    props.disabled = true;
    const wrapper = mount(<TextField {...props}>
      <TextField.Input />
    </TextField>);
    const elem = wrapper.find('div').first();

    expect(elem.hasClass(cssClasses.DISABLED)).toBeTruthy();
    expect(wrapper.find('input').prop('disabled')).toBeTruthy();
    wrapper.unmount();
  });

  it('should adjust the state on focus.', () => {
    const wrapper = mount(<TextField {...props}>
      <TextField.Input />
    </TextField>);
    wrapper.find('input').simulate('focus');
    const elem = wrapper.find('div').first();

    expect(elem.hasClass(cssClasses.FOCUSED)).toBeTruthy();
    wrapper.unmount();
  });

  // Test label.
  it('should render a label correctly.', () => {
    const text = 'label';
    const wrapper = mount(<TextField>
      <TextField.Label children={text} />
    </TextField>);
    const label = wrapper.find(`label.${cssClasses.LABEL}`);

    expect(label).toHaveLength(1);
    expect(label.prop('htmlFor')).toBeTruthy();
    expect(label.prop('children')).toEqual(text);
    wrapper.unmount();
  });

  it('should have a active label with a value on mount.', () => {
    props.BeginningIcon = false;
    const wrapper = mount(<TextField {...props}>
      <TextField.Input defaultValue="foobar" />
      <TextField.Label children="label" />
    </TextField>);
    wrapper.find('input').simulate('blur');
    const label = wrapper.find('label');

    expect(label.hasClass(cssClasses.ACTIVE)).toBeTruthy();
    wrapper.unmount();
  });

  it('should activate the label on change with a value.', () => {
    props.BeginningIcon = false;
    const wrapper = mount(<TextField {...props}>
      <TextField.Input />
      <TextField.Label children="label" />
    </TextField>);
    wrapper.find('input').simulate('change', {
      target: {
        value: 'foo',
        validity: { valid: true }
      }
    });
    wrapper.find('input').simulate('blur');

    const label = wrapper.find('label');
    expect(label.hasClass(cssClasses.ACTIVE)).toBeTruthy();
    wrapper.unmount();
  });

  // Test Helper text.
  it('should display a helper text element.', () => {
    const wrapper = mount(<TextField {...props} />);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    expect(helperElem.text()).toEqual(props.helperText);
    expect(helperElem).toHaveLength(1);
    wrapper.unmount();
  });

  it('should not display a helper text element.', () => {
    props.helperText = false;
    const wrapper = mount(<TextField {...props} />);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    expect(helperElem).toHaveLength(0);
    wrapper.unmount();
  });

  // Test that correct modifier class is applied when a variant is selected.
  ['rim', 'textarea'].forEach(variant => {
    it(`should apply the ${variant} variant modifier class.`, () => {
      props.variant = variant;
      const wrapper = mount(<TextField {...props} />);
      const elem = wrapper
        .find(`div.${cssClasses.ROOT}.${cssClasses[variant.toUpperCase()]}`);

      expect(elem).toHaveLength(1);
      wrapper.unmount();
    });
  });

  // Validations
  it('should handle validation when input is required.', () => {
    const wrapper = mount(<TextField {...props}>
      <TextField.Input required />
    </TextField>);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    wrapper.find('input').simulate('change');

    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.INVALID}`
    );

    expect(helperElem.text()).toEqual('This field is required.');
    expect(elem).toHaveLength(1);
    wrapper.unmount();
  });

  it('should handle validation when input has a minLength.', () => {
    const wrapper = mount(<TextField {...props}>
      <TextField.Input minLength={3} />
    </TextField>);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    wrapper.find('input').simulate('change', {
      target: {
        getAttribute: () => 3,
        nodeName: 'INPUT',
        validity: { valid: false, tooShort: true, }
      }
    });

    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.INVALID}`
    );

    expect(helperElem.text())
      .toEqual('Mininum number of characters (3) has not been met.');
    expect(elem).toHaveLength(1);
    wrapper.unmount();
  });

   it('should handle validation when input has incorrect pattern.', () => {
    const wrapper = mount(<TextField {...props}>
      <TextField.Input />
    </TextField>);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    wrapper.find('input').simulate('change', {
      target: {
        getAttribute: () => {},
        nodeName: 'INPUT',
        validity: { valid: false, patternMissing: true, }
      }
    });

    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.INVALID}`
    );

    expect(helperElem.text())
      .toEqual('Incorrect format for inputted value.');
    expect(elem).toHaveLength(1);
    wrapper.unmount();
  });

  it('should handle custom validation messages.', () => {
    const message = 'Required field.';
    props.validators= [{
      type: 'invalid',
      message
    }];
    const wrapper = mount(<TextField {...props}>
      <TextField.Input required />
    </TextField>);
    const helperElem = wrapper.find(`div.${cssClasses.HELPER}`);

    wrapper.find('input').simulate('change');

    const elem = wrapper.find(
      `div.${cssClasses.ROOT}.${cssClasses.INVALID}`
    );

    expect(helperElem.text())
      .toEqual(message);
    expect(elem).toHaveLength(1);
    wrapper.unmount();
  });
});

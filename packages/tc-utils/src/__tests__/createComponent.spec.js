import React from "react";
import { mount, shallow } from "enzyme";

import createComponent from "../createComponent";

describe('[utils - createComponent]', () => {
  it("should render as a generic component", () => {
    const useHook = ({ text }, htmlProps) => ({
      children: text,
      ...htmlProps
    });

    useHook.__keys = ['text'];

    const Generic = createComponent({ as: 'span', useHook });

    function As({ testProp, ...props }) {
      return <div id={testProp} {...props} />;
    }

    const wrapper = mount(
      <Generic as={As} text="text..." testProp="generic" />
    );

    expect(
      wrapper
        .find("As")
        .find("div")
        .html()
    ).toEqual('<div id="generic">text...</div>');
  });

  it('should use keys as options.', () => {
    const keyTest1 = 'key 1 text...';
    const keyTest2 = 'keyID';
    const useHook = ({ key1, key2 }) => ({ children: key1, id: key2 });
    useHook.__keys = ['key1', 'key2' ];

    const Component = createComponent({ as: 'span', useHook });
    const wrapper = shallow(<Component key1={keyTest1} key2={keyTest2} />);

    expect(wrapper.text()).toEqual(keyTest1);
    expect(wrapper.props().id).toEqual(keyTest2);
  });

  it('should render when "as" created with createComponent.', () => {
    const text = 'test successful!';
    const expected = `<section>${text}</section>`;
    const useHookA = ({ a }, htmlProps) => ({ children: a, ...htmlProps });
    useHookA.__keys = ['a'];
    const CompA = createComponent({ as: 'div', useHook: useHookA });

    const useHookB = ({ b }, htmlProps) => ({ children: b, ...htmlProps });
    useHookB.__keys = ['b'];
    const CompB = createComponent({ as: 'section', useHook: useHookB });

    const result = mount(<CompA as={CompB} a={text} b="b" />)
      .find('section')
      .html();

    expect(result).toEqual(expected);
  });

  it('should render the component wrapped.', () => {
    const id = 'wrapper';
    const useHook = (k, h) => ({
      wrap: children => <div id={id}>{children}</div>,
      ...h
    });
    const Component = createComponent({ as: 'span', useHook });
    const wrapper = mount(<Component id="a">a</Component>);

    const result = wrapper.find(`#${id}`).html();
    const expected = '<div id="wrapper"><span id="a">a</span></div>';

    expect(result).toEqual(expected);
  });
});

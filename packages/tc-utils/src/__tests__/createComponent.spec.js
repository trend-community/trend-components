import React from 'react';
import { render } from '@testing-library/react';

import createComponent from '../createComponent';

const QUERY = 'query';

describe('[utils - createComponent]', () => {
  it('should render as a generic component', () => {
    const useHook = ({ text }, htmlProps) => ({
      children: text,
      ...htmlProps
    });

    const Generic = createComponent({
      as: 'span',
      optionProps: ['text'],
      useHook
    });

    function As({ testProp, ...props }) {
      return <div id={testProp} {...props} />;
    }

    const { getByText } = render(
      <Generic as={As} text={QUERY} testProp="generic" />
    );

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <div
        id="generic"
      >
        query
      </div>
    `);
  });

  it('should set optionProps as options.', () => {
    const optionTest1 = 'option 1 text...';
    const optionTest2 = 'optionID';
    const useHook = ({ option1, option2 }) => ({
      children: optionTest1,
      id: optionTest2
    });

    const Component = createComponent({
      as: 'span',
      optionProps: ['option1', 'option2'],
      useHook
    });
    const { getByText } = render(
      <Component option1={optionTest1} option2={optionTest2} />
    );

    expect(getByText(optionTest1)).toMatchInlineSnapshot(`
      <span
        id="optionID"
      >
        option 1 text...
      </span>
    `);
  });

  it('should render when "as" created with createComponent.', () => {
    const useHookA = ({ a }, props) => ({ children: a, ...props });
    const CompA = createComponent({
      as: 'div',
      optionProps: ['a'],
      useHook: useHookA
    });

    const CompB = createComponent({
      as: 'section',
      optionProps: ['b'],
      useHook: function useHookB({ b }, props) {
        return {
          children: b,
          ...props
        }
      }
    });

    const { getByText } = render(<CompA as={CompB} a={QUERY} b="b" />);

    expect(getByText(QUERY)).toMatchInlineSnapshot(`
      <section>
        query
      </section>
    `);
  });

  it('should render the component wrapped.', () => {
    const useHook = (k, h) => ({
      wrap: children => <div id="wrapper">{children}</div>,
      ...h
    });
    const Component = createComponent({ as: 'span', useHook });
    const { getByText } = render(<Component id="a">{QUERY}</Component>);

    expect(getByText(QUERY).parentElement).toMatchInlineSnapshot(`
      <div
        id="wrapper"
      >
        <span
          id="a"
        >
          query
        </span>
      </div>
    `);
  });
});

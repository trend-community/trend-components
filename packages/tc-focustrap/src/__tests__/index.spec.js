import React from 'react';
import { mount } from 'enzyme';

import FocusTrap, { Trap } from '../';

const noop = () => {};

describe('tc-focustrap', () => {
  let mockFocusTrap;
  let mockCreateFocusTrap;

  beforeEach(() => {
    mockFocusTrap = {
      activate: jest.fn(),
      deactivate: jest.fn(),
      pause: jest.fn()
    };
    mockCreateFocusTrap = jest.fn(() => mockFocusTrap);
  });

  it('should render with only required props.', () => {
    const wrapper = mount(
      <Trap _createFocusTrap={mockCreateFocusTrap}>
        <button children="set trap" />
      </Trap>
    );
    const node = wrapper.getDOMNode();

    expect(node.tagName).toBe('DIV');
    ['id', 'class', 'style'].forEach(attr => {
      expect(node.getAttribute(attr)).toBe(null);
    });
    expect(wrapper.children().length).toEqual(1);
    expect(wrapper.find('button')).toHaveLength(1);
    wrapper.unmount();
  });

  it('should pass through props.', () => {
    const props = {
      id: 'id',
      className: 'focus-trap',
      tag: 'section'
    };
    const wrapper = mount(
      <Trap _createFocusTrap={mockCreateFocusTrap} {...props}>
        <button children="set trap" />
      </Trap>
    );

    expect(wrapper.find(props.tag)).toHaveLength(1);
    expect(wrapper.prop('id')).toEqual(props.id);
    expect(wrapper.prop('className')).toEqual(props.className);
    wrapper.unmount();
  });

  it('should activate by default.', () => {
    const wrapper = mount(
      <Trap
        _createFocusTrap={mockCreateFocusTrap}
        focusTrapOptions={{ onDeactivate: noop }}>
        <button>set trap</button>
      </Trap>
    );

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockCreateFocusTrap).toHaveBeenCalledWith(
      wrapper.getDOMNode(),
      { onDeactivate: noop }
    );

    wrapper.unmount();
  });

  it('should activate with initialFocus as selector.', () => {
    const wrapper = mount(
      <Trap
        _createFocusTrap={mockCreateFocusTrap}
        focusTrapOptions={{
          onDeactivate: noop,
          initialFocus: '#initial-focusee'
        }}
      >
        <button children="set trap" />
        <button id="initial-focusee">
          another thing
        </button>
      </Trap>
    );

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockCreateFocusTrap).toHaveBeenCalledWith(
      wrapper.getDOMNode(),
      {
        initialFocus: '#initial-focusee',
        onDeactivate: noop
      }
    );

    wrapper.unmount();
  });

  it('should mount without activation.', () => {
    const wrapper = mount(
      <Trap
        _createFocusTrap={mockCreateFocusTrap}
        focusTrapOptions={{ onDeactivate: noop }}
        active={false}
      >
        <button children="set trap" />
      </Trap>
    );
    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(0);
  });

  it('should mount without activation then activate.', () => {
    class Tester extends React.Component {
      state = {
        trapActive: false
      };

      activateTrap = () => {
        this.setState({ trapActive: true });
      };

      render() {
        return (
          <div>
            <button id="trigger" onClick={this.activateTrap} />
            <Trap
              _createFocusTrap={mockCreateFocusTrap}
              focusTrapOptions={{ onDeactivate: noop }}
              active={this.state.trapActive}>
              <button children="set trap" />
            </Trap>
          </div>
        );
      }
    }

    const wrapper = mount(<Tester />);

    expect(mockCreateFocusTrap).toHaveBeenCalledTimes(1);
    expect(mockCreateFocusTrap).toHaveBeenCalledWith(
      wrapper.find('Trap').getDOMNode(),
      {
        onDeactivate: noop,
      }
    );
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(0);

    wrapper.find('#trigger').simulate('click');
    expect(mockFocusTrap.activate).toHaveBeenCalledTimes(1);
  });
});

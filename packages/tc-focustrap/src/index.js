import React from 'react';
import createFocusTrap from 'focus-trap';

const checkedProps = [
  'active',
  'paused',
  'tag',
  'focusTrapOptions',
  '_createFocusTrap'
];

function freshProps(props) {
  const newProps = {};

  for (const prop in props) {
    if (props.hasOwnProperty(prop) && checkedProps.indexOf(prop) === -1) {
      newProps[prop] = props[prop];
    }
  }

  return newProps;
}

class Trap extends React.Component {
  static defaultProps = {
    active: true,
    focusTrapOptions: {},
    tag: 'div',
    paused: false,
    _createFocusTrap: createFocusTrap
  }

  constructor(props) {
    super(props)

    if (typeof document !== 'undefined') {
      this.previouslyFocusedElement = document.activeElement;
    }
  }

  componentDidMount() {
    this.focustrap = this.props._createFocusTrap(
      this.node,
      this.props.focusTrapOptions
    );

    if (this.props.active) {
      this.focustrap.activate();
    }

    if (this.props.paused) {
      this.focustrap.pause();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.active && !this.props.active) {
      const { returnFocusOnDeactivate } = this.props.focusTrapOptions;
      const returnFocus = returnFocusOnDeactivate || false;
      const config = { returnFocus };

      this.focustrap.deactivate(config);
    }
    else if (!prevProps.active && this.props.active) {
      this.focustrap.activate();
    }

    if (prevProps.paused && !this.props.paused) {
      this.focustrap.unpause();
    }
    else if (!prevProps.paused && this.props.paused) {
      this.focustrap.pause();
    }
  }

  componentWillUnmount() {
    this.focustrap.deactivate();

    if (
      this.props.focusTrapOptions.returnFocusOnDeactivate !== false &&
      this.previouslyFocusedElement &&
      this.previouslyFocusedElement.focus
    ) {
      this.previouslyFocusedElement.focus();
    }
  }

  setNode = el => this.node = el;

  render() {
    return React.createElement(
      this.props.tag,
      freshProps({ ...this.props, ref: this.setNode }),
      this.props.children
    );
  }
}

const FocusTrap = React.forwardRef(({ children, ...props }, ref) => (
  <Trap {...props} ref={ref}>{children}</Trap>
));

export default FocusTrap;

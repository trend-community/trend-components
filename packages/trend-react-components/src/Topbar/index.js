import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import throttle from 'lodash/fp/throttle';

import { classNames } from './constants';

const TIMEOUT = 100;
const SCROLL_THRESHOLD = 24;

function defaultStyles() {
  return {
    backfaceVisibility: 'invisible',
    transform: 'translateY(0)',
    transition: 'transform 0.2s linear'
  };
}

function propGetter(defaultProps = {}) {
  return (props = {}) => ({
    ...props,
    className: cn(defaultProps.className, props.className)
  });
}

function getSectionProps(props = {}) {
  return {
    ...props,
    className: cn(classNames.SECTION, props.className, {
      [classNames.SECTION_START]: props.position === 'start',
      [classNames.SECTION_END]: props.position === 'end'
    })
  }
}

class Topbar extends Component {
  static propTypes = {
    children: PropTypes.func,
    className: PropTypes.string,
    compact: PropTypes.bool,
    fixed: PropTypes.bool,
    fixedScroll: PropTypes.bool,
    scrollTarget: PropTypes.object,
    tall: PropTypes.bool
  }

  static defaultProps = {
    scrollTarget: window
  }

  state = {
    height: 0,
    lastScrollPos: 0,
    top: 0
  }

  constructor(props) {
    super(props);
    this.el = createRef();
    this._scrollHandler = throttle(TIMEOUT)(this._scrollHandler.bind(this));
  }

  componentDidMount() {
    const { fixed, fixedScroll, scrollTarget } = this.props;

    this.setState({
      height: this.el.current && this.el.current.offsetHeight,
      scrollPos: document.documentElement.scrollTop
    });

    if (fixed || fixedScroll) {
      scrollTarget.addEventListener('scroll', this._scrollHandler);
    }
  }

  componentWillUnmount() {
    const { fixed, fixedScroll, scrollTarget } = this.props;

    if (fixed || fixedScroll) {
      scrollTarget.removeEventListener('scroll', this._scrollHandler);
    }
  }

  _scrollHandler = () => {
    const { fixed, fixedScroll } = this.props;

    if (fixed || fixedScroll) {
      const scrollPos = document.documentElement.scrollTop;

      this.setState({
        scrollPos,
        isScrolling: scrollPos > SCROLL_THRESHOLD
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.fixedScroll) {
      const prevScrollPos = prevState.scrollPos;
      const { height, scrollPos } = this.state;

      const pos = scrollPos < prevScrollPos
        ? 0
        : scrollPos <= height ? scrollPos * -1 : height * -1;

      window.requestAnimationFrame(() => {
        this.el.current.style.transform = `translateY(${pos}px)`;
      });
    }
  }

  _getElementProps = (props = {}) => {
     const {
      compact,
      fixed,
      fixedScroll,
      tall,
      scrollTarget,
      ...rest } = this.props;
    const { isScrolling } = this.state;

    return {
      ...rest,
      ...props,
      className: cn(
        classNames.BASE,
        this.props.className,
        props.className,
        {
          [classNames.COMPACT]: compact,
          [classNames.FIXED]: fixed || fixedScroll,
          [classNames.FIXED_SCROLLING]: isScrolling && !fixedScroll,
          [classNames.TALL]: tall && !isScrolling
        }
      ),
      style: { ...defaultStyles(), ...this.props.style, ...props.style, },
      ref: this.el
    };
  }

  getHelpers() {
    return {
      getElementProps: this._getElementProps,
      getInnerProps: propGetter({ className: classNames.INNER }),
      getSectionProps: getSectionProps,
      getIconProps: propGetter({ className: classNames.ICON }),
      getTitleProps: propGetter({ className: classNames.TITLE })
    }
  }

  render() {
    return this.props.children(this.getHelpers());
  }
}

export default Topbar;

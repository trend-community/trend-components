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
    top: 0
  }

  constructor(props) {
    super(props);
    this.el = createRef();

    // Track some state internally to avoid unecessary renders.
    this.lastScrollTop = 0;
    this.currentScrollTop =

    this._scrollHandler = throttle(TIMEOUT)(this._scrollHandler.bind(this));
  }

  componentDidMount() {
    const { fixed, fixedScroll, scrollTarget } = this.props;

    const { scrollTop } = document.documentElement;

    this.lastScrollTop = scrollTop;
    this.currentScrollTop = scrollTop;

    this.setState({
      height: this.el.current && this.el.current.offsetHeight
    });

    scrollTarget.addEventListener('scroll', this._scrollHandler);
  }

  componentWillUnmount() {
    const { fixed, fixedScroll, scrollTarget } = this.props;

    scrollTarget.removeEventListener('scroll', this._scrollHandler);
  }

  api() {
    return {
      getElementProps: this._getElementProps,
      getInnerProps: propGetter({ className: classNames.INNER }),
      getSectionProps: getSectionProps,
      getIconProps: propGetter({ className: classNames.ICON }),
      getTitleProps: propGetter({ className: classNames.TITLE })
    }
  }

  render() {
    return this.props.children(this.api());
  }

  _fixedScrolling() {
    const { height } = this.state;
    const scrollPos = this.currentScrollTop;
    const adjustedPos = scrollPos <= height ? scrollPos * -1 : height * -1;
    const realPos = scrollPos < this.lastScrollTop ? 0 : adjustedPos;

    window.requestAnimationFrame(() => {
      this.el.current.style.transform = `translateY(${realPos}px)`;
      this.lastScrollTop = scrollPos;
    });
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

  _scrollHandler = () => {
    const { fixed, fixedScroll } = this.props;

    if (!fixed && !fixedScroll) return;

    this.currentScrollTop = document.documentElement.scrollTop;

    const { height } = this.state;
    const isScrolling = this.currentScrollTop > SCROLL_THRESHOLD;
    const isStateScrolling = this.state.isScrolling;
    const isRealScrolling = isScrolling && !isStateScrolling;
    const isNoRealScrolling = !isScrolling && isStateScrolling;

    if (isRealScrolling || isNoRealScrolling) {
      this.setState({
        isScrolling: this.currentScrollTop > SCROLL_THRESHOLD
      });
    }

    fixedScroll && this._fixedScrolling();
  }
}

export default Topbar;

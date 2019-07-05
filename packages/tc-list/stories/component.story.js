import React from 'react';

import Exclamation from '../../tc-icon/src/Exclamation';
import Location from '../../tc-icon/src/Location';
import Question from '../../tc-icon/src/QuestionMark';
import Message from '../../tc-icon/src/Message';
import Profile from '../../tc-icon/src/Profile';
import '../styles.scss';

// Remove once package is completed.
import '../../tc-divider/styles.scss';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}


class ComponentStory extends React.Component {
  render() {
    const { rtl } = this.props;

    return <div className="tc-mhl" dir={rtl ? 'rtl' : undefined}>
      <div>
        <h3 className="tc-type-subtitle1">Single line</h3>
        <ul className="tc-List tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          {generate(<li className="tc-List-item">Single line item</li>)}
        </ul>
      </div>

       <div>
        <h3 className="tc-type-subtitle1">Extend list item</h3>
        <ul
          className="tc-List tc-List--extend tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          {generate(
            <li className="tc-List-item">
              <span className="tc-List-item-text">
                <span className="tc-List-item-text-primary">Primary Item</span>
                <span className="tc-List-item-text-ancillary">
                  Ancillary Item
                </span>
               </span>
            </li>
          )}
        </ul>
      </div>

      <div>
        <h3 className="tc-type-subtitle1">Leading media</h3>
        <ul className="tc-List tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          <li className="tc-List-item tc-Divider">
            <Location className="tc-List-item-media" size="1.5em" />
            item 1
          </li>
          <li className="tc-List-item">
            <Message className="tc-List-item-media" size="1.5em" />
            item 2
          </li>
          <li className="tc-Divider tc-Divider--indent" role="separator" />
          <li className="tc-List-item">
            <Question className="tc-List-item-media" size="1.5em" />
            item 3
          </li>
        </ul>
      </div>

      <div>
        <h3 className="tc-type-subtitle1">Meta Information</h3>
        <ul className="tc-List tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          {generate(
            <li className="tc-List-item">
              List Item
              <Question
                className="tc-List-item-meta tc-theme-text-hint-over-background" />
            </li>
          )}
        </ul>
      </div>

      <div>
        <h3 className="tc-type-subtitle1">Avatar List</h3>
        <nav
          className="tc-List tc-List--avatar tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          {generate(
            <a href="#" className="tc-List-item"
              onClick={ev => ev.preventDefault()}>
              <span className="tc-List-item-media">
                <Profile />
              </span>
              item 1
            </a>
          )}
        </nav>
      </div>

      <div>
        <h3 className="tc-type-subtitle1">Leading and meta icons</h3>
        <nav
          className="tc-List tc-List--avatar tc-border tc-border-concrete-100"
          style={{ maxWidth: '600px' }}>
          {generate(
            <a href="#" className="tc-List-item"
              onClick={ev => ev.preventDefault()}>
              <span className="tc-List-item-media">
                <Profile />
              </span>
              <span className="tc-List-item-text">item 1</span>
              <Question
                className="tc-List-item-meta tc-theme-text-hint-over-background" />
            </a>
          )}
        </nav>
      </div>
    </div>;
  }
}

ComponentStory.displayName = 'Component';

export default ComponentStory;

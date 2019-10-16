import React from 'react';

import Exclamation from '../../tc-icon/src/Exclamation';
import Location from '../../tc-icon/src/Location';
import Question from '../../tc-icon/src/QuestionMark';
import Message from '../../tc-icon/src/Message';
import Profile from '../../tc-icon/src/Profile';
import '../styles.scss';
import List, {
  useListState,
  ListItem,
  ListItemChild,
  ListDivider
} from '../src';

export const Standard = ({ rtl }) => {
  const list = useListState();

  return (
    <List
      {...list}
      className="tc-border tc-border-concrete-100"
      dir={rtl}>
      <ListItem {...list}>Single line item</ListItem>
      <ListItem {...list}>Single line item</ListItem>
      <ListItem {...list}>Single line item</ListItem>
    </List>
  );
};

export const StandardWithDisabled = ({ rtl = undefined }) => {
  const list = useListState();

  return (
    <List
      {...list}
      className="tc-border tc-border-concrete-100"
      dir={rtl}>
      <ListItem {...list}>Single line item</ListItem>
      <ListItem {...list} disabled>Disabled line item</ListItem>
      <ListItem {...list}>Single line item</ListItem>
    </List>
  );
}

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export const ExtendListItem = ({ rtl }) => {
  const list = useListState();

  return (
    <List
      {...list}
      extend
      className="tc-border tc-border-concrete-100"
      dir={rtl}>
      <ListItem {...list}>
        <ListItemChild>
          <ListItemChild variant="primary">Primary Item</ListItemChild>
          <ListItemChild variant="ancillary">Ancillary Item</ListItemChild>
        </ListItemChild>
      </ListItem>
      <ListItem {...list}>
        <ListItemChild>
          <ListItemChild variant="primary">Primary Item</ListItemChild>
          <ListItemChild variant="ancillary">Ancillary Item</ListItemChild>
        </ListItemChild>
      </ListItem>
      <ListItem {...list}>
        <ListItemChild>
          <ListItemChild variant="primary">Primary Item</ListItemChild>
          <ListItemChild variant="ancillary">Ancillary Item</ListItemChild>
        </ListItemChild>
      </ListItem>
    </List>
  );
};

export const LeadingIcon = () => {
  const list = useListState();

  return (
    <List
      {...list}
      className="tc-border tc-border-concrete-100"
      style={{ maxWidth: '600px' }}>
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Location size="1.5em" />
        </ListItemChild>
        item 1
      </ListItem>
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Message size="1.5em" />
        </ListItemChild>
        item 2
      </ListItem>
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Question size="1.5em" />
        </ListItemChild>
        item 3
      </ListItem>
    </List>
  );
}

export const Meta = () => {
  const list = useListState();

  return (
    <List
      {...list}
      className="tc-border tc-border-concrete-100"
      style={{ maxWidth: '600px' }}>
      {generate(
        <ListItem {...list}>
          List Item
          <ListItemChild variant="meta">
            <Question className="tc-theme-text-hint-over-background" />
          </ListItemChild>
        </ListItem>
      )}
    </List>
  );
}

export const Avatar = () => {
  const list = useListState();

  return (
    <List
      {...list}
      avatar
      className="tc-border tc-border-concrete-100"
      style={{ maxWidth: '600px' }}>
      {generate(
        <ListItem {...list}>
          <ListItemChild variant="media">
            <Profile />
          </ListItemChild>
          <ListItemChild>Profile</ListItemChild>
        </ListItem>
      )}
    </List>
  );
}

export const MediaAndMeta = () => {
  const list = useListState();

  return (
    <List
      {...list}
      avatar
      className="tc-border tc-border-concrete-100"
      style={{ maxWidth: '600px' }}>
      {generate(
        <ListItem {...list}>
          <ListItemChild variant="media">
            <Profile />
           </ListItemChild>
           <ListItemChild>Media and Meta icons</ListItemChild>
          <ListItemChild variant="meta">
            <Question />
          </ListItemChild>
        </ListItem>
      )}
    </List>
  );
}

export const ListDividers = ({ indent }) => {
  const list = useListState();

  return (
    <List
      {...list}
      className="tc-border tc-border-concrete-100"
      style={{ maxWidth: '600px' }}>
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Location size="1.5em" />
        </ListItemChild>
        item 1
      </ListItem>
      <ListDivider variant={indent ? 'indent' : undefined} />
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Message size="1.5em" />
        </ListItemChild>
        item 2
      </ListItem>
      <ListDivider variant={indent ? 'indent' : undefined} />
      <ListItem {...list}>
        <ListItemChild variant="media">
          <Question size="1.5em" />
        </ListItemChild>
        item 3
      </ListItem>
    </List>
  );
}

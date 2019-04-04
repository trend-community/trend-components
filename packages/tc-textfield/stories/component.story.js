import React from 'react';
import {
  boolean,
} from '@storybook/addon-knobs/react';

import Data from '../../tc-icon/src/Data';
import Edit from '../../tc-icon/src/Edit';
import '../styles.scss';
import TextField from '../src';

class ComponentStory extends React.Component {
  state = {
    value: 'foobar'
  }

  onChange = evt => {
    console.log('onChange: ', evt.target.value);
    this.setState({ value: evt.target.value });
  }

  render() {
    const rtl = boolean('rtl', false);
    const disabled = boolean('Disable Textfields', false);

    return <div
      className="tc-pal"
      dir={rtl ? 'rtl' : 'ltr'}>
      <h1>TextField</h1>
      <p>Input, edit, and select text.</p>

      <h2 className="tc-type-h3">Examples</h2>
      <hr />

      <h3 className="tc-type-subtitle1">Default</h3>
      <div className="tc-flex tc-flex-between">
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            helperText="Here is some helper text"
            validators={[
              { type: 'required', message: 'Field is required (test).' },
              { type: 'minLength', message: 'Field is a minimum of 3 charac.' }
            ]}>
            <TextField.Input
              onChange={this.onChange}
              value={this.state.value}
              required
              minLength={3}
            />
            <TextField.Label children="Label" />
          </TextField>
        </div>
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            helperText="Helper text"
            disabled={disabled}
            BeginningIcon={Data}>
            <TextField.Input minLength={3} />
            <TextField.Label children="Label" />
          </TextField>
        </div>
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            helperText="Helper text"
            BeginningIcon={props => <Data {...props} />}
            EndingIcon={props => <Edit {...props} />}
            validators={[{
              type: 'invalid',
              message: 'Field is required and needs a minimum of 3 characters.'
            }]}>
            <TextField.Input required minLength={3} />
            <TextField.Label children="Label" />
          </TextField>
        </div>
      </div>

      <h3 className="tc-type-subtitle1">Rim</h3>
      <div className="tc-flex tc-flex-between">
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            helperText="Rim textfield"
            variant="rim"
            validators={[{
              type: 'invalid',
              message: 'Field is required.'
            }]}>
            <TextField.Input
              defaultValue="foobar"
              required />
            <TextField.Label children="Standard" />
          </TextField>
        </div>
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            BeginningIcon={Data}
            helperText="Rim textfield"
            variant="rim"
            validators={[{
              type: 'invalid',
              message: 'Field is required and needs a minimum of 3 characters.'
            }]}>
            <TextField.Input />
            <TextField.Label children="Standard" />
          </TextField>
        </div>
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            EndingIcon={Edit}
            helperText="Rim textfield"
            variant="rim"
            validators={[{
              type: 'invalid',
              message: 'Field is required and needs a minimum of 3 characters.'
            }]}>
            <TextField.Input />
            <TextField.Label children="Standard" />
          </TextField>
        </div>
      </div>

      <h3 className="tc-type-subtitle1">Textarea</h3>
      <div className="tc-flex tc-flex-between">
        <div className="has-tc-TextField" style={{ width: '200px' }}>
          <TextField
            disabled={disabled}
            helperText="Textarea textfield"
            variant="textarea">
            <TextField.Input required />
            <TextField.Label children="Standard" />
          </TextField>
        </div>
      </div>

      <h3 className="tc-type-subtitle1">Stretch</h3>
      <div className="has-tc-TextField">
        <TextField
          disabled={disabled}
          helperText="Textarea textfield"
          stretch={true}>
          <TextField.Input required placeholder="Standard" />
          <TextField.Label
            className="tc-display-visually-hide"
            children="Standard" />
        </TextField>
      </div>

      <h3 className="tc-type-subtitle1">Textarea Stretch</h3>
      <div className="has-tc-TextField">
        <TextField
          disabled={disabled}
          helperText="Textarea textfield"
          stretch={true}
          variant="textarea">
          <TextField.Input required />
          <TextField.Label children="Standard" />
        </TextField>
      </div>
    </div>;
  }
}

ComponentStory.displayName = 'Component';

export default ComponentStory;

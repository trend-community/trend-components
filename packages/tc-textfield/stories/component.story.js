import React from 'react';

import Data from '../../tc-icon/src/Data';
import Edit from '../../tc-icon/src/Edit';

import '../styles.scss';

import TextField, {
  useTextFieldState,
  TextFieldLabel,
  TextFieldInput,
  TextFieldHelper
} from '../src';

function ComponentStory(props) {
  const { rtl, disabled } = props;
  const [value, setValue] = React.useState('foobar');
  const onChange = evt => {
    setValue(evt.target.value);
  };
  const defaultState = {
    isDisabled: disabled,
    helperMessage: 'Helper message'
  };

  const state1 = useTextFieldState({
    ...defaultState,
    value,
    validators: [
      { type: 'required', message: 'Field is required (test).' },
      { type: 'minLength', message: 'Field is a minimum of 3 charac.' }
    ]
  });
  const state2 = useTextFieldState({...defaultState});
  const state3 = useTextFieldState({
    ...defaultState,
    validators: [{
      type: 'invalid',
      message: 'Field is required and needs a minimum of 3 characters.'
    }]
  });
  const rim = useTextFieldState({
    ...defaultState,
    helperMessage: 'Rim textfield'
  });
  const rim2 = useTextFieldState({
    ...defaultState,
    helperMessage: 'Rim textfield'
  });
  const rim3 = useTextFieldState({
    ...defaultState,
    helperMessage: 'Rim textfield'
  });
  const textarea = useTextFieldState({ ...defaultState });
  const stretch = useTextFieldState({ ...defaultState });
  const textareaStretch = useTextFieldState({ ...defaultState });

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
        <TextField {...state1}>
          <TextFieldInput
            onChange={onChange}
            required
            minLength={3}
            {...state1}
          />
          <TextFieldLabel {...state1}>Label</TextFieldLabel>
        </TextField>
        <TextFieldHelper {...state1} />
      </div>

      <div className="has-tc-TextField" style={{ width: '200px' }}>
        <TextField
          BeginningIcon={Data}
          {...state2}>
          <TextFieldInput minLength={3} {...state2} />
          <TextFieldLabel {...state2}>Label</TextFieldLabel>
        </TextField>
        <TextFieldHelper {...state2} />
      </div>
      <div className="has-tc-TextField" style={{ width: '200px' }}>
        <TextField
          BeginningIcon={props => <Data {...props} />}
          EndingIcon={props => <Edit {...props} />}
          {...state3}>
          <TextFieldInput required minLength={3} {...state3} />
          <TextFieldLabel {...state3}>Label</TextFieldLabel>
        </TextField>
        <TextFieldHelper {...state3} />
      </div>
    </div>

    <h3 className="tc-type-subtitle1">Rim</h3>
    <div className="tc-flex tc-flex-between">
      <div className="has-tc-TextField" style={{ width: '200px' }}>
        <TextField {...rim} variant="rim">
          <TextFieldInput {...rim} required />
          <TextFieldLabel {...rim} children="Standard" />
        </TextField>
        <TextFieldHelper {...rim} />
      </div>
      <div className="has-tc-TextField" style={{ width: '200px' }}>
        <TextField
          {...rim2}
          BeginningIcon={Data}
          variant="rim">
         <TextFieldInput {...rim2} />
         <TextFieldLabel {...rim2} children="Standard" />
        </TextField>
        <TextFieldHelper {...rim2} />
      </div>
      <div className="has-tc-TextField" style={{ width: '200px' }}>
        <TextField
          {...rim3}
          EndingIcon={Edit}
          variant="rim">
          <TextFieldInput {...rim3} />
          <TextFieldLabel {...rim3} children="Standard" />
        </TextField>
        <TextFieldHelper {...rim3} />
      </div>
    </div>

    <h3 className="tc-type-subtitle1">Textarea</h3>
    <div className="tc-flex tc-flex-between">
     <div className="has-tc-TextField" style={{ width: '200px' }}>
       <TextField
         {...textarea}
         variant="textarea">
         <TextFieldInput as="textarea" {...textarea} required />
         <TextFieldLabel {...textarea} children="Standard" />
       </TextField>
       <TextFieldHelper {...textarea} />
     </div>
    </div>

    <h3 className="tc-type-subtitle1">Stretch</h3>
    <div className="has-tc-TextField">
     <TextField
       {...stretch}
       stretch={true}>
       <TextFieldInput {...stretch} required placeholder="Standard" />
       <TextFieldLabel
         {...stretch}
         className="tc-display-visually-hide"
         children="Standard" />
     </TextField>
     <TextFieldHelper {...stretch} />
    </div>

    <h3 className="tc-type-subtitle1">Textarea Stretch</h3>
    <div className="has-tc-TextField">
     <TextField
       {...textareaStretch}
       stretch={true}
       variant="textarea">
       <TextFieldInput as="textarea" {...textareaStretch} required />
       <TextFieldLabel {...textareaStretch} children="Standard" />
     </TextField>
     <TextFieldHelper {...textareaStretch} />
    </div>
  </div>;
}

ComponentStory.displayName = 'Component';

export default ComponentStory;

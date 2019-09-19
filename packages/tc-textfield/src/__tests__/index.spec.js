import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Data from '../../../tc-icon/src/Data';
import { cssClasses, validityMap } from '../constants';
import TextField, {
  useTextFieldState,
  TextFieldLabel,
  TextFieldInput,
  TextFieldHelper
} from '../';

const QUERY = 'label';

function Component(props = {}) {
  const { textfieldProps, inputProps, ...rest } = props;
  const state = useTextFieldState(rest);

  return (
    <>
      <TextField {...state} {...textfieldProps}>
        <TextFieldLabel {...state}>{QUERY}</TextFieldLabel>
        <TextFieldInput {...state} {...inputProps} />
      </TextField>
      <TextFieldHelper {...state} />
    </>
  );
}

describe('[tc-textfield]', () => {
  it('should render a complete component.', () => {
    const { getByLabelText } = render(<Component />);

    expect(getByLabelText(QUERY).parentNode).toMatchInlineSnapshot(`
      <div
        class="tc-TextField"
      >
        <label
          class="tc-TextField-label"
          for="tc-textfield-1"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-1"
          type="text"
          value=""
        />
      </div>
    `);
  });

  // Test icons.
  it('should render with a beginning icon.', () => {
    const { getByLabelText } = render(
      <Component textfieldProps={{ BeginningIcon: Data }} />
    );

    expect(getByLabelText(QUERY).parentNode).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--beginningIcon"
      >
        <label
          class="tc-TextField-label"
          for="tc-textfield-2"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-2"
          type="text"
          value=""
        />
        <svg
          aria-label="icon_Data"
          class="tc-TextField-icon"
          height="1.25em"
          role="img"
          style="display: inline-block; fill: currentColor; vertical-align: middle; height: auto; width: inherit;"
          viewBox="0 0 160 160"
          width="1.25em"
        >
          <title>
            Data
          </title>
          <path
            d="M156.147 155.792a12.9 12.9 0 01-9.5 4.208H13.344C5.986 160 0 153.667 0 145.882V52.106L48.86 2.694v-.341h.34L51.524 0h93.061c7.854 0 14.338 6.76 14.453 15.069l.947 130.6a14.462 14.462 0 01-3.838 10.123zM48.86 15.714l-33.321 33.7H48.86v-33.7zm101.285-.5a5.747 5.747 0 00-5.559-5.8h-86.83v28.233h80.059v9.412h-80.06v11.765H8.9v87.058a4.587 4.587 0 004.448 4.706h133.3a4.3 4.3 0 003.168-1.4 4.819 4.819 0 001.279-3.372zM22.173 112.941h115.641v9.412H22.173v-9.412zm0-37.647h115.641v9.412H22.173v-9.412z"
          />
        </svg>
      </div>
    `);
  });

  it('should render with a ending icon.', () => {
    const { getByLabelText } = render(
      <Component textfieldProps={{ EndingIcon: Data }} />
    );

    expect(getByLabelText(QUERY).parentNode).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--endingIcon"
      >
        <label
          class="tc-TextField-label"
          for="tc-textfield-3"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-3"
          type="text"
          value=""
        />
        <svg
          aria-label="icon_Data"
          class="tc-TextField-icon"
          height="1.25em"
          role="img"
          style="display: inline-block; fill: currentColor; vertical-align: middle; height: auto; width: inherit;"
          viewBox="0 0 160 160"
          width="1.25em"
        >
          <title>
            Data
          </title>
          <path
            d="M156.147 155.792a12.9 12.9 0 01-9.5 4.208H13.344C5.986 160 0 153.667 0 145.882V52.106L48.86 2.694v-.341h.34L51.524 0h93.061c7.854 0 14.338 6.76 14.453 15.069l.947 130.6a14.462 14.462 0 01-3.838 10.123zM48.86 15.714l-33.321 33.7H48.86v-33.7zm101.285-.5a5.747 5.747 0 00-5.559-5.8h-86.83v28.233h80.059v9.412h-80.06v11.765H8.9v87.058a4.587 4.587 0 004.448 4.706h133.3a4.3 4.3 0 003.168-1.4 4.819 4.819 0 001.279-3.372zM22.173 112.941h115.641v9.412H22.173v-9.412zm0-37.647h115.641v9.412H22.173v-9.412z"
          />
        </svg>
      </div>
    `);
  });

  it('should render both beginning and ending icons.', () => {
    const { getByLabelText } = render(
      <Component textfieldProps={{ BeginningIcon: Data, EndingIcon: Data }} />
    );

    expect(getByLabelText(QUERY).parentNode).toMatchInlineSnapshot(`
      <div
        class="tc-TextField tc-TextField--beginningIcon tc-TextField--endingIcon"
      >
        <label
          class="tc-TextField-label"
          for="tc-textfield-4"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-4"
          type="text"
          value=""
        />
        <svg
          aria-label="icon_Data"
          class="tc-TextField-icon"
          height="1.25em"
          role="img"
          style="display: inline-block; fill: currentColor; vertical-align: middle; height: auto; width: inherit;"
          viewBox="0 0 160 160"
          width="1.25em"
        >
          <title>
            Data
          </title>
          <path
            d="M156.147 155.792a12.9 12.9 0 01-9.5 4.208H13.344C5.986 160 0 153.667 0 145.882V52.106L48.86 2.694v-.341h.34L51.524 0h93.061c7.854 0 14.338 6.76 14.453 15.069l.947 130.6a14.462 14.462 0 01-3.838 10.123zM48.86 15.714l-33.321 33.7H48.86v-33.7zm101.285-.5a5.747 5.747 0 00-5.559-5.8h-86.83v28.233h80.059v9.412h-80.06v11.765H8.9v87.058a4.587 4.587 0 004.448 4.706h133.3a4.3 4.3 0 003.168-1.4 4.819 4.819 0 001.279-3.372zM22.173 112.941h115.641v9.412H22.173v-9.412zm0-37.647h115.641v9.412H22.173v-9.412z"
          />
        </svg>
        <svg
          aria-label="icon_Data"
          class="tc-TextField-icon"
          height="1.25em"
          role="img"
          style="display: inline-block; fill: currentColor; vertical-align: middle; height: auto; width: inherit;"
          viewBox="0 0 160 160"
          width="1.25em"
        >
          <title>
            Data
          </title>
          <path
            d="M156.147 155.792a12.9 12.9 0 01-9.5 4.208H13.344C5.986 160 0 153.667 0 145.882V52.106L48.86 2.694v-.341h.34L51.524 0h93.061c7.854 0 14.338 6.76 14.453 15.069l.947 130.6a14.462 14.462 0 01-3.838 10.123zM48.86 15.714l-33.321 33.7H48.86v-33.7zm101.285-.5a5.747 5.747 0 00-5.559-5.8h-86.83v28.233h80.059v9.412h-80.06v11.765H8.9v87.058a4.587 4.587 0 004.448 4.706h133.3a4.3 4.3 0 003.168-1.4 4.819 4.819 0 001.279-3.372zM22.173 112.941h115.641v9.412H22.173v-9.412zm0-37.647h115.641v9.412H22.173v-9.412z"
          />
        </svg>
      </div>
    `);
  });

  // Test visual state.
  it('should disable the TextField correctly.', () => {
    const { getByLabelText } = render(<Component isDisabled={true} />);

    expect(getByLabelText(QUERY).parentNode).toMatchInlineSnapshot(`
      <div
        class="tc-TextField is-disabled"
      >
        <label
          class="tc-TextField-label"
          for="tc-textfield-5"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          disabled=""
          id="tc-textfield-5"
          type="text"
          value=""
        />
      </div>
    `);
  });

  it('should adjust the state on focus.', () => {
    const PLACEHOLDER = 'text';
    const { getByPlaceholderText, container } = render(
      <Component inputProps={{ placeholder: PLACEHOLDER }} />
    );
    const element = getByPlaceholderText(PLACEHOLDER);
    element.focus();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tc-TextField is-focused"
      >
        <label
          class="tc-TextField-label is-active"
          for="tc-textfield-6"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-6"
          placeholder="text"
          type="text"
          value=""
        />
      </div>
    `);
  });

  it('should adjust the state on blur.', () => {
    const PLACEHOLDER = 'text';
    const { getByPlaceholderText, container } = render(
      <Component inputProps={{ placeholder: PLACEHOLDER }} />
    );
    const element = getByPlaceholderText(PLACEHOLDER);
    fireEvent.blur(element, { target: { value: 'foobar' } });

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="tc-TextField"
      >
        <label
          class="tc-TextField-label is-active"
          for="tc-textfield-7"
        >
          label
        </label>
        <input
          aria-invalid="false"
          class="tc-TextField-input"
          id="tc-textfield-7"
          placeholder="text"
          type="text"
          value=""
        />
      </div>
    `);
  });

  // Test Helper text.
  it('should display a helper text element.', () => {
    const { container } = render(<Component helperMessage="Help me." />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="tc-TextField"
        >
          <label
            class="tc-TextField-label"
            for="tc-textfield-8"
          >
            label
          </label>
          <input
            aria-describedby="tc-textfield-8-helper-text"
            aria-invalid="false"
            class="tc-TextField-input"
            id="tc-textfield-8"
            type="text"
            value=""
          />
        </div>
        <div
          class="tc-TextField-helper"
          id="tc-textfield-8-helper-text"
          value=""
        >
          <span>
            Help me.
          </span>
        </div>
      </div>
    `);
  });

  // Validations
  it('should handle validation when input is required.', () => {
    const PLACEHOLDER = 'input';
    const { getByPlaceholderText, container } = render(
      <Component inputProps={{ required: true, placeholder: PLACEHOLDER }} />
    );
    const element = getByPlaceholderText(PLACEHOLDER);

    fireEvent.change(element, { target: { value: '' } });
    fireEvent.blur(element);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="tc-TextField is-invalid"
        >
          <label
            class="tc-TextField-label"
            for="tc-textfield-9"
          >
            label
          </label>
          <input
            aria-controls="tc-textfield-9-helper-text"
            aria-describedby="tc-textfield-9-helper-text"
            aria-invalid="true"
            class="tc-TextField-input"
            id="tc-textfield-9"
            placeholder="input"
            required=""
            type="text"
            value=""
          />
        </div>
        <div
          class="tc-TextField-helper"
          id="tc-textfield-9-helper-text"
          value=""
        >
          <span>
            This field is required.
          </span>
        </div>
      </div>
    `);
  });

  it('should handle custom validation messages.', () => {
    const PLACEHOLDER = 'input';
    const { getByPlaceholderText, container } = render(
      <Component
        validators={[
          {
            type: 'invalid',
            message: 'Required field.'
          }
        ]}
        inputProps={{ required: true, placeholder: PLACEHOLDER }}
      />
    );
    const element = getByPlaceholderText(PLACEHOLDER);

    fireEvent.blur(element);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="tc-TextField is-invalid"
        >
          <label
            class="tc-TextField-label"
            for="tc-textfield-10"
          >
            label
          </label>
          <input
            aria-controls="tc-textfield-10-helper-text"
            aria-describedby="tc-textfield-10-helper-text"
            aria-invalid="true"
            class="tc-TextField-input"
            id="tc-textfield-10"
            placeholder="input"
            required=""
            type="text"
            value=""
          />
        </div>
        <div
          class="tc-TextField-helper"
          id="tc-textfield-10-helper-text"
          value=""
        >
          <span>
            Required field.
          </span>
        </div>
      </div>
    `);
  });
});

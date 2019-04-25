import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';

import { validityMap } from './constants';

const isInput = ({ nodeName: n }) => n === 'INPUT' || n === 'TEXTAREA';

export const validations = {
  required: target => {
    const error = {
      type: 'required',
      message: 'This field is required.'
    };

    return target.validity.valueMissing ? error : null;
  },
  minLength: target => {
    const testValue = target.getAttribute('minLength');
    const error = {
      type: 'minLength',
      message: `Mininum number of characters (${testValue}) has not been met.`
    };

    return isInput(target) && target.validity.tooShort ? error : null;
  },
  maxLength: target => {
    const testValue = target.getAttribute('maxLength');
    const error = {
      type: 'maxLength',
      message: `Maximum number (${testValue}) of characters exceeded.`
    };

    return isInput(target) && target.validity.tooLong ? error : null;
  },
  pattern: target => {
    const error = {
      type: 'pattern',
      message: 'Incorrect format for inputted value.'
    };

    return isInput(target) && target.validity.patternMissing ? error : null;
  }
};

export default function validator(target, validators) {
  const { validity } = target;
  let errors = [];

  if (!validity.valid) {
    const _validators = validators || Object.keys(validations);

    _validators.forEach(item => {
      if (item.type) {
        const { type } = item;

        if (type === 'invalid' || validity[validityMap[type]] ) {
          errors.push(item);
        }
      }
      else if (isFunction(item)) {
        errors.push(item(target))
      }
      else if (isString(item) && validations[item]) {
        errors.push(validations[item](target));
      }
      else {
        console.warn(`Unrecognized validation being used: ${item}`);
      }
    });
  }

  return errors.filter(Boolean);
}

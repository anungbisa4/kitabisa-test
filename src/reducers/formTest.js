import { INPUT_FIRST_VALUE,INPUT_SECOND_VALUE, INPUT_THIRD_VALUE, PRESS_BUTTON_TOP, SELECTED_OPTION } from '../actions/index';

const INITIAL_STATE = {firstValue: '', secondValue:'', thirdValue: '', selected: '', result: '', result2: ''};

const FormTest = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INPUT_FIRST_VALUE:
      return {...state, firstValue: action.payload}
    case INPUT_SECOND_VALUE:
      return {...state, secondValue: action.payload}
    case INPUT_THIRD_VALUE:
      return {...state, thirdValue: action.payload}
    case SELECTED_OPTION:
      return {...state, selected: action.payload}
    case PRESS_BUTTON_TOP:
      return {
        ...state,
        result: result(action.n1, action.n2, action.n3, action.operator),
        result2: result(action.n1, action.n2, action.n3, action.operator)
      }
    default:
      return state
  }
}


const result = (n1,n2,n3,operator) => {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  n3 = parseInt(n3);
  if(operator === 'sum') {
    return n1 + n2;
  } else if (operator === 'multiply') {
    return n1 * n2
  } else if (operator === 'primeNumber') {
    let array = [], i, j, primes = [];
    const index = n3 * 100;
    for (i = 2; i <= index; ++i) {
          if(primes.length > n3 - 1) {
            break;
          } else {
            primes.push(i);
            for (j = i << 1; j <= index; j += i) {
                array[j] = true;
            }
          }
    }
    return primes.toString();
  } else {
    let array = [0, 1];
    const index = n3 - 1;
    for (let i = 2; i <= index; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    return array.toString();
  }
}

export default FormTest;


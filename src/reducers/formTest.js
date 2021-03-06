import { INPUT_FIRST_VALUE,INPUT_SECOND_VALUE, INPUT_THIRD_VALUE, PRESS_BUTTON_TOP, SELECTED_OPTION } from '../actions/index';

const INITIAL_STATE = {firstValue: '', secondValue:'', thirdValue: '', selected: '', result: '', result2: ''};

const FormTest = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch(action.type) {
    case INPUT_FIRST_VALUE:
      console.log("reducer first value")
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

  let array = [2];
  const index = n3 * 20;
  for ( let i = 3; i < index; i+=2 ) {
    console.log(array.length)
    if(array.length > n3 - 1) {
      break;
    } else {
      if ( primes(i) ) {
        array.push(i);
      }
    }
  }

  return array.toString();
  
  } else {
    let array = [];
    if(n3 === 0) {
      array.push("0 cannot find fibonacci number")
    } else {
      for(let i = 1; i <= n3; i++) {
        array.push(fibRekursif(i))
      }
    }
    return array.toString();
  }
}

function primes(j) {
  for ( var i = 2; i < j; i++ ) {
      if ( j % i === 0 ) {
          return false;
      }
  }
  return true;
}

function fibRekursif(n) {
  let result = 0;
  if ( n === 1) {
    return result
  } 
  else if ( n === 2) {
    return result += 1
  } else {
    result = fibRekursif(n - 2) + fibRekursif( n - 1 )
    return result
  }
}
export default FormTest;


export const INPUT_FIRST_VALUE = 'INPUT_FIRST_VALUE';
export const INPUT_SECOND_VALUE = 'INPUT_SECOND_VALUE';
export const INPUT_THIRD_VALUE = 'INPUT_THIRD_VALUE';
export const PRESS_BUTTON_TOP = 'PRESS_BUTTON_TOP';
export const SELECTED_OPTION = 'PRESS_BUTTON_DOWN';

export function inputFirstValue(payload) {
  console.log("VALUE 1: ", payload);
  return {
    type: INPUT_FIRST_VALUE,
    payload
  }
}
export function inputSecondValue(payload) {
  console.log("VALUE 2: ", payload);
  return {
    type: INPUT_SECOND_VALUE,
    payload
  }
}
export function inputThirdValue(payload) {
  console.log("VALUE 3: ", payload);
  return {
    type: INPUT_THIRD_VALUE,
    payload
  }
}
export function selectedOption(payload) {
  console.log("VALUE OPTION: ", payload);
  return {
    type: SELECTED_OPTION,
    payload
  }
}
export function pressButtonTop(n1, n2, n3, operator) {
  console.log("ANSWER TOP: ", n1, n2, operator);
  return {
    type: PRESS_BUTTON_TOP,
    n1, n2, n3, operator
  }
}

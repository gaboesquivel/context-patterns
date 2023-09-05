import { CountAction, CountActionKind, CountState } from "./reducer.type";

// Our reducer function that uses a switch statement to handle our actions
export function counterReducer(state: CountState, action: CountAction) {
  console.log('reducer', state, action)
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
}
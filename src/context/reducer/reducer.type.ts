// An enum with all the types of actions to use in our reducer
export enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

// An interface for our actions
export interface CountAction {
  type: CountActionKind;
  payload: number;
}

// An interface for our state
export interface CountState {
  count: number;
}
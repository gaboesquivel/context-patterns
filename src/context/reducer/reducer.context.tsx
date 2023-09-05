

import { useReducer } from 'react';
import { createContextHook } from '../context.lib'
import { counterReducer } from './reducer.lib';

const useReducerContextFn = () => {
  const [counterState, dispatchCounterAction] = useReducer(counterReducer, { count: 0 });
  return {counterState, dispatchCounterAction}
}

export const [useReducerContext, ReducerContextProvider] = createContextHook(
  useReducerContextFn,
  'You must wrap your application with <ReducerContextProvider /> in order to useReducerContext().',
)

import { CountActionKind, useReducerContext } from "../../context/reducer"


export function ReducerDemo(){
  const {counterState, dispatchCounterAction} = useReducerContext()

  return <div>
    <h1>Reducer Context Demo</h1>
    <button onClick={() => dispatchCounterAction({ type: CountActionKind.INCREASE, payload: 5 })}>Increase by 5</button>
    <button onClick={() => dispatchCounterAction({ type: CountActionKind.DECREASE, payload: 5 })}>Decrease by 5</button>
    <pre>{JSON.stringify(counterState)}</pre>
  </div>
}
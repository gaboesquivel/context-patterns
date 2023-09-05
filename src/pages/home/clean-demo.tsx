import { useCleanContext } from "../../context/clean"

export function CleanDemo(){
  const {cleanState, setCleanState,randomFruit } = useCleanContext()
  
  const setLunchOptions = () => setCleanState({lunch: ['pizza', 'pasta', 'salad']})
  
  return <div>
    <h1>Clean Context Demo</h1>
    <button onClick={() => randomFruit()}>toggle fruit</button>
    <button onClick={setLunchOptions}>set lunch options</button>
    <pre>{JSON.stringify(cleanState)}</pre>
  </div>
}
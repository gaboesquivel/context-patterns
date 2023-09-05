import { useGlobalContext } from "../../context/global/global.context"

export function GlobalDemo(){
  const {globalState, setGlobalState} = useGlobalContext()
  
  const toggleWizard = () => setGlobalState(state => ({...state, showWizard: !state.showWizard }))
  
  const toggleSidebar = () => setGlobalState(state => ({...state, showSidebar: !state.showSidebar }))
  
  return <div>
    <h1>Global Context Demo</h1>
    <button onClick={toggleWizard}>toggle wizard</button>
    <button onClick={toggleSidebar}>toggle sidebar</button>
    <pre>{JSON.stringify(globalState)}</pre>
  </div>
}
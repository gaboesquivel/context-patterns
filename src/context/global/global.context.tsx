import React from 'react'
import { useSetState } from '../../hooks/use-set-state'
import { deepMerge } from '../../lib/deep-merge'
import { GlobalContextProviderProps, GlobalContextType, GlobalState } from './global.type'

export const initialState = { 
  addresses: [] as string[],
  showSidebar: false,
  showWizard: false
}

const initialContextState = {
  globalState: initialState, 
  // dummy for definition, gets overriten with the funcitonal one instantiation
  setGlobalState: () => {} 
}

export const GlobalContext = React.createContext<GlobalContextType>(initialContextState)

export function GlobalContextProvider({ children, ...value }: GlobalContextProviderProps) {
  // we take initial value from props and deep merge it with initial state
  const [globalState, setGlobalState] = useSetState<GlobalState>(deepMerge(initialState, value as GlobalState))

  return <GlobalContext.Provider value={{globalState, setGlobalState}}>{children}</GlobalContext.Provider>
}

export function useGlobalContext() {
  return React.useContext(GlobalContext)
}

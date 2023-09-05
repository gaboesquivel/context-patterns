import { initialState } from "./global.context"

export interface GlobalContextProviderProps extends Partial<GlobalState> {
  children: React.ReactNode
}

// useSetState can be used with a function or partial state
export type GlobalStateSetter = (patch: Partial<GlobalState> | ((prevState: GlobalState) => Partial<GlobalState>)) => void

// infer type
export type GlobalState = typeof initialState

export type GlobalContextType = {
  globalState: GlobalState
  setGlobalState: GlobalStateSetter
}


import { createContextHook } from '../context.lib'
import { getRandomFruit } from './fruits.lib'
import { useSetState } from '../../hooks/use-set-state'

const initalCleanState ={
  fruit: getRandomFruit(),
  lunch: [] as string[]
}

const useCleanContextFn = () => {
  const [cleanState, setCleanState] = useSetState(initalCleanState)

  const randomFruit = () => setCleanState({fruit: getRandomFruit()})

  return { cleanState, setCleanState, randomFruit }
}

export const [useCleanContext, CleanContextProvider] = createContextHook(
  useCleanContextFn,
  'You must wrap your application with <CleanContextProvider /> in order to useCleanContext().',
)




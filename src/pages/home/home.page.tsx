
import { CleanDemo } from "./clean-demo"
import { GlobalDemo } from "./global-demo"
import { ReducerDemo } from "./reducer-demo"

export function HomePage(){
  return <div>
      <GlobalDemo/>
      <CleanDemo/>
      <ReducerDemo/>
  </div>
}
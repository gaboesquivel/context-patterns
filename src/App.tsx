import { CleanContextProvider } from "./context/clean"
import { GlobalContextProvider } from "./context/global/global.context"
import { ReducerContextProvider } from "./context/reducer"
import { HomePage } from "./pages/home/home.page"

function App() {
  return (
    <GlobalContextProvider addresses={['myaddress']}>
      <CleanContextProvider>
        <ReducerContextProvider>
          <HomePage/>
        </ReducerContextProvider>
      </CleanContextProvider>
    </GlobalContextProvider>
  )
}

export default App

import { createContext, useContext, useReducer } from "react"
import rootReducer, { initialState } from "../../redux/rootReducer"

const ReduxContext = createContext()

export const useRedux = () => {
  return useContext(ReduxContext)
}

function ReduxProvider({children}) {
  const [state, dispatch] = useReducer(rootReducer, initialState)

  return (
    <ReduxContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </ReduxContext.Provider>
  )
}

export default ReduxProvider;
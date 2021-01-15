import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import ReduxProvider from "./hoc/ReduxProvider/ReduxProvider";
import GamePage from "./pages/GamePage/GamePage";
import StartPage from "./pages/StartPage/StartPage";
function App() {

  return (
    <div className="App">
      <ReduxProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/game" exact component={GamePage} />
          </Switch>
        </Layout>
      </ReduxProvider>
    </div>
  )
}

export default App;

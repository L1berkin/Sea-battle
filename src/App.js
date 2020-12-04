import { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import GamePage from "./Pages/GamePage/GamePage";
import StartPage from "./Pages/StartPage/StartPage";

class App extends Component {
  state = {
    start: false
  }

  render() {
    return (
      <div>
        <Layout>
          <StartPage />
          <GamePage />
        </Layout>
      </div>
    )
  }
}

export default App;

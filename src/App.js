import { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import GamePage from "./Pages/GamePage/GamePage";
import StartPage from "./Pages/StartPage/StartPage";

class App extends Component {
  state = {
    start: true
  }

  startClickHandler = () => {
    this.setState({
      start: true
    })
  }

  render() {
    return (
      <div>
        <Layout>
          {this.state.start ? <GamePage /> : <StartPage startTap={this.startClickHandler} />}
        </Layout>
      </div>
    )
  }
}

export default App;

import { Component } from "react";
import Layout from "./hoc/Layout/Layout";
import GamePage from "./Pages/GamePage/GamePage";
import StartPage from "./Pages/StartPage/StartPage";

class App extends Component {
  state = {
    start: false,
    namePlayer1: 'игрок 1',
    namePlayer2: 'игрок 2'
  }

  startClickHandler = () => {
    this.setState({
      start: true
    })
  }

  namePlayerHandler = event => {
    if (event.target.id === 'player1') {
      const namePlayer1 = event.target.value
      this.setState({namePlayer1})
    } else {
      const namePlayer2 = event.target.value
      this.setState({namePlayer2})
    }
  }

  onReturnBack = () => {
    this.setState({
      start: false
    })
  }

  render() {
    return (
      <div>
        <Layout>
          {
          this.state.start 
            ? <GamePage
              onReturnBack={this.onReturnBack}
              namePlayer1={this.state.namePlayer1}
              namePlayer2={this.state.namePlayer2}
            />
            : <StartPage
              startTap={this.startClickHandler}
              namePlayerHandler={this.namePlayerHandler}
              namePlayer1={this.state.namePlayer1}
              namePlayer2={this.state.namePlayer2}
            />
          }
        </Layout>
      </div>
    )
  }
}

export default App;

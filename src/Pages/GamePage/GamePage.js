import { Component } from 'react';
import { checkCellsNearby, toogleShip } from '../../helpers/helper.functions';
import InfoTitle from '../../Components/InfoTitle/InfoTitle';
import PlayerFields from '../../Components/PlayerFields/PlayerFields';
import Toolbar from '../../Components/Toolbar/Toolbar';
import classes from './GamePage.module.css'

class GamePage extends Component {
  state = {
    readyGame: false,
    hideShips: {
      hideShipsPlayer1: false,
      hideShipsPlayer2: false
    },
    activePlayer1: true,
    sizeShip: 0,
    player1: [],
    player2: []
  }

  componentDidMount() {
    const fieldSize = 10 * 10
    const player1 = this.state.player1.slice()
    const player2 = this.state.player2.slice()

    for (let i = 0; i < fieldSize; i++) {
      const cell = {
        sizeShip: 0,
        haveShip: false,
        id: i
      }
      player1.push(cell)
      player2.push(cell)
    }

    this.setState({
      player1,
      player2
    })
  }

  startGameHandler = () => {
    const newHideShipsState = {...this.state.hideShips}

    newHideShipsState.hideShipsPlayer1 = true
    // После первого нажатия
    this.setState({
      readyGame: true,
      hideShips: newHideShipsState
    })
  }

  changeShip = event => {
    this.setState({
      sizeShip: +event.target.value
    })
  }

  onClickHandler = cell => {
    const player1 = this.state.player1.slice()
    const newCell = player1[cell.id]
    console.log(cell)
    if (!this.state.readyGame) {
      if (checkCellsNearby(this.state, cell)) {
        toogleShip(this.state, player1, newCell)
      }

      this.setState({player1})
    } else {

      console.log('Игра началась')
    }
  }

  render() {
    return (
      <div className={classes.GamePage}>
        <h2 className={classes.title}>Sea battle</h2>
        <Toolbar
          startGame={this.state.readyGame}
          onReadyBtn={this.startGameHandler}
          onChangeShip={this.changeShip}
          onReturnBack={this.props.onReturnBack}
        />
        <InfoTitle 
          namePlayer1={this.props.namePlayer1}
          namePlayer2={this.props.namePlayer2}
        />
        <PlayerFields 
          player1={this.state.player1}
          player2={this.state.player2}
          hideShips={this.state.hideShips}
          move={this.state.activePlayer1}
          onClick={this.onClickHandler}
        />
      </div>
    )
  }
}

export default GamePage;
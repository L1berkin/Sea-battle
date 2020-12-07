import { Component } from 'react';
import { checkCellsNearby, toogleShip, shot } from '../../helpers/helper.functions';
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
    block: false,
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
        hit: false,
        miss: false,
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

    
    if (this.state.activePlayer1) {
      newHideShipsState.hideShipsPlayer1 = true
      this.setState({
        activePlayer1: false,
        hideShips: newHideShipsState
      })
    } else {
      newHideShipsState.hideShipsPlayer2 = true
      this.setState({
        readyGame: true,
        activePlayer1: true,
        hideShips: newHideShipsState
      })
    }
    
  }

  changeShip = event => {
    this.setState({
      sizeShip: +event.target.value
    })
  }

  onClickHandler = cell => {
    if (!this.state.block) {
      const state = {...this.state}
      const player = this.state.activePlayer1 ? this.state.player1.slice() : this.state.player2.slice()
      const newCell = {...player[cell.id]}
      if (!this.state.readyGame) {
        if (checkCellsNearby(state, newCell)) {
          toogleShip(state, player, newCell)
        }

        this.state.activePlayer1
        ? this.setState({
          player1: player
        })
        : this.setState({
          player2: player
        })
      } else {
        player[newCell.id] = shot(newCell)

        this.state.activePlayer1
        ? this.setState({
          player1: player,
          block: true
        })
        : this.setState({
          player2: player,
          block: true
        })

        setTimeout(() => {
          this.setState({
            activePlayer1: !this.state.activePlayer1,
            block: false
          })
        }, 1000)
      }
    }
  }

  render() {
    console.log(this.state)
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
          startGame={this.state.readyGame}
          activePlayer1={this.state.activePlayer1}
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
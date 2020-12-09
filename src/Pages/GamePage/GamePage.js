import { Component } from 'react';
import { checkCellsNearby, toogleShip, shot, checkWin } from '../../helpers/helper.functions';
import InfoTitle from '../../Components/InfoTitle/InfoTitle';
import PlayerFields from '../../Components/PlayerFields/PlayerFields';
import Toolbar from '../../Components/Toolbar/Toolbar';
import WinnerPoster from '../../Components/WinnerPoster/WinnerPoster';
import classes from './GamePage.module.css'

class GamePage extends Component {
  state = {
    readyGame: false,
    win: 0,
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
      if (this.state.activePlayer1) {
        const resultSize1 = this.state.player1.filter(cell => cell.sizeShip === 1)
        const resultSize2 = this.state.player1.filter(cell => cell.sizeShip === 2)
        const resultSize3 = this.state.player1.filter(cell => cell.sizeShip === 3)
        const resultSize4 = this.state.player1.filter(cell => cell.sizeShip === 4)
  
        if (resultSize1.length === 4 && resultSize2.length === 3 && resultSize3.length === 2 && resultSize4.length === 1) {
          newHideShipsState.hideShipsPlayer1 = true
          this.setState({
            activePlayer1: false,
            hideShips: newHideShipsState
          })
        } else {
          alert('На поле должно быть больше кораблей!')
        }
      }
    } else {
      const resultSize1 = this.state.player2.filter(cell => cell.sizeShip === 1)
      const resultSize2 = this.state.player2.filter(cell => cell.sizeShip === 2)
      const resultSize3 = this.state.player2.filter(cell => cell.sizeShip === 3)
      const resultSize4 = this.state.player2.filter(cell => cell.sizeShip === 4)

      if (resultSize1.length === 4 && resultSize2.length === 3 && resultSize3.length === 2 && resultSize4.length === 1) {
        newHideShipsState.hideShipsPlayer2 = true
        this.setState({
          readyGame: true,
          activePlayer1: true,
          hideShips: newHideShipsState
        })
      } else {
        alert('На поле должно быть больше кораблей!')
      }
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
        if (checkCellsNearby(state, newCell, player)) {
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
          const win = checkWin(this.state)
          this.setState({
            win,
            activePlayer1: !this.state.activePlayer1,
            block: false
          })
        }, 800)
      }
    }
  }

  render() {
    return (
      <div className={classes.GamePage}>
        <h2 className={classes.title}>Морской бой</h2>
        {!this.state.readyGame
        ? <Toolbar
          startGame={this.state.readyGame}
          onReadyBtn={this.startGameHandler}
          onChangeShip={this.changeShip}
          onReturnBack={this.props.onReturnBack}
        />
        : null
        }
        <InfoTitle
          startGame={this.state.readyGame}
          activePlayer1={this.state.activePlayer1}
          namePlayer1={this.props.namePlayer1}
          namePlayer2={this.props.namePlayer2}
          winner={this.state.win}
          />
        {
          !this.state.win
          ? <PlayerFields 
            player1={this.state.player1}
            player2={this.state.player2}
            hideShips={this.state.hideShips}
            move={this.state.activePlayer1}
            onClick={this.onClickHandler}
          />
          : <WinnerPoster 
            winner={this.state.win}
            namePlayer1={this.props.namePlayer1}
            namePlayer2={this.props.namePlayer2}
          />
        }
      </div>
    )
  }
}

export default GamePage;
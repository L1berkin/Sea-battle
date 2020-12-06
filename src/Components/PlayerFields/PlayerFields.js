import Player1Field from './PlayerField1/Player1Field'
import Player2Field from './PlayerField2/Player2Field'
import classes from './PlayerFields.module.css'

const PlayerFields = props => {
  return (
    <div className={classes}>
      {
        props.move
        ? <Player1Field
          hideShips={props.hideShips}
          player1={props.player1}
          onClick={props.onClick}
        />
        : <Player2Field
          player2={props.player2}
        />
      }
    </div>
  )
}

export default PlayerFields;
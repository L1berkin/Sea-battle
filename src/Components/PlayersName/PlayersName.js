import classes from './PlayersName.module.css'

const PlayersName = props => {
  return (
    <div className={classes.PlayersName}>
      <input
        id="player1"
        className={classes.fieldName}
        value={props.namePlayer1}
        onChange={props.namePlayerHandler}
        placeholder="Введите имя игрока 1"
      />
      <input
        id="player2"
        className={classes.fieldName}
        value={props.namePlayer2}
        onChange={props.namePlayerHandler}
        placeholder="Введите имя игрока 2"
      />
    </div>
  )
}

export default PlayersName;
import classes from '../PlayerFields.module.css'

const Player1Field = props => {
  return (
    <div className={classes.field}>
      {
        props.player1.map(cell => {
          const cls = [
            classes.BoardCell
          ]
          cell.haveShip && !props.hideShips.hideShipsPlayer1 ? cls.push(classes.board) : cls.push()

          return (
            <div
            className={cls.join(' ')}
            key={cell.id}
            onClick={props.onClick.bind(this, cell)}
            />
          )
        })
      }
    </div>
  )
}

export default Player1Field;
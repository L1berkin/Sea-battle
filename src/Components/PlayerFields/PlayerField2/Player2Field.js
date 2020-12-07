import classes from '../PlayerFields.module.css'

const Player2Field = props => {
  return (
    <div className={classes.field}>
      {
        props.player2.map(cell => {
          const cls = [
            classes.BoardCell
          ]
          cell.haveShip && !props.hideShips.hideShipsPlayer2 ? cls.push(classes.board) : cls.push()
          cell.hit ? cls.push(classes.hit) : cls.push()
          cell.miss ? cls.push(classes.miss) : cls.push()

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

export default Player2Field;
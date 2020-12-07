import classes from './WinnerPoster.module.css'

const WinnerPoster = props => {
  return (
    <div className={classes.WinnerPoster}>
      {props.winner === 1
      ? <h1 className={classes.title}>игрок {props.namePlayer1} выиграл!</h1>
      : <h1 className={classes.title}>игрок {props.namePlayer2} выиграл!</h1>
      }
    </div>
  )
}

export default WinnerPoster;
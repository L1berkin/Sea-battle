import classes from './InfoTitle.module.css'

const InfoTitle = props => {
  const text = !props.startGame
    ? `${props.activePlayer1 ? props.namePlayer1 : props.namePlayer2} разместите корабли на поле`
    : `${props.activePlayer1 ? props.namePlayer1 : props.namePlayer2} ходит`
  return (
    <p className={classes.InfoTitle}>
      {text}
    </p>
  )
}

export default InfoTitle;
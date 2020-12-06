import classes from './InfoTitle.module.css'

const InfoTitle = props => {
  const text = `${props.namePlayer1} разместите корабли на поле.`
  return (
    <p className={classes.InfoTitle}>
      {text}
    </p>
  )
}

export default InfoTitle;
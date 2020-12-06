import classes from './InfoTitle.module.css'

const InfoTitle = props => {
  const text = 'Начните игру'
  return (
    <p className={classes.InfoTitle}>
      {text}
    </p>
  )
}

export default InfoTitle;
import classes from './StartPage.module.css'

const StartPage = props => {
  return (
    <div className={classes.StartPage}>
      <h1 className={classes.title}>Sea battle</h1>
      <button
        className={classes.btn}
        onClick={props.startTap}
      >start</button>
    </div>
  )
}

export default StartPage;
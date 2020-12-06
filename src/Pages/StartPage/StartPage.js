import PlayersName from '../../Components/PlayersName/PlayersName';
import classes from './StartPage.module.css'

const StartPage = props => {
  return (
    <div className={classes.StartPage}>
      <h1 className={classes.title}>Sea battle</h1>

      <PlayersName 
        namePlayer1={props.namePlayer1}
        namePlayer2={props.namePlayer2}
        namePlayerHandler={props.namePlayerHandler}
      />
      
      <button
        className={classes.btn}
        onClick={props.startTap}
        >start</button>
    </div>
  )
}

export default StartPage;
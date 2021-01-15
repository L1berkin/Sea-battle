import { useRedux } from '../../hoc/ReduxProvider/ReduxProvider'
import classes from './StartPage.module.scss'
import Title from '../../components/Title/Title'
import Input from '../../components/Input/Input'
import { aChangeNamePlayer1, aChangeNamePlayer2 } from '../../redux/actionCreators'
import { Link } from 'react-router-dom'

function StartPage() {
  const {state, dispatch} = useRedux()

  const changeNamePlayer1 = e => dispatch(aChangeNamePlayer1(e.target.value))
  const changeNamePlayer2 = e => dispatch(aChangeNamePlayer2(e.target.value))

  return (
    <main className={classes.StartPage}>
      <Title text="Морской бой" size="6em" />
      <div className={classes.inputBox}>
        <Input 
          label="Введите имя игрока"
          onChange={changeNamePlayer1}
          value={state.player1.name}
        />
        <Input 
          label="Введите имя игрока"
          onChange={changeNamePlayer2}
          value={state.player2.name}
        />
      </div>
      <Link to="/game" className={classes.btn}>Старт</Link>
    </main>
  )
}

export default StartPage;
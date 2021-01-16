import { useState } from "react";
import { checkQuantitiesShips } from "../../helpers/helpers.function";
import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { aStartGame, changeCourse } from "../../redux/actionCreators";
import SizeShips from "../SizeShips/SizeShips";
import Title from "../Title/Title";
import classes from "./Sidebar.module.scss";

function Sidebar({close}) {
  const {state, dispatch} = useRedux()
  const [counter, setCounter] = useState(0)
  const activePlayer = state.player1Move ? 'player1' : 'player2'
  const cls = [
    classes.Sidebar,
    close ? classes.close : ''
  ]
  const nextMove = () => {
    if (counter === 0) {
      if (checkQuantitiesShips(state, activePlayer, 'all')) {
        setCounter(counter + 1)
        dispatch(changeCourse())
      }
    } else {
      if (checkQuantitiesShips(state, activePlayer, 'all')) {
        dispatch(changeCourse())
        dispatch(aStartGame())
      }
    }
  }

  return (
    <section className={cls.join(' ')}>
      <Title text="Параметры" weight="bold" />
      <SizeShips />
      <button
        className={classes.btn}
        onClick={nextMove}
      >Готово</button>
    </section>
  )
}

export default Sidebar;
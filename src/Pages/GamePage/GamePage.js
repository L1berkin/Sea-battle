import { useEffect } from "react";
import ComandTitle from "../../components/ComandTitle/ComandTitle";
import GameField from "../../components/GameField/GameField";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import { generateGameField } from "../../helpers/helpers.function";
import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { initialGameField1, initialGameField2 } from "../../redux/actionCreators";
import classes from "./GamePage.module.scss";

function GamePage() {
  const {state, dispatch} = useRedux()
  const movePlayer = state.player1Move ? 'player1' : 'player2'

  useEffect(() => {
    dispatch(initialGameField1(generateGameField(100)))
    dispatch(initialGameField2(generateGameField(100)))
  }, [dispatch])

  return (
    <main className={classes.GamePage}>
      <Sidebar />
      <Title text="Морско бой" size="4em" />
      <ComandTitle />
      <GameField player={movePlayer} />
    </main>
  )
}

export default GamePage;
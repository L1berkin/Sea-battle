import { useEffect } from "react";
import ComandTitle from "../../components/ComandTitle/ComandTitle";
import Finish from "../../components/Finish/Finish";
import GameField from "../../components/GameField/GameField";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import { generateGameField } from "../../helpers/helpers.function";
import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { initialGameField1, initialGameField2 } from "../../redux/actionCreators";
import classes from "./GamePage.module.scss";

function GamePage() {
  const {state, dispatch} = useRedux()
  let filedPlayer
  if (state.gameStarted) {
    filedPlayer = state.player1Move ? 'player2' : 'player1'
  } else {
    filedPlayer = state.player1Move ? 'player1' : 'player2'
  }
  // win
  const movePlayer = state.player1Move ? state.player1.name : state.player2.name

  useEffect(() => {
    dispatch(initialGameField1(generateGameField(100)))
    dispatch(initialGameField2(generateGameField(100)))
  }, [dispatch])

  return (
    <main className={classes.GamePage}>
      <Sidebar close={state.gameStarted} />
      <Title text="Морско бой" size="4em" />
      <ComandTitle player={movePlayer} started={state.gameStarted} end={state.gameEnd} />
      {
        state.gameEnd
          ? <Finish player={movePlayer} />
          : <GameField player={filedPlayer} />
      }
    </main>
  )
}

export default GamePage;
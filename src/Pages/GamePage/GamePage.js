import ComandTitle from "../../components/ComandTitle/ComandTitle";
import GameField from "../../components/GameField/GameField";
import Sidebar from "../../components/Sidebar/Sidebar";
import Title from "../../components/Title/Title";
import classes from "./GamePage.module.scss";

function GamePage() {
  return (
    <main className={classes.GamePage}>
      <Sidebar />
      <Title text="Морско бой" size="4em" />
      <ComandTitle />
      <GameField />
    </main>
  )
}

export default GamePage;
import SizeShips from "../SizeShips/SizeShips";
import Title from "../Title/Title";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <section className={classes.Sidebar}>
      <Title text="Параметры" weight="bold" />
      <SizeShips />
      <button
        className={classes.btn}
      >Готово</button>
    </section>
  )
}

export default Sidebar;
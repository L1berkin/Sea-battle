import Title from "../Title/Title";
import classes from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <section className={classes.Sidebar}>
      <Title text="Параметры" />
    </section>
  )
}

export default Sidebar;
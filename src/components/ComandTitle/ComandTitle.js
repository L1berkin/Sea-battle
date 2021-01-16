import classes from "./ComandTitle.module.scss";

function ComandTitle({player, started, end}) {
  return (
    <section className={classes.ComandTitle}>
      {
        end 
          ? `Победа`
          : started
            ? `Ходит ${player}`
            : `${player} разместите свои корабли`
      }
    </section>
  )
}

export default ComandTitle;
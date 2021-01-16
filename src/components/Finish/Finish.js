import classes from './Finish.module.scss'

function Finish({player}) {
  return (
    <section className={classes.Finish}>
      выиграл {player}
    </section>
  )
}

export default Finish;
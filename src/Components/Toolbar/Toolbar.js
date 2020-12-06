import classes from './Toolbar.module.css'

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      <span
        className={classes.back}
        onClick={props.onReturnBack}
      >&#8656;</span>
      <h3 className={classes.title}>Toolbar</h3>

      <ul className={classes.shipsList}>
        <li>
          <input
            type="radio"
            name="ships"
            id="ship1"
            value="1"
            onInput={props.onChangeShip}
          />
          <label htmlFor="ship1">Однопалубный x4</label>
        </li>
        <li>
          <input
            type="radio"
            name="ships"
            id="ship2"
            value="2"
            onInput={props.onChangeShip}
          />
          <label htmlFor="ship2">Двухпалубный x3</label>
        </li>
        <li>
          <input
            type="radio"
            name="ships"
            id="ship3"
            value="3"
            onInput={props.onChangeShip}
          />
          <label htmlFor="ship3">Трехпалубный x2</label>
        </li>
        <li>
          <input
            type="radio"
            name="ships"
            id="ship4"
            value="4"
            onInput={props.onChangeShip}
          />
          <label htmlFor="ship4">Крейсер x1</label>
        </li>
      </ul>

      {!props.startGame
        ? <button
        className={classes.btn}
        onClick={props.onReadyBtn}
      >Готово</button>
      : null
      }
    </div>
  )
}

export default Toolbar;
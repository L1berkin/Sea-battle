import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { changeCourse, hit, miss } from "../../redux/actionCreators";
import classes from "./GameField.module.scss";

function GameField({player}) {
  const {state, dispatch} = useRedux()

  const cellClickHandler = e => {
    const id = e.target.id
    if (!state[player].cells[id].hit && !state[player].cells[id].miss) {
      if (!state.blockForShot) {
        if (state[player].cells[id].haveShip) {
          dispatch(hit(id, player))
        } else {
          dispatch(miss(id, player))
        }
        setTimeout(() => {
          dispatch(changeCourse())
        }, 1000);
      }
    }
  }
  return (
    <section className={classes.GameField}>
      {
        state[player].cells.map((_, index) => {
          const cls = [
            classes.cell,
            state[player].cells[index].hit ? classes.hit : null,
            state[player].cells[index].miss ? classes.miss : null
          ]

          return (
            <div
              className={cls.join(' ')}
              id={index} 
              key={index.toString() + Math.random()}
              onClick={cellClickHandler}
            />
          )
        })
      }
    </section>
  )
}

export default GameField;
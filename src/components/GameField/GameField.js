import { checkCellsNearby, checkQuantitiesShips, reShotCheck, winCheck } from "../../helpers/helpers.function";
import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { aAddShip, aRemoveShip, changeCourse, hit, miss, aWinGame } from "../../redux/actionCreators";
import classes from "./GameField.module.scss";

function GameField({player}) {
  const {state, dispatch} = useRedux()

  const cellClickHandler = e => {
    const id = e.target.id
    if (+state.sizeShip === 0) {
      // Боевые действия (второй этап)
      if (reShotCheck(state, player, id)) {
        if (!state.blockForShot) {
          if (state[player].cells[id].haveShip) {
            dispatch(hit(id, player))
          } else {
            dispatch(miss(id, player))
          }
          setTimeout(() => {
            if (winCheck(state, player)) {
              dispatch(changeCourse())
            } else {
              dispatch(aWinGame())
            }
          }, 1000);
          
        }
      }
    } else {
      // Размещение кораблей (первый этап)
      if (state[player].cells[id].haveShip) {
        dispatch(aRemoveShip(id, player))
      } else {
        if (checkQuantitiesShips(state, player, +state.sizeShip)) {
          if (checkCellsNearby(state, player, +id)) {
            dispatch(aAddShip(id, player, state.sizeShip))
          }
        }
      }
    }
  }

  return (
    <section className={classes.GameField}>
      {
        state[player].cells.map((_, index) => {
          const cls = [
            classes.cell,
            state[player].cells[index].haveShip && !state.gameStarted ? classes.haveShip : null,
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
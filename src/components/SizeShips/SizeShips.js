import { useRedux } from "../../hoc/ReduxProvider/ReduxProvider";
import { aChangeSizeShip } from "../../redux/actionCreators";
import RadioBtn from "../RadioBtn/RadioBtn";
import classes from "./SizeShips.module.scss";

function SizeShips() {
  const name = 'sizeShipsSettings'
  const {state, dispatch} = useRedux()

  const changeSizeShip = e => {
    dispatch(aChangeSizeShip(e.target.id))
  }

  const radioBtns = [
    {name: name, label: 'Авианосец 4x', id: 4, onChange: changeSizeShip},
    {name: name, label: 'Крейсер 3x', id: 3, onChange: changeSizeShip},
    {name: name, label: 'Корабль 2x', id: 2, onChange: changeSizeShip},
    {name: name, label: 'Лодка 1x', id: 1, onChange: changeSizeShip},
  ]

  return (
    <div className={classes.SizeShips}>
      {
        radioBtns.map((item, index) => {
          const checked = item.id === +state.sizeShip
          return (
            <RadioBtn 
              name={item.name} 
              label={item.label} 
              key={item.id + item.label} 
              id={item.id} 
              onChange={item.onChange} 
              checked={checked} 
            />
          )
        })
      }
    </div>
  )
}

export default SizeShips;
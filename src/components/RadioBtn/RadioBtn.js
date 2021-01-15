import classes from './RadioBtn.module.scss'

function RadioBtn(props) {
  const cls = [
    classes.label
  ]
  if (props.checked) {
    cls.push(classes.active)
  }
  return (
    <label htmlFor={props.id} className={cls.join(' ')}>
      <input 
        type="radio" 
        name={props.name} 
        id={props.id} 
        className={classes.input} 
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  )
}

export default RadioBtn;
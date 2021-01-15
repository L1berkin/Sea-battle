import classes from './Input.module.scss'

function Input(props) {
  const id = Date.now() + Math.random()
  return (
    <div className={classes.Input}>
      {
        props.label
          ? <label htmlFor={id}>
              {props.label}
            </label>
          : null
      }
      <input
        type="text"
        id={id}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
      />
    </div>
  )
}

export default Input;
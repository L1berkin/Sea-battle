import classes from './Input.module.scss'

function Input(props) {
  const id = Date.now()
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
      />
    </div>
  )
}

export default Input;
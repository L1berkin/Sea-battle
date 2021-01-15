function Title(props) {
  const titleStyle = {
    fontSize: props.size ? props.size : '1.5em',
    fontWeight: props.weight ? props.weight : 900,
    color: props.color ? props.color : '#ccc',
    textAlign: 'center'
  }
  return (
    <h1 
      style={titleStyle}
    >{props.text}</h1>
  )
}

export default Title;
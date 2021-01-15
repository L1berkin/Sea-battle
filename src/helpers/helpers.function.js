export const generateGameField = (size) => {
  const field = []
  for (let i = 0; i < size; i++) {
    field.push({
      haveShip: false,
      hit: false,
      miss: false,
      id: i
    })
  }
  return field
}

export const reShotCheck = (state, player, id) => {
  if (!state[player].cells[id].hit && !state[player].cells[id].miss) {
    return true
  }
  
  return false
}
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
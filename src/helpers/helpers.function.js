// генерирует поле при первом рендере
export const generateGameField = (size) => {
  const field = []
  for (let i = 0; i < size; i++) {
    field.push({
      haveShip: false,
      sizeShip: 0,
      hit: false,
      miss: false,
      id: i
    })
  }
  return field
}
// Проверяет на повторный выстрл
export const reShotCheck = (state, player, id) => {
  if (!state[player].cells[id].hit && !state[player].cells[id].miss) {
    return true
  }
  
  return false
}
// Проверяет количество кораблей на поле
export const checkQuantitiesShips = (state, player, size) => {
  let requiredNumber
  switch (size) {
    case 1: requiredNumber = 4
      break
    case 2: requiredNumber = 3
      break
    case 3: requiredNumber = 2
      break
    case 4: requiredNumber = 1
      break
    default: requiredNumber = 0
  }
  if (typeof size === 'number') {
    const quantitiesShips = state[player].cells.filter((item) => item.haveShip && item.sizeShip === size)
    return quantitiesShips.length < requiredNumber
  } else {
    const allShips = state[player].cells.filter((item) => item.haveShip === true)
    return allShips.length === 10
  }
}

const calcCellsNearby = (id) => {
  const cellsNearby = [
    id + 10,
    id - 10
  ]

  if (+id.toString().split('').pop() !== 9) {
    cellsNearby.push(id + 1)
    cellsNearby.push(id + 11)
    cellsNearby.push(id - 9)
  }

  if (+id.toString().split('').pop() !== 0) {
    cellsNearby.push(id - 1)
    cellsNearby.push(id - 11)
    cellsNearby.push(id + 9)
  }

  return cellsNearby
}
// Проверка, заняты ли рядом ячейки
export const checkCellsNearby = (state, player, id) => {
  const cellsNearby = calcCellsNearby(id)
  const cellsNearbyWithShip = cellsNearby.filter(itemId => state[player].cells[itemId]
    ? state[player].cells[itemId].haveShip === true
    : null
  )
  return cellsNearbyWithShip.length === 0
}
// Проверка, все ли корабли уничтожены
export const winCheck = (state, player) => {
  const result = state[player].cells.filter(cell => cell.haveShip && !cell.hit)
  return result.length !== 0
}

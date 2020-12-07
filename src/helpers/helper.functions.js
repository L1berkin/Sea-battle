// Добавить / Убрать ячейку корабля
export function toogleShip(state, player, cell) {
  switch (state.sizeShip) {
    case 1
      : console.log('однопалубный')
      cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 1
      break
    case 2
      : console.log('двухпалубный')
      cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 2
      break
    case 3
      : console.log('трехпалубный')
      cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 3
      break
    case 4
      : console.log('четырехпалубный')
      cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 4
      break
    default: alert('Выберите размер корабля, чтобы добавить корабль на поле.')
  }
  player[cell.id] = cell
}
// Проверка на соседние ячейки + количество кораблей 
export function checkCellsNearby(state, cell) {
  const id = cell.id
  const notValidIds = calcCellsNearby(id).filter( id => id < 0 ? null : id < 99 ? state.player1[id].haveShip : null)
  if (!notValidIds.length) {
    let res
    switch (state.sizeShip) {
      case 1: res = cell.haveShip ? checkQuantityShips(state, 2) : checkQuantityShips(state, 1)
      break
      case 2: res = cell.haveShip ? checkQuantityShips(state, 3) : checkQuantityShips(state, 2)
      break
      case 3: res = cell.haveShip ? checkQuantityShips(state, 4) : checkQuantityShips(state, 3)
      break
      case 4: res = cell.haveShip ? checkQuantityShips(state, 5) : checkQuantityShips(state, 4)
      break
      default: res = true
      break
    }

    if (!res) {
      alert('Извините, количество кораблей каждого типа ограничено. Пожалуйста ознакомьтесь с правилами игры.')
    }

    return res
  } else {
    alert('К сожалению, здесь нельзя разместить корабль. Пожалуйста ознакомьтесь с правилами игры.')
  }
  

  return false
}
// Подсчет количества соседних ячеек, где нельяз расположить корабль
function calcCellsNearby(id) {
  const arrayId = id.toString().split('')
  
  const notValidIds = [
    id + 10,
    id - 10,
  ]

  if (+arrayId[arrayId.length - 1] !== 9) {
    notValidIds.push(id + 11)
    notValidIds.push(id - 9)
    notValidIds.push(id + 1)
  }
  if (+arrayId[arrayId.length - 1] !== 0) {
    notValidIds.push(id + 9)
    notValidIds.push(id - 1)
    notValidIds.push(id - 11)
  }
  return notValidIds
}
// Проверка на количество кораблей
function checkQuantityShips(state, size) {
  const quantity = state.player1.filter( cell => cell.sizeShip === size)
  let res
  switch (size) {
    case 1:
      res = quantity.length < 4 ? true : false
    break
    case 2:
      res = quantity.length < 3 ? true : false
    break
    case 3:
      res = quantity.length < 2 ? true : false
    break
    case 4:
      res = quantity.length < 1 ? true : false
    break
    case 5:
      res = true
    break
    default: res = false
    break
  }

  return res
}

export function shot(cell) {
  if (cell.haveShip) {
    cell.hit = true
  } else {
    cell.miss = true
  }
  return cell
}
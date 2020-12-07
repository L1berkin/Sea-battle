export function toogleShip(state, player, cell) {
  switch (state.sizeShip) {
    case 1
      : cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 1
      break
    case 2
      : cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 2
      break
    case 3
      : cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 3
      break
    case 4
      : cell.haveShip = !player[cell.id].haveShip
      cell.sizeShip = cell.sizeShip ? 0 : 4
      break
    default: alert('Выберите размер корабля, чтобы добавить корабль на поле.')
  }
  player[cell.id] = cell
}

export function checkCellsNearby(state, cell, player) {
  const id = cell.id
  const notValidIds = calcCellsNearby(id).filter( id => id < 0 ? null : id < 99 ? player[id].haveShip : null)
  if (!notValidIds.length) {
    let res
    switch (state.sizeShip) {
      case 1: res = cell.haveShip ? checkQuantityShips(2, player) : checkQuantityShips(1, player)
      break
      case 2: res = cell.haveShip ? checkQuantityShips(3, player) : checkQuantityShips(2, player)
      break
      case 3: res = cell.haveShip ? checkQuantityShips(4, player) : checkQuantityShips(3, player)
      break
      case 4: res = cell.haveShip ? checkQuantityShips(5, player) : checkQuantityShips(4, player)
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

function checkQuantityShips(size, player) {
  const quantity = player.filter( cell => cell.sizeShip === size)
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

export function checkWin(state) {
  let res
  if (state.activePlayer1) {
    const hits = state.player1.filter(cell => cell.hit)
    const haveShip = state.player1.filter(cell => cell.haveShip)
    res = hits.length === haveShip.length ? 1 : 0
  } else {
    const hits = state.player2.filter(cell => cell.hit === true)
    const haveShip = state.player2.filter(cell => cell.haveShip === true)
    res = hits.length === haveShip.length ? 2 : 0
  }
  return res
}
import { 
  CHANGE_COURSE,
  CHANGE_PLAYER_1_NAME, 
  CHANGE_PLAYER_2_NAME, 
  HIT, 
  INITIAL_GAME_FIELD_1,
  INITIAL_GAME_FIELD_2,
  MISS,
  CHANGE_SIZE_SHIP
} from './actionTypes'

export const initialGameField1 = (cells) => {
  return {
    type: INITIAL_GAME_FIELD_1,
    payload: cells
  }
}

export const initialGameField2 = (cells) => {
  return {
    type: INITIAL_GAME_FIELD_2,
    payload: cells
  }
}

export const aChangeNamePlayer1 = (value) => {
  return {
    type: CHANGE_PLAYER_1_NAME,
    payload: value
  }
}

export const aChangeNamePlayer2 = (value) => {
  return {
    type: CHANGE_PLAYER_2_NAME,
    payload: value
  }
}

export const hit = (id, player) => {
  return {
    type: HIT,
    id,
    player
  }
}

export const miss = (id, player) => {
  return {
    type: MISS,
    id,
    player
  }
}

export const changeCourse = () => {
  return {
    type: CHANGE_COURSE
  }
}

export const aChangeSizeShip = (id) => {
  return {
    type: CHANGE_SIZE_SHIP,
    payload: id
  }
}

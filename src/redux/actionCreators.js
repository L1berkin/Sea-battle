import { CHANGE_PLAYER_1_NAME, CHANGE_PLAYER_2_NAME} from './actionTypes'

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
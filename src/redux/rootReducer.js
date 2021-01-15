import { CHANGE_PLAYER_1_NAME, CHANGE_PLAYER_2_NAME } from "./actionTypes";

export const initialState = {
  StartPage: true,
  player1: {
    name: ''
  },
  player2: {
    name: ''
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER_1_NAME: {
      return {
        ...state,
        player1: {
          name: action.payload
        }
      }
    }
    case CHANGE_PLAYER_2_NAME: {
      return {
        ...state,
        player2: {
          name: action.payload
        }
      }
    }
    default: return state
  }
}

export default rootReducer;
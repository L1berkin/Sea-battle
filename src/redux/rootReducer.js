import { 
  CHANGE_COURSE,
  CHANGE_PLAYER_1_NAME, 
  CHANGE_PLAYER_2_NAME, 
  HIT, 
  INITIAL_GAME_FIELD_1,
  INITIAL_GAME_FIELD_2,
  MISS,
  CHANGE_SIZE_SHIP,
  ADD_SHIP_CELL,
  REMOVE_SHIP_CELL
} from "./actionTypes";

export const initialState = {
  StartPage: true,
  player1Move: true,
  sizeShip: '1',
  blockForShot: false,
  player1: {
    name: '',
    cells: []
  },
  player2: {
    name: '',
    cells: []
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_GAME_FIELD_1: {
      return{
        ...state,
        player1: {
          ...state.player1,
          cells: action.payload
        }
      }
    }
    case INITIAL_GAME_FIELD_2: {
      return{
        ...state,
        player2: {
          ...state.player2,
          cells: action.payload
        }
      }
    }
    case HIT: {
      const newState = {
        ...state,
        blockForShot: true
      }
      newState[action.player].cells.forEach((cell, index) => +action.id === index ? cell.hit = true : null)
      return newState
    }
    case MISS: {
      const newState = {
        ...state,
        blockForShot: true
      }
      newState[action.player].cells.forEach((cell, index) => +action.id === index ? cell.miss = true : null)
      return newState
    }
    case CHANGE_COURSE: {
      return {
        ...state,
        player1Move: !state.player1Move,
        blockForShot: false
      }
    }
    case CHANGE_SIZE_SHIP: {
      return {
        ...state,
        sizeShip: action.payload
      }
    }
    case ADD_SHIP_CELL: {
      const newState = {
        ...state
      }
      newState[action.player].cells.forEach((cell, index) => +action.id === index ? cell.haveShip = true : null)
      return newState
    }
    case REMOVE_SHIP_CELL: {
      const newState = {
        ...state
      }
      newState[action.player].cells.forEach((cell, index) => +action.id === index ? cell.haveShip = false : null)
      return newState
    }
    case CHANGE_PLAYER_1_NAME: {
      return {
        ...state,
        player1: {
          ...state.player1,
          name: action.payload
        }
      }
    }
    case CHANGE_PLAYER_2_NAME: {
      return {
        ...state,
        player2: {
          ...state.player2,
          name: action.payload
        }
      }
    }
    default: return state
  }
}

export default rootReducer;
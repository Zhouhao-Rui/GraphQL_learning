import { CHANGE_NUM } from "./constants";
const initialState = {
  num: 10
}

const numReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NUM:
      return { ...state, num: action.num }
    default:
      return state
  }
}

export { numReducer }
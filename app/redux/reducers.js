import assign from "lodash.assign"
import { combineReducers } from "redux"

function user(state = {}, action) {
  switch (action.type) {
    case "USER_NEW":
      return state
    case "USER_LOGIN":
      return assign({}, state, {
        email: action.payload.user.email
      })
    default: return state
  }
}

const reducers = combineReducers({
  user
})

export default reducers
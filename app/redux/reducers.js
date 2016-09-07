import assign from "lodash.assign"
import { combineReducers } from "redux"

function user(state = {
  email: "",
  username: "",
  id: ""
}, action) {
  if (!action.payload || !action.payload.user) {
    return state
  }

  const { email, username, id } = action.payload.user

  switch (action.type) {
    case "USER_NEW":
      return assign({}, state, {
        email,
        username,
        id
      })
    case "USER_LOGIN":
      return assign({}, state, {
        email,
        username,
        id
      })
    case "USER_AUTH":
      return assign({}, state, {
        email,
        username,
        id
      })
    default: return state
  }
}

const reducers = combineReducers({
  user
})

export default reducers
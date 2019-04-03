// TYPES

export const UPDATE_AUTH = 'UPDATE_AUTH'

// ACTIONS

export const updateAuth = (status, info) => ({
  type: UPDATE_AUTH,
  payload: {status, info}
})

// REDUCERS
const initialUserState = {
  status: false,
  info: {}
}

export function authReducer(userState = initialUserState, action) {
  if (action.type === UPDATE_AUTH) {
    return action.payload
  }
  return userState
}

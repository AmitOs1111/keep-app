import { userService } from '../services/localService/user.service.local.js'

export const SET_USER = 'SET_USER'
export const SET_USERS = 'SET_USERS'
export const SET_IS_CONNECTED = 'SET_IS_CONNECTED'

const initialState = {
  user: userService.getLoggedinUser(),
  users: [],
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user }
    case SET_USERS:
      return { ...state, users: action.users }

    default:
      return state
  }
}

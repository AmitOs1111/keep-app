// import { userService } from '../services/user.service.js'
import { userService } from '../services/localService/user.service.local.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { store } from './store.js'
import { SET_USER, SET_USERS, SET_IS_CONNECTED } from './user.reducer.js'

export function loadUsers(filterBY) {
  // store.dispatch({ type: SET_LOADING, isLoading: true })

  return userService
    .query(filterBY)
    .then((users) => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
      store.dispatch({ type: SET_USERS, users })
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot load users')
      throw err
    })
    .finally(() => {
      // store.dispatch({ type: SET_LOADING, isLoading: false })
    })
}

export function checkLogin(credentials) {
  return userService
    .login(credentials)
    .then((user) => {
      console.log('user:', user)
      store.dispatch({ type: SET_USER, user })
      // store.dispatch({ type: SET_IS_CONNECTED, isConnected: true })
      showSuccessMsg(`WELCOME , ${user.fullname}`)
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot login user')
      throw err
    })
}

export function checkSignIn(credentials) {
  return userService
    .signup(credentials)
    .then((user) => {
      store.dispatch({ type: SET_USER, user })
      showSuccessMsg(`WELCOME , ${user.fullname}`)
    })
    .catch((err) => {
      console.error('Oops:', err)
      showErrorMsg('Cannot signup user')
      throw err
    })
}

export function logout() {
  return userService.logout().then(() => {
    store.dispatch({ type: SET_USER, user: null })
    showSuccessMsg(`Bey Bey`)
  })
}

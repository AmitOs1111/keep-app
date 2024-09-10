import { httpService } from './http.service.js'

const STORAGE_KEY = 'user'
const STORAGE_KEY_LOGGEDIN = 'loggedinUser'

const BASE_URL = 'auth/user/'

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getEmptyCredentials,
}

// window.us = userService
function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN))
}

function login(credentials) {
  return httpService
    .put(BASE_URL + 'login/', credentials)
    .then((user) => {
      console.log('user:', user)
      if (user)
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
      return user
    })
    .catch((err) => {
      console.log('No such user', err)
    })
}

function signup(credentials) {
  console.log('credentials from frontend user service', credentials)
  return httpService.post(BASE_URL + 'signup/', credentials).then((user) => {
    console.log('user:', user)
    if (user) sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user))
    return user
  })
}

function logout() {
  return httpService.post(BASE_URL + 'logout/').then(() => {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null)
    return Promise.resolve()
  })
}

function getEmptyCredentials() {
  return { mail: '', password: '', fullname: '' }
}

import Axios from 'axios'

// const BASE_URL =
// process.env.NODE_ENV === 'production' ? 'http://localhost:4040/api/' : '/api/'

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : 'http://localhost:4040/api/'

var axios = Axios.create({
  withCredentials: true,
})

export const httpService = {
  query(endpoint, data) {
    console.log('endpoint, data:', endpoint, data)
    return ajax(endpoint, 'GET', data)
  },
  get(endpoint, data) {
    return ajax(endpoint, 'GET', data)
  },
  post(endpoint, data) {
    return ajax(endpoint, 'POST', data)
  },
  put(endpoint, data) {
    return ajax(endpoint, 'PUT', data)
  },
  delete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data)
  },
}

async function ajax(endpoint, method = 'GET', data = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: method === 'GET' ? data : null,
    })
    return res.data
  } catch (err) {
    if (err.response && err.response.status === 401) {
      sessionStorage.clear()
      window.location.assign('/')
    }
    throw err
  }
}

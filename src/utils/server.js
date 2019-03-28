import axios from 'axios';
import qs from 'qs';

axios.interceptors.request.use(
  config => {
    config.baseUrl = '/api/'
    config.withCredentials = true
    config.timeout = 6000
    let token = sessionStorage.getItem('jwt.access_token')
    let csrf = store.getters.csrf
    if (token) {
      config.headers = {
        'access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  }
)
 

export function login (data) {
  return axios.post('', data)
}

export function register (data) {
  return axios.get('', data)
}
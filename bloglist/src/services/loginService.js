import axios from 'axios'

const baseUrl = '/api/login'

const loginService = {
  login: async credentials => {
    const loggedUserJSON = window.localStorage.getItem('login')
    if (loggedUserJSON) {
      return JSON.parse(loggedUserJSON)
    }
    const response = await axios.post(baseUrl, credentials)
    window.localStorage.setItem('login', JSON.stringify(response.data))
    return response.data
  },
  logout: () => {
    window.localStorage.removeItem('login')
    return Promise.resolve()
  }
}

export default loginService

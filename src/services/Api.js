import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'http://quotesondesign.com/wp-json/'
  })
}

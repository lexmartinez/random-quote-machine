import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://quotesondesign.com/wp-json/',
    headers: {'Accept': '*/*'}
  })
}

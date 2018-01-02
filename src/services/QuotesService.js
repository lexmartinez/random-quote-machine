import Api from '@/services/Api'

export default {
  fetchQuote () {
    return Api().get('posts?filter[orderby]=rand&filter[posts_per_page]=1&date=' + new Date())
  }
}

import axios from '../../plugins/axios'

export default {
  getArticleListAll: (options) => axios.get('/article/findMyPage', { params: options }),
  getArticleById: (options) => axios.get('/article/findById', { params: options })
}

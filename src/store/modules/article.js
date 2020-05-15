import api from '../../service'
const actions = {
  async getArticleListAll ({ commit }, { id = 0, pageSize = 5 }) {
    const result = await api.article.getArticleListAll({ id, pageSize })
    return result
  },
  async getArticleById ({ commit }, { id }) {
    const result = await api.article.getArticleById({ id })
    return result
  }
}

export default {
  actions
}

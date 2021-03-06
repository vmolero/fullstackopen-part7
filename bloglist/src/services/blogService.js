import axios from 'axios'

const baseUrl = '/api/blogs'
const blogService = {
  getAll: async token => {
    const response = await axios.get(baseUrl, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  create: async (blog, token) => {
    const response = await axios.post(baseUrl, blog, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  update: async (blog, token) => {
    const response = await axios.put(baseUrl + '/' + blog.id, blog, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  },
  delete: (blog, token) => {
    return axios.delete(baseUrl + '/' + blog.id, {
      headers: { Authorization: `Bearer ${token}` }
    })
  },
  addComment: async (blogId, comment, token) => {
    const response = await axios.post(
      baseUrl + '/' + blogId + '/comments',
      { id: blogId, comment },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
    return response.data
  }
}

export default blogService

import type { Post, Posts, PostsGetQuery } from '@/app/blog/interfaces/post.interface'
import { apiGet } from '@/api/apiClient'

export async function apiBlog() {
  async function getPost(id: string) {
    const res = await apiGet<Post>(`/posts/${id}`)
    return res.data
  }

  async function getPosts(query: PostsGetQuery = {}) {
    const {
      page,
      limit,
      orderBy,
      orderDirection,
      filter,
    } = query

    const params = new URLSearchParams()

    if (page) {
      params.append('page', page.toString())
    }
    if (limit) {
      params.append('limit', limit.toString())
    }
    if (orderBy) {
      params.append('orderBy', orderBy)
    }
    if (orderDirection) {
      params.append('orderDirection', orderDirection)
    }
    if (filter) {
      if (filter.authorId) {
        params.append('filter[authorId]', filter.authorId)
      }
    }

    const stringifiedParams = params.toString()
    const queryString = stringifiedParams ? `?${stringifiedParams}` : ''

    const res = await apiGet<Posts>(`/posts${queryString}`)
    return res.data
  }

  return {
    getPost,
    getPosts,
  }
}

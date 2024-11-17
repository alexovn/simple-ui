import type { Post, Posts } from '@/app/blog/interfaces/post.interface'
import { apiGet } from '@/api/apiClient'

export async function apiBlog() {
  async function getPost(id: string) {
    const res = await apiGet<Post>(`/posts/${id}`)
    return res.data
  }

  async function getPosts() {
    const res = await apiGet<Posts>('/posts')
    return res.data
  }

  return {
    getPost,
    getPosts,
  }
}

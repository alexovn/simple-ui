import type { PostFilter } from '@/app/blog/interfaces/post-filter.interface'
import type { Pagination } from '@/interfaces/pagination.interface'

export interface Post {
  id: string
  createdAt: Date
  updatedAt: Date
  published: boolean
  title: string
  description: string
  authorId: string
  author: {
    firstName: string
    lastName: string
  }
}

export interface Posts {
  data: Post[]
  meta: {
    page: number
    total: number
    totalPages: number
  }
}

export interface PostsGetQuery extends Pagination {
  filter?: PostFilter
}

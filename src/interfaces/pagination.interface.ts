export interface Pagination {
  page?: number
  limit?: number
  orderBy?: 'createdAt' | 'title' | 'views'
  orderDirection?: 'asc' | 'desc'
}

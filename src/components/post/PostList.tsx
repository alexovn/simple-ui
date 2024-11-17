import type { Posts } from '@/app/blog/interfaces/post.interface'
import { PostItem } from '@/components/post/PostItem'

export function PostList(
  {
    posts,
  }: {
    posts: Posts['data'] | undefined
  },
) {
  return (
    <div>
      <div className="flex flex-col gap-10">
        {posts?.map(post => (
          <PostItem
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  )
}

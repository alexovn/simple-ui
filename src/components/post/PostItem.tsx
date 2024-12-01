/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { Post } from '@/app/blog/interfaces/post.interface'
import { Button } from '@/components/ui/button'
import { format as formatDate } from 'date-fns'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'

export async function PostItem(
  {
    post,
  }:
  { post: Post },
) {
  const sanitizedDescription = DOMPurify.sanitize(formatText(post.description))
  const postLink = `blog/${post.id}`

  function formattedDescription() {
    if (sanitizedDescription.length > 500) {
      return `${sanitizedDescription.slice(0, 400)}...`
    }
    return sanitizedDescription
  }

  function formatText(text: string) {
    return text
      .split('\n')
      .map((line: string) => `<p>${line}</p>`)
      .join('')
  }

  function handleFormatDate(date?: Date) {
    if (date) {
      return formatDate(date, 'MMM d, yyyy')
    }
    return ''
  }

  return (
    <article>
      <div>
        <div>
          <Link
            className="hover:underline"
            href={postLink}
          >
            <h3 className="h3 py-3 font-medium">
              {post.title}
            </h3>
          </Link>
          <div className="flex items-center gap-1.5 text-sm">
            <div className="text-gray-500">by</div>
            <Link
              href={`/${post.authorId}`}
              className="flex items-center gap-1 hover:underline"
            >
              <div>
                {post.author.firstName}
              </div>
              <div>
                {post.author.lastName}
              </div>
            </Link>
            <span className="text-gray-500">·</span>
            <div className="text-gray-500">
              { handleFormatDate(post.createdAt) }
            </div>
          </div>
        </div>

        <div
          className="mt-5 flex flex-col gap-2 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: formattedDescription() }}
        />

        <div className="mt-5">
          <Button
            asChild
            size="sm"
          >
            <Link href={postLink}>
              Read more
            </Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

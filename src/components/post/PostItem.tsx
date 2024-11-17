/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import type { Post } from '@/app/blog/interfaces/post.interface'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'

export async function PostItem(
  {
    post,
  }:
  { post: Post },
) {
  function formatText(text: string) {
    return text
      .split('\n')
      .map((line: string) => `<p>${line}</p>`)
      .join('')
  }

  const sanitizedDescription = DOMPurify.sanitize(formatText(post.description))

  return (
    <article>
      <div className="flex flex-col gap-5">
        <Link
          className="hover:underline"
          href={`/blog/${post.id}`}
        >
          <h3 className="h3 font-medium">
            {post.title}
          </h3>
        </Link>
        <div
          className="whitespace-pre-line flex flex-col gap-2"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>
    </article>
  )
}

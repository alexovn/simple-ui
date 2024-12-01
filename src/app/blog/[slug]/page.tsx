/* eslint-disable react-dom/no-dangerously-set-innerhtml */
import { apiBlog } from '@/app/blog/api'
import { PageHeader } from '@/components/page/PageHeader'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { format as formatDate } from 'date-fns'
import DOMPurify from 'isomorphic-dompurify'
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { getPost } = await apiBlog()
  const slug = (await params).slug

  const post = await getPost(slug)
  const sanitizedDescription = DOMPurify.sanitize(formatText(post?.description))

  function formatText(text?: string) {
    if (!text) {
      return ''
    }

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
    <div>
      <Breadcrumb className="py-3">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{post?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <article className="custom-container pt-5 pb-10">
        <PageHeader title={post?.title || ''} />

        <div className="flex items-center gap-1.5 text-sm">
          <div className="flex items-center gap-1">
            <Link
              href={`/${post?.authorId}`}
              className="flex items-center gap-1 hover:underline"
            >
              <div>
                {post?.author.firstName}
              </div>
              <div>
                {post?.author.lastName}
              </div>
            </Link>
          </div>
          <span className="text-gray-500">·</span>
          <div className="text-gray-500">
            { handleFormatDate(post?.createdAt) }
          </div>
        </div>

        <div
          className="mt-5 flex flex-col gap-2 whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </article>
    </div>
  )
}

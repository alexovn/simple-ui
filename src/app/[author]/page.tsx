import { apiBlog } from '@/app/blog/api'
import { PageHeader } from '@/components/page/PageHeader'
import { PostList } from '@/components/post/PostList'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ author: string }>
}) {
  const { getPosts } = await apiBlog()
  const author = (await params).author

  const query = {
    filter: {
      authorId: author,
    },
  }

  const postsRes = await getPosts(query)

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
            <BreadcrumbPage>Author</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="custom-container pt-5 pb-10">
        <div>
          <PostList posts={postsRes?.data} />
        </div>
      </section>
    </div>
  )
}

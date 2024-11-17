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

export default async function Blog() {
  const { getPosts } = await apiBlog()

  const postsRes = await getPosts()

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
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <section className="my-2 lg:mx-[12.5rem]">
        <PageHeader title="The blog" />

        <div>
          <PostList posts={postsRes?.data} />
        </div>
      </section>
    </div>
  )
}

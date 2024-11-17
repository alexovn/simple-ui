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
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { getPost } = await apiBlog()
  const slug = (await params).slug

  const post = await getPost(slug)

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

      <article className="my-2 lg:mx-[12.5rem]">
        <PageHeader title={post?.title || ''} />

        <div>
          { post?.description }
        </div>
      </article>
    </div>
  )
}

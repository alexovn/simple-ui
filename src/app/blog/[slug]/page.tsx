import Link from 'next/link'

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  return (
    <div>
      <Link href="/blog">Back</Link>
      <h1>
        Article page
        {slug}
      </h1>
    </div>
  )
}

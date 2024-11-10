import Link from 'next/link'

export default function Blog() {
  return (
    <div>
      <Link href="/">Back</Link>
      <h1>Blog page</h1>
      <Link href="/blog/1">Article 1</Link>
    </div>
  )
}

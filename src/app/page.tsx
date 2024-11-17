import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="my-10">
      <div className="my-10 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-medium">
            Simple Ui
          </h1>
          <h2 className="text-7xl font-bold">
            Plain. Light. Yours
          </h2>
        </div>

        <div className="self-center">
          <Button asChild>
            <Link href="/blog">
              Get started
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

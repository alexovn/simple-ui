import { UiButton } from '@/components/ui/UiButton'
import Link from 'next/link'

export default function Home() {
  return (
    <section className="py-10">
      <div className="my-10 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="font-medium">
            The Simple Ui
          </h1>
          <h2 className="text-7xl font-bold">
            Plain. Light. Yours
          </h2>
        </div>

        <div className="self-center">
          <UiButton asChild>
            <Link href="/blog">
              Get started
            </Link>
          </UiButton>
        </div>
      </div>
    </section>
  )
}

import { UiButton } from '@/components/ui/UiButton'
import { Icon } from '@iconify/react'
import { CircleDashed } from 'lucide-react'
import Link from 'next/link'

export function TheHeader() {
  const menu = [
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Contacts',
      href: '/contacts',
    },
  ]

  const menuItems = menu.map((item) => {
    return (
      <li
        key={item.name}
      >
        <UiButton asChild variant="link">
          <Link href={item.href}>
            {item.name}
          </Link>
        </UiButton>
      </li>
    )
  })

  return (
    <header className="px-4 xl:px-[7.5rem] bg-white">
      <div className="py-3 flex items-center justify-between gap-3">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <CircleDashed size={32} />
            <div className="text-lg font-medium">
              Simple Ui
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <ul className="flex items-center">
            {menuItems}
          </ul>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <UiButton variant="ghost">
                Log in
              </UiButton>
              <UiButton>
                Sign up
              </UiButton>
            </div>

            <div>
              <UiButton className="p-2 h-auto" asChild variant="ghost">
                <Link href="https://github.com/alexovn" target="_blank">
                  <Icon className="!size-6" icon="mdi:github" height="unset" />
                </Link>
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

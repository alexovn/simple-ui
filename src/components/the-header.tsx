import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
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
        <Button asChild variant="link">
          <Link href={item.href}>
            {item.name}
          </Link>
        </Button>
      </li>
    )
  })

  return (
    <header className="px-4 xl:px-[7.5rem] bg-background">
      <div className="py-3 flex items-center justify-between gap-3">
        <div>
          <Link className="flex items-center gap-3" href="/">
            <div className="size-8">
              <Icon
                className="!size-8 animate-spin-slow"
                icon="fluent:circle-hint-20-filled"
                height="unset"
              />
            </div>
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
            {/* <div className="flex items-center gap-2">
              <Button variant="ghost">
                Log in
              </Button>
              <Button>
                Sign up
              </Button>
            </div> */}

            <div className="flex items-center gap-2">
              <Button
                asChild
                variant="ghost"
                className="p-2 size-10"
              >
                <Link
                  href="https://github.com/alexovn"
                  target="_blank"
                >
                  <Icon
                    className="!size-6"
                    icon="mdi:github"
                    height="unset"
                  />
                </Link>
              </Button>

              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

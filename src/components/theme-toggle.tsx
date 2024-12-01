'use client'

import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function toggleTheme() {
    if (theme === 'dark') {
      return setTheme('light')
    }

    if (theme === 'light') {
      return setTheme('dark')
    }
  }

  return (
    <Button
      className="p-2 size-10"
      variant="ghost"
      onClick={() => toggleTheme()}
    >
      <Icon
        className="!size-5"
        icon={theme === 'dark' ? 'lucide:moon' : 'lucide:sun'}
      />
    </Button>
  )
}

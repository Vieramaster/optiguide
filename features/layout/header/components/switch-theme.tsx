"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { capitalizeFirst } from "@/shared/utils/string/capitalize-first"

const checking = (theme: boolean) => (theme ? "dark" : "light")

export const SwitchTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-2">
      <span>{capitalizeFirst(resolvedTheme)}</span>
      <Switch
        checked={resolvedTheme === "dark"}
        onCheckedChange={(checked) => setTheme(checking(checked))}
      />
    </div>
  )
}
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { Switch } from "@/shared/components/ui/switch"

const checking = (theme: boolean) => (theme ? "dark" : "light")

export const SwitchTheme = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"
  const themeToggleLabel = isDark
    ? "Activar tema claro"
    : "Activar tema oscuro"

  return (
    <div className="flex items-center gap-2">
      <span id="theme-mode-label">
        {resolvedTheme
          ? resolvedTheme[0].toUpperCase() + resolvedTheme.slice(1)
          : ""}
      </span>
      <Switch
        checked={isDark}
        aria-label={themeToggleLabel}
        onCheckedChange={(checked) => setTheme(checking(checked))}
      />
    </div>
  )
}
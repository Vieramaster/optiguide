"use client"

import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { capitalizeFirst } from "@/shared/lib/utils/capitalize-first"


export const SwitchTheme = () => {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const label = resolvedTheme === "dark" ? "Light" : "Dark"
    return (
        <div className="flex items-center gap-2">
            <span>{capitalizeFirst(label)}</span>
            <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                }
            />
        </div>
    )
}
"use client"

import { AlertTriangle, RefreshCw } from "lucide-react"

import { Button } from "@/shared/components/ui/button"

interface ErrorPageProps {
  title: string
  description?: string
  retryLabel?: string
  showRetry?: boolean
  onRetry?: () => void
}

export const ErrorPage = ({
  title,
  description,
  retryLabel = "Intentar nuevamente",
  showRetry = false,
  onRetry
}: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle className="h-12 w-12 text-destructive" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          {description && (
            <p className="text-muted-foreground max-w-md">{description}</p>
          )}
        </div>
      </div>

      {showRetry && (
        <Button onClick={onRetry} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          {retryLabel}
        </Button>
      )}
    </div>
  )
}

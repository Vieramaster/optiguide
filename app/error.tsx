"use client"

import { usePathname } from "next/navigation"
import { ErrorPage } from "@/components/ui/error-page"
import { stringFormatters } from "@/components/ui/layout/utils/stringFormatters"
import { retryError } from "@/shared/actions/retry-error"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ reset }: ErrorProps) {
  const pathname = usePathname()
  const formatted = stringFormatters(pathname)

  const handleRetry = () => retryError(reset)

  return (
    <ErrorPage
      description={`Ocurrió un error al cargar ${formatted?.[0] ?? "la página"}.`}
      showRetry
      onRetry={handleRetry}
    />
  )
}
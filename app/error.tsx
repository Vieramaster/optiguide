"use client"

import { usePathname } from "next/navigation"

import { ErrorPage } from "@/shared/components/ui/error-page"
import { formatPathSegments } from "@/shared/formatters/path-formatter"
import { retryError } from "@/shared/hooks/retry-error"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ reset }: ErrorProps) => {
  const pathname = usePathname()
  const formatted = formatPathSegments(pathname)

  const handleRetry = () => retryError(reset)

  return (
    <ErrorPage
      title="Ha ocurrido un error"
      description={`Ocurrió un error al cargar ${formatted?.[0] ?? "la página"}.`}
      retryLabel="Intentar nuevamente"
      showRetry
      onRetry={handleRetry}
    />
  )
}

export default Error
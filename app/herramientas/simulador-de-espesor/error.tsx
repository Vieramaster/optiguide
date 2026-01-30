
"use client"

import { ErrorPage } from "@/components/ui/error-page"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ error, reset }: ErrorProps) => (
  <ErrorPage
    title="Error en el simulador"
    message={error.message || "Ha ocurrido un error al cargar el simulador de espesor. Intenta recargar la página."}
    showRetry
    onRetry={reset}
  />
)

export default Error

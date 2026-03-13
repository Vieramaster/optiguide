"use client"

import { ErrorPage } from "@/components/ui/error-page"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

const Error = ({ reset }: ErrorProps) => (
  <ErrorPage
    title="Error al cargar el artículo"
    message="No se pudo cargar el contenido solicitado. Puede que el artículo no exista o haya un problema temporal."
    showRetry
    onRetry={reset}
  />
)

export default Error

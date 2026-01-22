import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface ErrorPageProps {
  message: string
  title?: string
  showRetry?: boolean
  onRetry?: () => void
}

export const ErrorPage = ({
  message,
  title = "Ha ocurrido un error",
  showRetry = false,
  onRetry
}: ErrorPageProps) => {
  const handleRetry = () => {
    if (onRetry) {
      onRetry()
    } else {
      window.location.reload()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-6 p-6 text-center">
      <div className="flex flex-col items-center gap-4">
        <AlertTriangle className="h-12 w-12 text-destructive" />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground max-w-md">{message}</p>
        </div>
      </div>

      {showRetry && (
        <Button onClick={handleRetry} variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Intentar nuevamente
        </Button>
      )}
    </div>
  )
}
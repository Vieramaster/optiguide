interface ErrorPageProps {
    message: string
}

export const ErrorPage = ({message}:ErrorPageProps) =>(
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h2 className="text-xl font-bold">No se pudo cargar el artículo</h2>
      <p className="text-gray-500">{message}</p>
  
    </div>
)
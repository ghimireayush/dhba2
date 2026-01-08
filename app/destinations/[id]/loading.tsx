export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="animate-pulse">
        <div className="h-96 bg-muted rounded-lg mb-8"></div>
        <div className="h-8 bg-muted rounded-lg mb-4 w-3/4"></div>
        <div className="h-4 bg-muted rounded-lg mb-2 w-1/2"></div>
        <div className="h-4 bg-muted rounded-lg mb-8 w-full"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="h-32 bg-muted rounded-lg"></div>
            <div className="h-32 bg-muted rounded-lg"></div>
          </div>
          <div className="lg:col-span-1">
            <div className="h-48 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />

        <div className="text-center">

          <h2 className="text-xl font-semibold">
            Loading...
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Loading Sowmya's portfolio...
          </p>

        </div>

      </div>
    </main>
  );
}
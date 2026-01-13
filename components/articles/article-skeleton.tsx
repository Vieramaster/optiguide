export const ArticleSkeleton = () => (
  <section className="px-10 pt-5 pb-20 flex flex-col gap-6 mx-auto max-w-4xl">
    {/* Skeleton decorativo */}
    <div className="h-10 w-3/4 bg-gray-200 animate-pulse rounded" />
    <div className="space-y-3">
      <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
      <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
      <div className="h-4 w-2/3 bg-gray-100 animate-pulse rounded" />
    </div>
  </section>
);

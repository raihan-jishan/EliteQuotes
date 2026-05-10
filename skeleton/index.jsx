export function Skeleton({ className }) {
  return (
    <div className={`animate-pulse rounded-md bg-slate-800/50 ${className}`} />
  );
}
 

export function QuoteCardSkeleton() {
  return (
    <div className="p-5 rounded-2xl bg-background space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />

      <div className="pt-4 flex items-center gap-3">
        <Skeleton className="w-8 h-8 rounded-full" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

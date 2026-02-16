import { CompanyCardSkeleton } from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      {/* Header Skeleton */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-4 w-32 bg-white/10 rounded mb-4 animate-pulse" />
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-3">
            <div>
              <div className="h-10 w-40 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-48 bg-white/5 rounded mt-2 animate-pulse" />
            </div>
            <div className="glass-card px-6 py-4 text-right animate-pulse">
              <div className="h-3 w-20 bg-white/10 rounded mb-2 ml-auto" />
              <div className="h-10 w-32 bg-white/15 rounded mb-1 ml-auto" />
              <div className="h-4 w-24 bg-white/5 rounded ml-auto" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Portfolio Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CompanyCardSkeleton />
          <CompanyCardSkeleton />
          <CompanyCardSkeleton />
          <CompanyCardSkeleton />
          <CompanyCardSkeleton />
          <CompanyCardSkeleton />
        </div>
      </main>
    </div>
  );
}

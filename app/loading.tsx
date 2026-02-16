import { MetricsCardSkeleton, CompanyCardSkeleton } from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      {/* Header Skeleton */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="h-9 w-56 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-48 bg-white/5 rounded mt-2 animate-pulse" />
            </div>
            <div className="flex gap-3">
              <div className="h-10 w-24 bg-white/10 rounded-xl animate-pulse" />
              <div className="h-10 w-28 bg-white/10 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Metrics Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
        </div>

        {/* Recent Activity Skeleton */}
        <div className="mb-12">
          <div className="h-8 w-48 bg-white/10 rounded mb-6 animate-pulse" />
          <div className="glass-card overflow-hidden">
            <div className="divide-y divide-white/5">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="p-5 animate-pulse">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-white/10" />
                    <div className="flex-1">
                      <div className="h-5 w-32 bg-white/10 rounded mb-1" />
                      <div className="h-3 w-64 bg-white/5 rounded" />
                    </div>
                    <div className="h-6 w-24 bg-white/10 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Highlights Skeleton */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
            <div className="h-5 w-24 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
            <CompanyCardSkeleton />
          </div>
        </div>

        {/* Pipeline Table Skeleton */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="h-8 w-48 bg-white/10 rounded animate-pulse" />
            <div className="h-5 w-24 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="glass-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    {['Company', 'Stage', 'ARR', 'Growth', 'Score', 'Deal Stage'].map((header) => (
                      <th key={header} className="px-6 py-4">
                        <div className="h-3 w-16 bg-white/10 rounded animate-pulse" />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="px-6 py-4">
                        <div className="h-5 w-28 bg-white/10 rounded mb-1" />
                        <div className="h-3 w-40 bg-white/5 rounded" />
                      </td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="h-4 w-20 bg-white/10 rounded" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-4 w-16 bg-white/10 rounded" />
                      </td>
                      <td className="px-6 py-4 hidden sm:table-cell">
                        <div className="h-4 w-12 bg-white/10 rounded" />
                      </td>
                      <td className="px-6 py-4">
                        <div className="h-6 w-10 bg-white/10 rounded" />
                      </td>
                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="h-6 w-24 bg-white/10 rounded-full" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { TableRowSkeleton } from "@/components/LoadingSkeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      {/* Header Skeleton */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-4 w-32 bg-white/10 rounded mb-4 animate-pulse" />
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mt-3">
            <div>
              <div className="h-10 w-48 bg-white/10 rounded-lg animate-pulse" />
              <div className="h-4 w-64 bg-white/5 rounded mt-2 animate-pulse" />
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial animate-pulse">
                <div className="h-3 w-20 bg-white/10 rounded mb-2" />
                <div className="h-8 w-8 bg-white/15 rounded mx-auto" />
              </div>
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial animate-pulse">
                <div className="h-3 w-20 bg-white/10 rounded mb-2" />
                <div className="h-8 w-8 bg-white/15 rounded mx-auto" />
              </div>
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial animate-pulse">
                <div className="h-3 w-16 bg-white/10 rounded mb-2" />
                <div className="h-8 w-8 bg-white/15 rounded mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Pipeline Stages Skeleton */}
        {['Term Sheet', 'Due Diligence', 'Partner Review', 'Initial Screening'].map((stage, idx) => (
          <div key={stage} className="mb-10">
            <div className="flex items-center justify-between mb-5">
              <div className="h-8 w-40 bg-white/10 rounded animate-pulse" />
              <div className="flex items-center gap-3">
                <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-16 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
            
            <div className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-white/5 border-b border-white/10">
                    <tr>
                      {['Company', 'Sector', 'Stage', 'ARR', 'Growth', 'Valuation', 'Raising', 'Score'].map((header) => (
                        <th key={header} className="px-6 py-4">
                          <div className="h-3 w-16 bg-white/10 rounded animate-pulse" />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[1, 2, 3].slice(0, idx === 0 ? 3 : 2).map((i) => (
                      <TableRowSkeleton key={i} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      {/* Header Skeleton */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-4 w-32 bg-white/10 rounded mb-4 animate-pulse" />
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mt-3">
            <div className="flex-1 min-w-0">
              <div className="h-10 w-64 bg-white/10 rounded-lg animate-pulse mb-2" />
              <div className="h-5 w-96 bg-white/5 rounded animate-pulse mb-4" />
              <div className="flex flex-wrap items-center gap-3">
                <div className="h-7 w-24 bg-white/10 rounded-full animate-pulse" />
                <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-4 bg-white/5 rounded-full animate-pulse" />
                <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
                <div className="h-4 w-4 bg-white/5 rounded-full animate-pulse" />
                <div className="h-4 w-28 bg-white/5 rounded animate-pulse" />
              </div>
            </div>
            <div className="glass-card px-6 py-4 text-center flex-shrink-0 animate-pulse">
              <div className="h-3 w-20 bg-white/10 rounded mb-2 mx-auto" />
              <div className="h-14 w-20 bg-white/15 rounded mb-2 mx-auto" />
              <div className="h-3 w-24 bg-white/5 rounded mx-auto" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Financial Performance */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 w-48 bg-white/10 rounded mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i}>
                    <div className="h-3 w-12 bg-white/10 rounded mb-2" />
                    <div className="h-8 w-24 bg-white/15 rounded mb-1" />
                    <div className="h-3 w-16 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="h-48 bg-white/5 rounded-lg" />
              </div>
            </div>

            {/* Financial Structure */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 w-40 bg-white/10 rounded mb-6" />
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="glass-card p-5 bg-white/3">
                    <div className="h-3 w-16 bg-white/10 rounded mb-2" />
                    <div className="h-8 w-20 bg-white/15 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Team */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 w-36 bg-white/10 rounded mb-6" />
              <div className="space-y-5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/3">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-5 w-32 bg-white/10 rounded mb-1" />
                      <div className="h-4 w-24 bg-white/5 rounded mb-2" />
                      <div className="h-4 w-full bg-white/5 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Traction */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 w-36 bg-white/10 rounded mb-6" />
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0 mt-0.5" />
                    <div className="h-4 w-full bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-6 w-40 bg-white/10 rounded mb-6" />
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex-shrink-0 mt-0.5" />
                    <div className="h-4 w-full bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1 space-y-6">
            {/* Thesis Summary */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-5 w-32 bg-white/10 rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-3/4 bg-white/5 rounded" />
              </div>
            </div>

            {/* AI Analysis */}
            <div className="animate-pulse">
              <div className="h-5 w-28 bg-white/10 rounded mb-4" />
              <div className="glass-card p-6 space-y-4">
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-full bg-white/5 rounded" />
                <div className="h-4 w-2/3 bg-white/5 rounded" />
              </div>
            </div>

            {/* Company Information */}
            <div className="glass-card p-6 animate-pulse">
              <div className="h-5 w-40 bg-white/10 rounded mb-4" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="pb-3 border-b border-white/10 last:pb-0 last:border-0">
                    <div className="h-3 w-16 bg-white/10 rounded mb-1" />
                    <div className="h-4 w-32 bg-white/5 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

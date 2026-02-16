export function MetricsCardSkeleton() {
  return (
    <div className="glass-card p-6 animate-pulse">
      <div className="h-3 w-24 bg-white/10 rounded mb-3"></div>
      <div className="h-10 w-32 bg-white/15 rounded mb-2"></div>
      <div className="h-4 w-28 bg-white/10 rounded"></div>
    </div>
  );
}

export function TableRowSkeleton() {
  return (
    <tr className="animate-pulse">
      <td className="px-6 py-4">
        <div className="h-5 w-32 bg-white/10 rounded mb-1"></div>
        <div className="h-3 w-48 bg-white/5 rounded"></div>
      </td>
      <td className="px-6 py-4 hidden lg:table-cell">
        <div className="h-4 w-20 bg-white/10 rounded"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-4 w-16 bg-white/10 rounded"></div>
      </td>
      <td className="px-6 py-4 hidden sm:table-cell">
        <div className="h-4 w-12 bg-white/10 rounded"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-6 w-10 bg-white/10 rounded"></div>
      </td>
      <td className="px-6 py-4 hidden md:table-cell">
        <div className="h-6 w-24 bg-white/10 rounded-full"></div>
      </td>
    </tr>
  );
}

export function CompanyCardSkeleton() {
  return (
    <div className="glass-card p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-6 w-32 bg-white/15 rounded mb-2"></div>
          <div className="h-4 w-24 bg-white/10 rounded"></div>
        </div>
        <div className="h-8 w-8 bg-white/10 rounded"></div>
      </div>
      <div className="h-4 w-full bg-white/5 rounded mb-2"></div>
      <div className="h-4 w-3/4 bg-white/5 rounded mb-6"></div>
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
        <div>
          <div className="h-3 w-12 bg-white/5 rounded mb-2"></div>
          <div className="h-5 w-16 bg-white/10 rounded"></div>
        </div>
        <div>
          <div className="h-3 w-16 bg-white/5 rounded mb-2"></div>
          <div className="h-5 w-12 bg-white/10 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export function DashboardLoadingState() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100">
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="h-8 w-48 bg-white/10 rounded animate-pulse"></div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
          <MetricsCardSkeleton />
        </div>
        <div className="glass-card p-6">
          <div className="h-6 w-32 bg-white/10 rounded mb-4 animate-pulse"></div>
          <div className="space-y-4">
            <div className="h-16 bg-white/5 rounded animate-pulse"></div>
            <div className="h-16 bg-white/5 rounded animate-pulse"></div>
            <div className="h-16 bg-white/5 rounded animate-pulse"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

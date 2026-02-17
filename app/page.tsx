import { startups } from '@/lib/data/deals';
import Link from 'next/link';
import { PipelineEmptyState } from '@/components/EmptyState';

// Sparkline component for portfolio value
function Sparkline({ data, color = "#10B981" }: { data: number[]; color?: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const width = data.length * 12;
  const height = 40;
  
  const points = data.map((v, i) => {
    const x = i * 12;
    const y = height - ((v - min) / range) * 32 - 4;
    return `${x},${y}`;
  }).join(' ');
  
  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-24 h-10">
      <defs>
        <linearGradient id={`sparklineGradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={`0,${height} ${points} ${width},${height}`}
        fill={`url(#sparklineGradient-${color.replace('#', '')})`}
      />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const portfolio = startups.filter(s => s.status === 'Portfolio');
  const pipeline = startups.filter(s => s.status === 'Pipeline');
  
  const portfolioValue = portfolio.reduce((acc, s) => acc + (s.financials.invested || 0), 0);
  const currentValue = portfolio.reduce((acc, s) => acc + (s.financials.valuation * (s.financials.ownership || 0) / 100), 0);
  const moic = currentValue / portfolioValue;
  const totalReturn = ((moic - 1) * 100);
  
  // Sample sparkline data for portfolio value trend
  const portfolioTrend = [30, 35, 33, 42, 40, 48, 52, 58, 56, 64, 68, 72];

  return (
    <div className="min-h-screen text-slate-100 relative">

      {/* Header */}
      <header className="border-b border-white/10 bg-white/[0.04] backdrop-blur-2xl sticky top-0 z-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Gregory Curtis
              </h1>
              <p className="mt-1 text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                Institutional-grade VC intelligence
              </p>
            </div>
            <div className="flex gap-3">
              <Link 
                href="/portfolio" 
                className="px-5 py-2.5 bg-emerald-600/90 text-white text-sm font-medium rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200"
              >
                Portfolio
              </Link>
              <Link 
                href="/pipeline" 
                className="px-5 py-2.5 bg-white/[0.08] backdrop-blur-xl text-white text-sm font-medium rounded-xl border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.16] hover:shadow-lg transition-all duration-200"
              >
                Deal Pipeline
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Key Metrics - First 3 Seconds Priority */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 animate-[fadeIn_0.6s_ease-out]">
          {/* Portfolio Value Card */}
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-[family-name:var(--font-inter)]">
                  Portfolio Value
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                  ${(currentValue / 1000000).toFixed(1)}M
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400 font-semibold font-[family-name:var(--font-jetbrains-mono)]">
                    {moic.toFixed(2)}x MOIC
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400 font-semibold">
                    +{totalReturn.toFixed(0)}%
                  </span>
                </div>
              </div>
              <div className="hidden sm:block">
                <Sparkline data={portfolioTrend} color="#10B981" />
              </div>
            </div>
          </div>

          {/* Portfolio Companies Card */}
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-[family-name:var(--font-inter)]">
              Portfolio Companies
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
              {portfolio.length}
            </div>
            <div className="text-sm text-slate-400">
              <span className="font-[family-name:var(--font-jetbrains-mono)]">
                ${(portfolioValue / 1000000).toFixed(1)}M
              </span> deployed
            </div>
          </div>

          {/* Active Pipeline Card */}
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-[family-name:var(--font-inter)]">
              Deal Flow Pipeline
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
              {pipeline.length}
            </div>
            <div className="text-sm text-slate-400">
              <span className="text-blue-400 font-semibold">
                {pipeline.filter(s => ['Due Diligence', 'Partner Meeting'].includes(s.dealStage)).length}
              </span> in active diligence
            </div>
          </div>

          {/* Avg Quality Score Card */}
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 font-[family-name:var(--font-inter)]">
              Avg Deal Quality
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
              {Math.round(portfolio.reduce((acc, s) => acc + s.score, 0) / portfolio.length)}
            </div>
            <div className="text-sm text-emerald-400 font-semibold">
              Institutional grade
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-12 animate-[fadeIn_0.8s_ease-out]">
          <h2 className="text-2xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
            Recent Deal Activity
          </h2>
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="divide-y divide-white/5">
              {startups
                .filter(s => s.financials.investmentDate || s.dealStage !== 'Sourced')
                .slice(0, 5)
                .map((startup, idx) => (
                  <Link 
                    key={startup.id}
                    href={`/company/${startup.id}`}
                    className="block p-5 hover:bg-white/[0.05] transition-all duration-200 group"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start sm:items-center gap-4">
                        {/* Company Logo Placeholder */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          startup.status === 'Portfolio' 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {startup.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-white group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)]">
                            {startup.name}
                          </div>
                          <div className="text-sm text-slate-400 mt-0.5 truncate">
                            {startup.tagline}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 sm:text-right flex-shrink-0">
                        {/* Investment Amount */}
                        {startup.financials.invested && (
                          <div className="text-sm font-medium text-slate-300 font-[family-name:var(--font-jetbrains-mono)]">
                            ${(startup.financials.invested / 1000000).toFixed(1)}M
                          </div>
                        )}
                        <div className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                          startup.status === 'Portfolio' 
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                            : startup.dealStage === 'Term Sheet' 
                              ? 'bg-violet-500/20 text-violet-400 border-violet-500/30'
                            : startup.dealStage === 'Due Diligence'
                              ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {startup.dealStage}
                        </div>
                        <div className="text-xs text-slate-500 font-[family-name:var(--font-jetbrains-mono)] hidden sm:block">
                          {startup.financials.investmentDate 
                            ? new Date(startup.financials.investmentDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                            : 'In pipeline'}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        {/* Portfolio Highlights */}
        <div className="mb-12 animate-[fadeIn_1s_ease-out]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              Top Portfolio Companies
            </h2>
            <Link href="/portfolio" className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors">
              View all investments →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.slice(0, 3).map((startup, idx) => (
              <Link
                key={startup.id}
                href={`/company/${startup.id}`}
                className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-200 group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {/* Company Logo Placeholder */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {startup.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)] truncate">
                        {startup.name}
                      </h3>
                      <p className="text-sm text-slate-400 mt-0.5">
                        {startup.sector}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-lg font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)]">
                      {startup.score}
                    </div>
                    <div className="text-xs text-slate-500">Quality</div>
                  </div>
                </div>
                <p className="text-sm text-slate-300 mb-6 line-clamp-2">
                  {startup.tagline}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">ARR</div>
                    <div className="text-base font-bold text-white font-[family-name:var(--font-jetbrains-mono)]">
                      ${(startup.metrics.arr / 1000000).toFixed(1)}M
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Growth</div>
                    <div className="text-base font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)]">
                      {startup.metrics.revenueGrowth}%
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Pipeline Deals */}
        <div className="animate-[fadeIn_1.2s_ease-out]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
              Active Deal Pipeline
            </h2>
            <Link href="/pipeline" className="text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
              View all opportunities →
            </Link>
          </div>
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden lg:table-cell">
                      Stage
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                      ARR
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden sm:table-cell">
                      Growth
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                      Score
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden md:table-cell">
                      Deal Stage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {pipeline.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-16">
                        <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-12 text-center">
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                            <div className="w-48 h-48 border-8 border-blue-500/30 rounded-full animate-pulse" />
                          </div>
                          <div className="relative">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-4">
                              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                              Deal flow initialization
                            </div>
                            <div className="text-sm text-slate-400 max-w-sm mx-auto font-[family-name:var(--font-inter)]">
                              Sourcing engine active. High-quality opportunities will surface here as evaluation completes.
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    pipeline
                      .sort((a, b) => b.score - a.score)
                      .slice(0, 8)
                      .map((startup) => (
                        <tr 
                          key={startup.id} 
                          className="hover:bg-white/5 transition-colors duration-150"
                        >
                          <td className="px-6 py-4">
                            <Link href={`/company/${startup.id}`} className="block group">
                              <div className="flex items-center gap-3">
                                {/* Company Logo Placeholder */}
                                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center text-xs font-bold flex-shrink-0">
                                  {startup.name.slice(0, 2).toUpperCase()}
                                </div>
                                <div className="font-semibold text-white group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)]">
                                  {startup.name}
                                </div>
                              </div>
                            </Link>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-300 hidden lg:table-cell">{startup.stage}</td>
                          <td className="px-6 py-4 text-sm font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                            ${(startup.metrics.arr / 1000000).toFixed(1)}M
                          </td>
                          <td className="px-6 py-4 hidden sm:table-cell">
                            <span className="text-sm font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)]">
                              {startup.metrics.revenueGrowth}%
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`text-sm font-bold font-[family-name:var(--font-jetbrains-mono)] ${
                              startup.score >= 80 ? 'text-emerald-400' :
                              startup.score >= 70 ? 'text-blue-400' :
                              'text-slate-400'
                            }`}>
                              {startup.score}
                            </span>
                          </td>
                          <td className="px-6 py-4 hidden md:table-cell">
                            <span className={`inline-flex px-3 py-1.5 text-xs font-semibold rounded-full border ${
                              startup.dealStage === 'Term Sheet' 
                                ? 'bg-violet-500/20 text-violet-400 border-violet-500/30'
                                : startup.dealStage === 'Due Diligence'
                                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                                : startup.dealStage === 'Partner Meeting'
                                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                            }`}>
                              {startup.dealStage}
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

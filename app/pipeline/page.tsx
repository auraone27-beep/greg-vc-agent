import { startups } from '@/lib/data/deals';
import Link from 'next/link';

export default function PipelinePage() {
  const pipeline = startups.filter(s => s.status === 'Pipeline');
  
  const byStage: Record<string, typeof pipeline> = {
    'Term Sheet': pipeline.filter(s => s.dealStage === 'Term Sheet'),
    'Due Diligence': pipeline.filter(s => s.dealStage === 'Due Diligence'),
    'Partner Meeting': pipeline.filter(s => s.dealStage === 'Partner Meeting'),
    'Deep Dive': pipeline.filter(s => s.dealStage === 'Deep Dive'),
    'Initial Review': pipeline.filter(s => s.dealStage === 'Initial Review'),
    'Sourced': pipeline.filter(s => s.dealStage === 'Sourced'),
  };

  const avgScore = pipeline.length > 0 
    ? Math.round(pipeline.reduce((acc, s) => acc + s.score, 0) / pipeline.length)
    : 0;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 mb-4 inline-flex items-center gap-2 transition-colors font-[family-name:var(--font-inter)]">
            <span>←</span> Back to Dashboard
          </Link>
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mt-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Deal Pipeline
              </h1>
              <p className="mt-2 text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                {pipeline.length} {pipeline.length === 1 ? 'opportunity' : 'opportunities'} in active evaluation
              </p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                  Due Diligence
                </div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                  {byStage['Due Diligence'].length}
                </div>
              </div>
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                  Partner Review
                </div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                  {byStage['Partner Meeting'].length}
                </div>
              </div>
              <div className="glass-card px-5 py-3 text-center flex-1 lg:flex-initial">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                  Avg Quality
                </div>
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                  {avgScore}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {pipeline.length === 0 ? (
          <div className="glass-card p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-64 h-64 border-8 border-blue-500/30 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-6">
                <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                Deal flow initialization
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                Sourcing engine active. Premium opportunities will surface here as they pass initial screening criteria.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex px-6 py-3 bg-emerald-600/90 text-white text-sm font-semibold rounded-xl hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-200"
              >
                View Portfolio Companies
              </Link>
            </div>
          </div>
        ) : (
          Object.entries(byStage).map(([stage, companies]) => 
            companies.length > 0 && (
              <div key={stage} className="mb-10 animate-[fadeIn_0.6s_ease-out]">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                    {stage}
                  </h2>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                      {companies.length} {companies.length === 1 ? 'company' : 'companies'}
                    </span>
                    <span className="text-xs text-slate-500 font-[family-name:var(--font-inter)]">
                      Avg: <span className="font-bold text-blue-400 font-[family-name:var(--font-jetbrains-mono)]">
                        {Math.round(companies.reduce((acc, s) => acc + s.score, 0) / companies.length)}
                      </span>
                    </span>
                  </div>
                </div>
                
                <div className="glass-card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-white/5 border-b border-white/10">
                        <tr>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                            Company
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden lg:table-cell">
                            Sector
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden md:table-cell">
                            Stage
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                            ARR
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden sm:table-cell">
                            Growth
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden xl:table-cell">
                            Valuation
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)] hidden lg:table-cell">
                            Raising
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                            Score
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {companies
                          .sort((a, b) => b.score - a.score)
                          .map((startup) => (
                            <tr 
                              key={startup.id} 
                              className="hover:bg-white/5 transition-colors duration-150 group"
                            >
                              <td className="px-6 py-4">
                                <Link href={`/company/${startup.id}`} className="block">
                                  <div className="font-semibold text-white group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)]">
                                    {startup.name}
                                  </div>
                                  <div className="text-sm text-slate-400 truncate max-w-xs mt-0.5 font-[family-name:var(--font-inter)]">
                                    {startup.tagline}
                                  </div>
                                </Link>
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-300 font-[family-name:var(--font-inter)] hidden lg:table-cell">
                                {startup.sector}
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-300 font-[family-name:var(--font-inter)] hidden md:table-cell">
                                {startup.stage}
                              </td>
                              <td className="px-6 py-4 text-sm font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                                ${(startup.metrics.arr / 1000000).toFixed(1)}M
                              </td>
                              <td className="px-6 py-4 hidden sm:table-cell">
                                <span className={`text-sm font-bold font-[family-name:var(--font-jetbrains-mono)] tabular-nums ${
                                  startup.metrics.revenueGrowth > 500 ? 'text-emerald-400' :
                                  startup.metrics.revenueGrowth > 300 ? 'text-emerald-500' :
                                  'text-blue-400'
                                }`}>
                                  {startup.metrics.revenueGrowth}%
                                </span>
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-300 font-[family-name:var(--font-jetbrains-mono)] tabular-nums hidden xl:table-cell">
                                ${(startup.financials.valuation / 1000000).toFixed(0)}M
                              </td>
                              <td className="px-6 py-4 text-sm text-slate-300 font-[family-name:var(--font-jetbrains-mono)] tabular-nums hidden lg:table-cell">
                                ${(startup.financials.raising / 1000000).toFixed(1)}M
                              </td>
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center justify-center w-12 h-8 text-sm font-bold rounded-lg font-[family-name:var(--font-jetbrains-mono)] tabular-nums ${
                                  startup.score >= 85 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                                  startup.score >= 75 ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                                  startup.score >= 65 ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                                  'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                                }`}>
                                  {startup.score}
                                </span>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </main>
    </div>
  );
}

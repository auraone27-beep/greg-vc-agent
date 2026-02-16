import { startups } from '@/lib/data/deals';
import Link from 'next/link';
import { PortfolioEmptyState } from '@/components/EmptyState';

export default function PortfolioPage() {
  const portfolio = startups.filter(s => s.status === 'Portfolio');
  const totalInvested = portfolio.reduce((acc, s) => acc + (s.financials.invested || 0), 0);
  const currentValue = portfolio.reduce((acc, s) => acc + (s.financials.valuation * (s.financials.ownership || 0) / 100), 0);
  const moic = currentValue / totalInvested;
  const totalReturn = ((moic - 1) * 100);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 relative">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[130px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <header className="border-b border-white/10 bg-white/[0.04] backdrop-blur-2xl sticky top-0 z-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 mb-4 inline-flex items-center gap-2 transition-colors font-[family-name:var(--font-inter)]">
            <span>←</span> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-3">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                Portfolio
              </h1>
              <p className="mt-2 text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                {portfolio.length} {portfolio.length === 1 ? 'company' : 'companies'} · Active monitoring
              </p>
            </div>
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] px-6 py-4 text-right">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                Total Value
              </div>
              <div className="text-3xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                ${(currentValue / 1000000).toFixed(1)}M
              </div>
              <div className="flex items-center gap-2 text-sm mt-1 justify-end">
                <span className="text-emerald-400 font-bold font-[family-name:var(--font-jetbrains-mono)]">
                  {moic.toFixed(2)}x
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-emerald-400 font-bold">+{totalReturn.toFixed(0)}%</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {portfolio.length === 0 ? (
          <PortfolioEmptyState />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio
              .sort((a, b) => b.score - a.score)
              .map((startup, idx) => {
                const currentValueOfInvestment = (startup.financials.valuation * (startup.financials.ownership || 0) / 100);
                const investmentMoic = currentValueOfInvestment / (startup.financials.invested || 1);
                
                return (
                  <Link
                    key={startup.id}
                    href={`/company/${startup.id}`}
                    className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 hover:bg-white/[0.06] hover:border-white/[0.12] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-200 group animate-[fadeIn_0.5s_ease-out]"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {/* Company Logo Placeholder */}
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-base font-bold flex-shrink-0">
                          {startup.name.slice(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)] truncate">
                            {startup.name}
                          </h3>
                          <p className="text-sm text-slate-400 mt-0.5 font-[family-name:var(--font-inter)]">
                            {startup.sector}
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="text-lg font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)]">
                          {startup.score}
                        </div>
                        <div className="text-xs text-slate-500 font-[family-name:var(--font-inter)]">Quality</div>
                      </div>
                    </div>

                    <p className="text-sm text-slate-300 mb-6 line-clamp-2 font-[family-name:var(--font-inter)]">
                      {startup.tagline}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                          ARR
                        </div>
                        <div className="text-base font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                          ${(startup.metrics.arr / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                          Growth
                        </div>
                        <div className="text-base font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                          {startup.metrics.revenueGrowth}%
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                          Invested
                        </div>
                        <div className="text-base font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                          ${(startup.financials.invested! / 1000000).toFixed(1)}M
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                          Ownership
                        </div>
                        <div className="text-base font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                          {startup.financials.ownership?.toFixed(1)}%
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)]">
                          Current Value
                        </span>
                        <span className="font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                          ${(currentValueOfInvestment / 1000000).toFixed(1)}M
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-[family-name:var(--font-inter)]">
                          Return (MOIC)
                        </span>
                        <span className={`font-bold font-[family-name:var(--font-jetbrains-mono)] tabular-nums ${
                          investmentMoic >= 3 ? 'text-emerald-400' :
                          investmentMoic >= 2 ? 'text-blue-400' :
                          'text-slate-400'
                        }`}>
                          {investmentMoic.toFixed(2)}x
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </main>
    </div>
  );
}

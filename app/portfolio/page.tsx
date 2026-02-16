import { startups } from '@/lib/data/deals';
import Link from 'next/link';

export default function PortfolioPage() {
  const portfolio = startups.filter(s => s.status === 'Portfolio');
  const totalInvested = portfolio.reduce((acc, s) => acc + (s.financials.invested || 0), 0);
  const currentValue = portfolio.reduce((acc, s) => acc + (s.financials.valuation * (s.financials.ownership || 0) / 100), 0);
  const moic = currentValue / totalInvested;
  const totalReturn = ((moic - 1) * 100);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-100 relative">
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-2xl sticky top-0 z-50">
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
            <div className="glass-card px-6 py-4 text-right">
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
          <div className="glass-card p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
              <div className="w-64 h-64 border-8 border-emerald-500/30 rounded-full animate-pulse"></div>
            </div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 mb-6">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                Portfolio under construction
              </h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
                Closed investments will appear here. Review active opportunities in the deal pipeline.
              </p>
              <Link
                href="/pipeline"
                className="inline-flex px-6 py-3 bg-blue-600/90 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
              >
                Explore Deal Flow
              </Link>
            </div>
          </div>
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
                    className="glass-card p-6 hover:bg-white/8 hover:border-white/15 hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 group animate-[fadeIn_0.5s_ease-out]"
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-white text-lg group-hover:text-blue-400 transition-colors font-[family-name:var(--font-space-grotesk)]">
                          {startup.name}
                        </h3>
                        <p className="text-sm text-slate-400 mt-1 font-[family-name:var(--font-inter)]">
                          {startup.sector}
                        </p>
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

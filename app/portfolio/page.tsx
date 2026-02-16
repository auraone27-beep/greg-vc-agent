import { startups } from '@/lib/data/deals';
import Link from 'next/link';

export default function PortfolioPage() {
  const portfolio = startups.filter(s => s.status === 'Portfolio');
  const totalInvested = portfolio.reduce((acc, s) => acc + (s.financials.invested || 0), 0);
  const currentValue = portfolio.reduce((acc, s) => acc + (s.financials.valuation * (s.financials.ownership || 0) / 100), 0);
  const moic = currentValue / totalInvested;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-300 mb-3 inline-block">
            ← Back to dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Portfolio Companies</h1>
              <p className="mt-1 text-sm text-slate-400">{portfolio.length} investments</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Portfolio Value</div>
              <div className="text-3xl font-bold text-white">${(currentValue / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-emerald-400">{moic.toFixed(2)}x MOIC</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((startup) => (
            <Link
              key={startup.id}
              href={`/company/${startup.id}`}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-white text-lg">{startup.name}</h3>
                  <p className="text-sm text-slate-400 mt-1">{startup.sector}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-emerald-400">{startup.score}</div>
                  <div className="text-xs text-slate-500">Score</div>
                </div>
              </div>

              <p className="text-sm text-slate-300 mb-4">{startup.tagline}</p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-xs text-slate-500">ARR</div>
                  <div className="text-sm font-semibold text-white">
                    ${(startup.metrics.arr / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Growth</div>
                  <div className="text-sm font-semibold text-emerald-400">
                    {startup.metrics.revenueGrowth}%
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Invested</div>
                  <div className="text-sm font-semibold text-white">
                    ${(startup.financials.invested! / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Ownership</div>
                  <div className="text-sm font-semibold text-white">
                    {startup.financials.ownership?.toFixed(1)}%
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Current Value</span>
                  <span className="font-semibold text-emerald-400">
                    ${((startup.financials.valuation * (startup.financials.ownership || 0) / 100) / 1000000).toFixed(1)}M
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs mt-1">
                  <span className="text-slate-500">MOIC</span>
                  <span className="font-semibold text-white">
                    {((startup.financials.valuation * (startup.financials.ownership || 0) / 100) / startup.financials.invested!).toFixed(2)}x
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

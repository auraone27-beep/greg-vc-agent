import { startups } from '@/lib/data/deals';
import Link from 'next/link';

export default function Home() {
  const portfolio = startups.filter(s => s.status === 'Portfolio');
  const pipeline = startups.filter(s => s.status === 'Pipeline');
  
  const portfolioValue = portfolio.reduce((acc, s) => acc + (s.financials.invested || 0), 0);
  const currentValue = portfolio.reduce((acc, s) => acc + (s.financials.valuation * (s.financials.ownership || 0) / 100), 0);
  const moic = currentValue / portfolioValue;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Digital VC Fund</h1>
              <p className="mt-1 text-sm text-slate-400">AI-powered venture capital intelligence</p>
            </div>
            <div className="flex gap-4">
              <Link 
                href="/portfolio" 
                className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-700"
              >
                Portfolio
              </Link>
              <Link 
                href="/pipeline" 
                className="px-4 py-2 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600"
              >
                Pipeline
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Portfolio Value</div>
            <div className="mt-2 text-3xl font-bold text-white">
              ${(currentValue / 1000000).toFixed(1)}M
            </div>
            <div className="mt-1 text-sm text-emerald-400">
              {moic.toFixed(2)}x MOIC
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Portfolio Companies</div>
            <div className="mt-2 text-3xl font-bold text-white">{portfolio.length}</div>
            <div className="mt-1 text-sm text-slate-400">
              ${(portfolioValue / 1000000).toFixed(1)}M deployed
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Active Pipeline</div>
            <div className="mt-2 text-3xl font-bold text-white">{pipeline.length}</div>
            <div className="mt-1 text-sm text-slate-400">
              {pipeline.filter(s => ['Due Diligence', 'Partner Meeting'].includes(s.dealStage)).length} in diligence
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
            <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Avg Score</div>
            <div className="mt-2 text-3xl font-bold text-white">
              {Math.round(portfolio.reduce((acc, s) => acc + s.score, 0) / portfolio.length)}
            </div>
            <div className="mt-1 text-sm text-emerald-400">
              Portfolio quality
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden">
            <div className="divide-y divide-slate-800">
              {startups
                .filter(s => s.financials.investmentDate || s.dealStage !== 'Sourced')
                .slice(0, 5)
                .map((startup) => (
                  <Link 
                    key={startup.id}
                    href={`/company/${startup.id}`}
                    className="block p-4 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${
                          startup.status === 'Portfolio' ? 'bg-emerald-500' : 'bg-blue-500'
                        }`} />
                        <div>
                          <div className="font-semibold text-white">{startup.name}</div>
                          <div className="text-sm text-slate-400">{startup.tagline}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs font-medium px-2 py-1 rounded ${
                          startup.status === 'Portfolio' 
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-blue-500/20 text-blue-400'
                        }`}>
                          {startup.dealStage}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {startup.financials.investmentDate 
                            ? new Date(startup.financials.investmentDate).toLocaleDateString()
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
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Portfolio Highlights</h2>
            <Link href="/portfolio" className="text-sm text-emerald-400 hover:text-emerald-300">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.slice(0, 3).map((startup) => (
              <Link
                key={startup.id}
                href={`/company/${startup.id}`}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
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
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Pipeline Deals */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Top Pipeline Deals</h2>
            <Link href="/pipeline" className="text-sm text-blue-400 hover:text-blue-300">
              View all →
            </Link>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Stage
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      ARR
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Growth
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Score
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                      Deal Stage
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {pipeline
                    .sort((a, b) => b.score - a.score)
                    .slice(0, 8)
                    .map((startup) => (
                      <tr key={startup.id} className="hover:bg-slate-800/30">
                        <td className="px-6 py-4">
                          <Link href={`/company/${startup.id}`} className="block">
                            <div className="font-semibold text-white">{startup.name}</div>
                            <div className="text-sm text-slate-400">{startup.sector}</div>
                          </Link>
                        </td>
                        <td className="px-6 py-4 text-sm text-slate-300">{startup.stage}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-white">
                          ${(startup.metrics.arr / 1000000).toFixed(1)}M
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-semibold text-emerald-400">
                            {startup.metrics.revenueGrowth}%
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-sm font-bold ${
                            startup.score >= 80 ? 'text-emerald-400' :
                            startup.score >= 70 ? 'text-blue-400' :
                            'text-slate-400'
                          }`}>
                            {startup.score}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex px-2 py-1 text-xs font-medium rounded bg-blue-500/20 text-blue-400">
                            {startup.dealStage}
                          </span>
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

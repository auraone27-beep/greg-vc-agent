import { startups } from '@/lib/data/deals';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MetricsChart from '@/components/MetricsChart';
import AIAnalysis from '@/components/AIAnalysis';

export function generateStaticParams() {
  return startups.map((startup) => ({
    id: startup.id,
  }));
}

export default function CompanyPage({ params }: { params: { id: string } }) {
  const startup = startups.find(s => s.id === params.id);
  
  if (!startup) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-300 mb-3 inline-block">
            ← Back to dashboard
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">{startup.name}</h1>
              <p className="mt-1 text-lg text-slate-300">{startup.tagline}</p>
              <div className="flex items-center gap-4 mt-3">
                <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-lg ${
                  startup.status === 'Portfolio' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {startup.status}
                </span>
                <span className="text-sm text-slate-400">{startup.sector}</span>
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-400">{startup.stage}</span>
                <span className="text-sm text-slate-400">•</span>
                <span className="text-sm text-slate-400">{startup.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-slate-400">Deal Score</div>
              <div className={`text-4xl font-bold ${
                startup.score >= 85 ? 'text-emerald-400' :
                startup.score >= 75 ? 'text-blue-400' :
                startup.score >= 65 ? 'text-amber-400' :
                'text-slate-400'
              }`}>
                {startup.score}
              </div>
              <div className="text-xs text-slate-500 mt-1">{startup.dealStage}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">ARR</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    ${(startup.metrics.arr / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-emerald-400 mt-1">
                    {startup.metrics.revenueGrowth}% growth
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Customers</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    {startup.metrics.customers.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    {startup.metrics.churn}% churn
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Runway</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    {startup.metrics.runway}mo
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    ${(startup.metrics.burnRate / 1000).toFixed(0)}K/mo burn
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">LTV:CAC</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    {(startup.metrics.ltv / startup.metrics.cac).toFixed(1)}x
                  </div>
                  <div className="text-xs text-slate-400 mt-1">
                    ${(startup.metrics.cac / 1000).toFixed(0)}K CAC
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <MetricsChart startup={startup} />
              </div>
            </div>

            {/* Financials */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Financials</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Valuation</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    ${(startup.financials.valuation / 1000000).toFixed(0)}M
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Raising</div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    ${(startup.financials.raising / 1000000).toFixed(1)}M
                  </div>
                </div>
                {startup.financials.invested && (
                  <>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Our Investment</div>
                      <div className="mt-1 text-2xl font-bold text-emerald-400">
                        ${(startup.financials.invested / 1000000).toFixed(1)}M
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Ownership</div>
                      <div className="mt-1 text-2xl font-bold text-emerald-400">
                        {startup.financials.ownership?.toFixed(1)}%
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Team */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Team</h2>
              <div className="space-y-4">
                {startup.team.map((member, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-lg font-bold text-slate-400">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{member.name}</div>
                      <div className="text-sm text-slate-400">{member.role}</div>
                      <div className="text-sm text-slate-500 mt-1">{member.background}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traction */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Traction Highlights</h2>
              <ul className="space-y-2">
                {startup.traction.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">✓</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">Risk Factors</h2>
              <ul className="space-y-2">
                {startup.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-amber-400 mt-1">⚠</span>
                    <span className="text-slate-300">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Investment Thesis */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Investment Thesis</h2>
              <p className="text-sm text-slate-300 leading-relaxed">{startup.thesis}</p>
            </div>

            {/* AI Analysis */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">AI Due Diligence</h2>
              <AIAnalysis startup={startup} />
            </div>

            {/* Quick Info */}
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-xl p-6">
              <h2 className="text-lg font-bold text-white mb-4">Company Info</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-slate-500">Founded</div>
                  <div className="text-white font-medium">{startup.founded}</div>
                </div>
                <div>
                  <div className="text-slate-500">Location</div>
                  <div className="text-white font-medium">{startup.location}</div>
                </div>
                <div>
                  <div className="text-slate-500">Website</div>
                  <a 
                    href={startup.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    {startup.website.replace('https://', '')}
                  </a>
                </div>
                {startup.financials.investmentDate && (
                  <div>
                    <div className="text-slate-500">Investment Date</div>
                    <div className="text-white font-medium">
                      {new Date(startup.financials.investmentDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

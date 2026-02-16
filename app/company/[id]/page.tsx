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
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 relative">
      {/* Ambient Background Blobs */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/15 blur-[150px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[130px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <header className="border-b border-white/10 bg-white/[0.04] backdrop-blur-2xl sticky top-0 z-50">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-blue-400 mb-4 inline-flex items-center gap-2 transition-colors font-[family-name:var(--font-inter)]">
            <span>←</span> Back to Dashboard
          </Link>
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mt-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                {/* Company Logo Placeholder */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 ${
                  startup.status === 'Portfolio' 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                    : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                }`}>
                  {startup.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                    {startup.name}
                  </h1>
                </div>
              </div>
              <p className="mt-2 text-base sm:text-lg text-slate-300 font-[family-name:var(--font-inter)]">
                {startup.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <span className={`inline-flex px-3 py-1.5 text-sm font-semibold rounded-full border ${
                  startup.status === 'Portfolio' 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                    : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                }`}>
                  {startup.status}
                </span>
                <span className="text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                  {startup.sector}
                </span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                  {startup.stage}
                </span>
                <span className="text-sm text-slate-500">•</span>
                <span className="text-sm text-slate-400 font-[family-name:var(--font-inter)]">
                  {startup.location}
                </span>
              </div>
            </div>
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] px-6 py-4 text-center flex-shrink-0">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                Deal Score
              </div>
              <div className={`text-5xl font-bold font-[family-name:var(--font-jetbrains-mono)] tabular-nums ${
                startup.score >= 85 ? 'text-emerald-400' :
                startup.score >= 75 ? 'text-blue-400' :
                startup.score >= 65 ? 'text-amber-400' :
                'text-slate-400'
              }`}>
                {startup.score}
              </div>
              <div className="text-xs text-slate-500 mt-2 font-[family-name:var(--font-inter)]">
                {startup.dealStage}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.5s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                Financial Performance
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    ARR
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    ${(startup.metrics.arr / 1000000).toFixed(1)}M
                  </div>
                  <div className="text-xs text-emerald-400 mt-1.5 font-semibold font-[family-name:var(--font-inter)]">
                    {startup.metrics.revenueGrowth}% growth
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    Customers
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    {startup.metrics.customers.toLocaleString()}
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-[family-name:var(--font-inter)]">
                    {startup.metrics.churn}% churn
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    Runway
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    {startup.metrics.runway}mo
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-[family-name:var(--font-inter)]">
                    ${(startup.metrics.burnRate / 1000).toFixed(0)}K/mo burn
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    LTV:CAC
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    {(startup.metrics.ltv / startup.metrics.cac).toFixed(1)}x
                  </div>
                  <div className="text-xs text-slate-400 mt-1.5 font-[family-name:var(--font-inter)]">
                    ${(startup.metrics.cac / 1000).toFixed(0)}K CAC
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <MetricsChart startup={startup} />
              </div>
            </div>

            {/* Financials */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.6s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                Financial Structure
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    Valuation
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    ${(startup.financials.valuation / 1000000).toFixed(0)}M
                  </div>
                </div>
                <div className="relative overflow-hidden bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-xl p-5">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                    Raising
                  </div>
                  <div className="text-2xl font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                    ${(startup.financials.raising / 1000000).toFixed(1)}M
                  </div>
                </div>
                {startup.financials.invested && (
                  <>
                    <div className="relative overflow-hidden bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-5">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                      <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                        Our Investment
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                        ${(startup.financials.invested / 1000000).toFixed(1)}M
                      </div>
                    </div>
                    <div className="relative overflow-hidden bg-emerald-500/5 backdrop-blur-xl border border-emerald-500/20 rounded-xl p-5">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
                      <div className="text-xs text-emerald-400 uppercase tracking-wider font-semibold mb-2 font-[family-name:var(--font-inter)]">
                        Ownership
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                        {startup.financials.ownership?.toFixed(1)}%
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Team */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.7s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                Executive Team
              </h2>
              <div className="space-y-5">
                {startup.team.map((member, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition-colors border border-white/[0.06]">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-lg font-bold text-white flex-shrink-0 font-[family-name:var(--font-space-grotesk)]">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-white font-[family-name:var(--font-space-grotesk)]">
                        {member.name}
                      </div>
                      <div className="text-sm text-blue-400 mt-0.5 font-[family-name:var(--font-inter)]">
                        {member.role}
                      </div>
                      <div className="text-sm text-slate-400 mt-2 leading-relaxed font-[family-name:var(--font-inter)]">
                        {member.background}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Traction */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.8s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                Market Traction
              </h2>
              <ul className="space-y-3">
                {startup.traction.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                    <span className="text-emerald-400 mt-0.5 flex-shrink-0 text-lg">✓</span>
                    <span className="text-slate-300 leading-relaxed font-[family-name:var(--font-inter)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.9s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-xl font-bold text-white mb-6 font-[family-name:var(--font-space-grotesk)]">
                Risk Assessment
              </h2>
              <ul className="space-y-3">
                {startup.risks.map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.03] transition-colors">
                    <span className="text-amber-400 mt-0.5 flex-shrink-0 text-lg">⚠</span>
                    <span className="text-slate-300 leading-relaxed font-[family-name:var(--font-inter)]">
                      {risk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {/* Investment Thesis */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.5s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-lg font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                Thesis Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-[family-name:var(--font-inter)]">
                {startup.thesis}
              </p>
            </div>

            {/* AI Analysis */}
            <div className="animate-[fadeIn_0.6s_ease-out]">
              <h2 className="text-lg font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                AI Analysis
              </h2>
              <AIAnalysis startup={startup} />
            </div>

            {/* Quick Info */}
            <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)] p-6 animate-[fadeIn_0.7s_ease-out]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h2 className="text-lg font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
                Company Information
              </h2>
              <div className="space-y-4 text-sm">
                <div className="pb-3 border-b border-white/10">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                    Founded
                  </div>
                  <div className="text-white font-medium font-[family-name:var(--font-inter)]">
                    {startup.founded}
                  </div>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                    Location
                  </div>
                  <div className="text-white font-medium font-[family-name:var(--font-inter)]">
                    {startup.location}
                  </div>
                </div>
                <div className="pb-3 border-b border-white/10">
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                    Website
                  </div>
                  <a 
                    href={startup.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 font-medium transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {startup.website.replace('https://', '')}
                  </a>
                </div>
                {startup.financials.investmentDate && (
                  <div>
                    <div className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1 font-[family-name:var(--font-inter)]">
                      Investment Date
                    </div>
                    <div className="text-white font-medium font-[family-name:var(--font-inter)]">
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

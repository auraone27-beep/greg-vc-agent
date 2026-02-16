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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-300 mb-3 inline-block">
            ← Back to dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Deal Pipeline</h1>
              <p className="mt-1 text-sm text-slate-400">{pipeline.length} active opportunities</p>
            </div>
            <div className="flex gap-3">
              <div className="text-center px-4">
                <div className="text-xs text-slate-500">Due Diligence</div>
                <div className="text-2xl font-bold text-white">{byStage['Due Diligence'].length}</div>
              </div>
              <div className="text-center px-4 border-l border-slate-800">
                <div className="text-xs text-slate-500">Partner Meeting</div>
                <div className="text-2xl font-bold text-white">{byStage['Partner Meeting'].length}</div>
              </div>
              <div className="text-center px-4 border-l border-slate-800">
                <div className="text-xs text-slate-500">Avg Score</div>
                <div className="text-2xl font-bold text-white">
                  {Math.round(pipeline.reduce((acc, s) => acc + s.score, 0) / pipeline.length)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {Object.entries(byStage).map(([stage, companies]) => 
          companies.length > 0 && (
            <div key={stage} className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-white">{stage}</h2>
                <span className="text-sm text-slate-400">{companies.length} companies</span>
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
                          Sector
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
                          Valuation
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Raising
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                          Score
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                      {companies
                        .sort((a, b) => b.score - a.score)
                        .map((startup) => (
                          <tr key={startup.id} className="hover:bg-slate-800/30">
                            <td className="px-6 py-4">
                              <Link href={`/company/${startup.id}`} className="block">
                                <div className="font-semibold text-white">{startup.name}</div>
                                <div className="text-sm text-slate-400 truncate max-w-xs">
                                  {startup.tagline}
                                </div>
                              </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-300">{startup.sector}</td>
                            <td className="px-6 py-4 text-sm text-slate-300">{startup.stage}</td>
                            <td className="px-6 py-4 text-sm font-semibold text-white">
                              ${(startup.metrics.arr / 1000000).toFixed(1)}M
                            </td>
                            <td className="px-6 py-4">
                              <span className={`text-sm font-semibold ${
                                startup.metrics.revenueGrowth > 500 ? 'text-emerald-400' :
                                startup.metrics.revenueGrowth > 300 ? 'text-emerald-500' :
                                'text-blue-400'
                              }`}>
                                {startup.metrics.revenueGrowth}%
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-300">
                              ${(startup.financials.valuation / 1000000).toFixed(0)}M
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-300">
                              ${(startup.financials.raising / 1000000).toFixed(1)}M
                            </td>
                            <td className="px-6 py-4">
                              <span className={`text-sm font-bold ${
                                startup.score >= 85 ? 'text-emerald-400' :
                                startup.score >= 75 ? 'text-blue-400' :
                                startup.score >= 65 ? 'text-amber-400' :
                                'text-slate-400'
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
        )}
      </main>
    </div>
  );
}

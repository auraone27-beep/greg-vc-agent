'use client';

import { Startup } from '@/lib/data/deals';

export default function MetricsChart({ startup }: { startup: Startup }) {
  const metrics = [
    { label: 'Revenue Growth', value: startup.metrics.revenueGrowth, max: 1000, color: 'emerald' },
    { label: 'Customer Growth', value: Math.min(startup.metrics.revenueGrowth * 0.8, 800), max: 1000, color: 'blue' },
    { label: 'LTV:CAC Ratio', value: (startup.metrics.ltv / startup.metrics.cac) * 10, max: 200, color: 'violet' },
    { label: 'Gross Margin', value: 75, max: 100, color: 'cyan' },
  ];

  return (
    <div className="space-y-4">
      {metrics.map((metric) => (
        <div key={metric.label}>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-slate-400">{metric.label}</span>
            <span className="text-xs font-semibold text-white">
              {metric.label.includes('Ratio') ? `${(metric.value / 10).toFixed(1)}x` : 
               metric.label.includes('Margin') ? `${metric.value}%` : `${Math.round(metric.value)}%`}
            </span>
          </div>
          <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-${metric.color}-500 rounded-full transition-all`}
              style={{ width: `${Math.min((metric.value / metric.max) * 100, 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

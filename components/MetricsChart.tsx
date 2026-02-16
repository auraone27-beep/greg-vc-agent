'use client';

import { Startup } from '@/lib/data/deals';

export default function MetricsChart({ startup }: { startup: Startup }) {
  const metrics = [
    { 
      label: 'Revenue Growth', 
      value: startup.metrics.revenueGrowth, 
      max: 1000, 
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-500/10'
    },
    { 
      label: 'Customer Growth', 
      value: Math.min(startup.metrics.revenueGrowth * 0.8, 800), 
      max: 1000, 
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    { 
      label: 'LTV:CAC Ratio', 
      value: (startup.metrics.ltv / startup.metrics.cac) * 10, 
      max: 200, 
      color: 'from-violet-500 to-violet-600',
      bgColor: 'bg-violet-500/10'
    },
    { 
      label: 'Gross Margin', 
      value: 75, 
      max: 100, 
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-500/10'
    },
  ];

  return (
    <div className="space-y-5">
      {metrics.map((metric) => {
        const percentage = Math.min((metric.value / metric.max) * 100, 100);
        const displayValue = metric.label.includes('Ratio') 
          ? `${(metric.value / 10).toFixed(1)}x` 
          : metric.label.includes('Margin') 
          ? `${metric.value}%` 
          : `${Math.round(metric.value)}%`;
        
        return (
          <div key={metric.label} className="group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                {metric.label}
              </span>
              <span className="text-sm font-bold text-white font-[family-name:var(--font-jetbrains-mono)] tabular-nums">
                {displayValue}
              </span>
            </div>
            <div className={`h-2.5 ${metric.bgColor} rounded-full overflow-hidden relative`}>
              <div 
                className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-700 ease-out group-hover:scale-x-105 origin-left`}
                style={{ width: `${percentage}%` }}
              />
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

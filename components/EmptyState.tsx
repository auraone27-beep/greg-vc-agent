import Link from "next/link";

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
    variant?: "primary" | "secondary";
  };
  variant?: "default" | "subtle";
}

export function EmptyState({ 
  icon, 
  title, 
  description, 
  action,
  variant = "default" 
}: EmptyStateProps) {
  const baseClasses = variant === "default" 
    ? "glass-card p-16 text-center relative overflow-hidden"
    : "text-center py-16 px-8 relative";

  return (
    <div className={baseClasses}>
      {/* Ambient glow effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className="w-64 h-64 border-8 border-blue-500/30 rounded-full animate-pulse" />
      </div>
      
      <div className="relative">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20 mb-6">
          {icon}
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">
          {title}
        </h3>
        
        <p className="text-slate-400 mb-8 max-w-md mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
          {description}
        </p>
        
        {action && (
          <Link
            href={action.href}
            className={`inline-flex px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              action.variant === "secondary" || !action.variant
                ? "bg-white/10 backdrop-blur-xl text-white border border-white/10 hover:bg-white/15 hover:border-white/20 hover:shadow-lg"
                : "bg-emerald-600/90 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/20"
            }`}
          >
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}

// Pre-configured empty states for specific pages

export function PipelineEmptyState() {
  return (
    <EmptyState
      icon={
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
      title="Deal flow initialization"
      description="Sourcing engine active. Premium opportunities will surface here as they pass initial screening criteria."
      action={{
        label: "View Portfolio Companies",
        href: "/portfolio",
        variant: "primary"
      }}
    />
  );
}

export function PortfolioEmptyState() {
  return (
    <EmptyState
      icon={
        <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      }
      title="Portfolio under construction"
      description="Closed investments will appear here. Review active opportunities in the deal pipeline."
      action={{
        label: "Explore Deal Flow",
        href: "/pipeline",
        variant: "secondary"
      }}
    />
  );
}

export function CompanyNotFoundState() {
  return (
    <EmptyState
      icon={
        <svg className="w-10 h-10 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      title="Company not found"
      description="The requested company profile could not be located. It may have been removed or the URL might be incorrect."
      action={{
        label: "Back to Dashboard",
        href: "/",
        variant: "primary"
      }}
    />
  );
}

export function SearchEmptyState({ query }: { query?: string }) {
  return (
    <EmptyState
      icon={
        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      title="No results found"
      description={query 
        ? `No companies match your search for "${query}". Try adjusting your filters or search terms.`
        : "No companies match your current filters. Try adjusting your criteria."
      }
      variant="subtle"
    />
  );
}

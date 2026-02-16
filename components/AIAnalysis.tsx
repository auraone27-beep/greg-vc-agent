'use client';

import { Startup } from '@/lib/data/deals';
import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function AIAnalysis({ startup }: { startup: Startup }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `I'm your AI due diligence assistant for ${startup.name}. I can help analyze metrics, market positioning, risks, and investment thesis. What would you like to explore?`
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    setTimeout(() => {
      const response = generateResponse(userMessage, startup);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-[500px] glass-card">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto space-y-4 p-6">
        {messages.map((message, idx) => (
          <div
            key={idx}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-[slideIn_0.3s_ease-out]`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-5 py-3 ${
                message.role === 'user'
                  ? 'bg-blue-600/90 text-white border border-blue-500/50 shadow-lg shadow-blue-500/20'
                  : 'bg-white/10 backdrop-blur-xl text-slate-100 border border-white/10'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap leading-relaxed font-[family-name:var(--font-inter)]">
                {message.content}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start animate-[slideIn_0.3s_ease-out]">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
                <span className="text-sm text-slate-400 ml-1 font-[family-name:var(--font-inter)]">
                  Analyzing...
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex gap-3 p-6 border-t border-white/10 bg-white/5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about metrics, risks, market positioning..."
          className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all font-[family-name:var(--font-inter)]"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 bg-blue-600/90 text-white text-sm font-semibold rounded-xl hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-[family-name:var(--font-inter)]"
        >
          Send
        </button>
      </form>
    </div>
  );
}

function generateResponse(query: string, startup: Startup): string {
  const q = query.toLowerCase();

  if (q.includes('metric') || q.includes('kpi') || q.includes('number')) {
    const ltvCac = (startup.metrics.ltv / startup.metrics.cac).toFixed(1);
    return `Key metrics analysis for ${startup.name}:

📊 Revenue: $${(startup.metrics.arr / 1000000).toFixed(1)}M ARR (${startup.metrics.revenueGrowth}% growth)
👥 Customers: ${startup.metrics.customers.toLocaleString()} (${startup.metrics.churn}% churn)
💰 Unit Economics: LTV:CAC of ${ltvCac}x (target: >3x)
⏱️ Runway: ${startup.metrics.runway} months ($${(startup.metrics.burnRate / 1000).toFixed(0)}K/mo burn)

${startup.metrics.revenueGrowth > 300 ? '🚀 Exceptional growth trajectory' : 
  startup.metrics.revenueGrowth > 200 ? '✅ Strong growth' : 
  '⚠️ Growth rate below portfolio average'}

${parseFloat(ltvCac) > 10 ? '🎯 Excellent unit economics' : 
  parseFloat(ltvCac) > 5 ? '✅ Solid unit economics' : 
  '⚠️ Unit economics need improvement'}`;
  }

  if (q.includes('risk') || q.includes('concern') || q.includes('worry')) {
    return `Risk assessment for ${startup.name}:

${startup.risks.map((risk, idx) => `${idx + 1}. ${risk}`).join('\n')}

Mitigation strategies:
• Diversify customer base to reduce concentration risk
• Focus on improving retention (current churn: ${startup.metrics.churn}%)
• ${startup.metrics.runway < 12 ? 'URGENT: Extend runway through fundraise or profitability' : 'Monitor burn rate and extend runway'}
• Build competitive moats through product differentiation

Overall risk level: ${startup.score >= 80 ? 'LOW' : startup.score >= 70 ? 'MODERATE' : 'ELEVATED'}`;
  }

  if (q.includes('team') || q.includes('founder') || q.includes('management')) {
    return `Team analysis for ${startup.name}:

${startup.team.map(member => `• ${member.name} (${member.role}): ${member.background}`).join('\n')}

Team strengths:
✅ Strong domain expertise
✅ Complementary skill sets
${startup.team.some(m => m.background.includes('Ex-') || m.background.includes('Former')) ? '✅ Big tech / industry experience' : ''}
${startup.team.length >= 3 ? '✅ Full leadership team in place' : '⚠️ Consider adding more senior leaders'}

This ${startup.team.length >= 3 ? 'well-rounded' : 'lean'} team has the ${startup.team.some(m => m.background.includes('PhD') || m.background.includes('professor')) ? 'technical depth and ' : ''}operational experience to execute.`;
  }

  if (q.includes('market') || q.includes('competition') || q.includes('tam')) {
    return `Market analysis for ${startup.name}:

Sector: ${startup.sector}
Stage: ${startup.stage}

${startup.sector === 'Enterprise SaaS' ? 'Enterprise SaaS is a $200B+ market growing 15-20% annually.' :
  startup.sector === 'Healthcare' ? 'Digital health is a $100B+ market with accelerating adoption.' :
  startup.sector === 'Fintech' ? 'Fintech is a $150B+ market with massive disruption opportunity.' :
  startup.sector === 'Climate Tech' ? 'Climate tech is estimated at $3T+ addressable market.' :
  `${startup.sector} is a growing market with significant opportunity.`}

Competitive position:
• ${startup.traction.length >= 4 ? 'Strong traction with tier-1 customers' : 'Early traction'}
• ${startup.metrics.customers > 100 ? 'Proven product-market fit' : 'Building product-market fit'}
• ${startup.metrics.churn < 10 ? 'Low churn indicates strong retention' : 'Retention needs improvement'}

${startup.score >= 80 ? 'Well-positioned to capture significant market share.' : 'Need to demonstrate stronger competitive differentiation.'}`;
  }

  if (q.includes('invest') || q.includes('recommend') || q.includes('decision') || q.includes('should')) {
    const recommendation = startup.score >= 85 ? 'STRONG BUY' :
                          startup.score >= 75 ? 'BUY' :
                          startup.score >= 65 ? 'HOLD - More Diligence' :
                          'PASS';
    
    return `Investment recommendation for ${startup.name}:

📊 Deal Score: ${startup.score}/100
🎯 Recommendation: ${recommendation}

Rationale:
${startup.score >= 80 ? '✅ Exceptional metrics with strong growth' : startup.score >= 70 ? '✅ Solid metrics and traction' : '⚠️ Metrics need improvement'}
${startup.metrics.revenueGrowth > 300 ? '✅ Hyper-growth trajectory' : ''}
${(startup.metrics.ltv / startup.metrics.cac) > 5 ? '✅ Strong unit economics' : '⚠️ Unit economics below threshold'}
${startup.metrics.churn < 10 ? '✅ Excellent retention' : '⚠️ Churn is elevated'}
${startup.metrics.runway < 10 ? '⚠️ SHORT RUNWAY - funding urgency' : ''}

${startup.status === 'Portfolio' ? 
  `Already in portfolio. Consider: ${startup.metrics.revenueGrowth > 200 ? 'Follow-on investment opportunity' : 'Monitor performance'}` :
  startup.score >= 80 ? 'Move to term sheet discussion.' :
  startup.score >= 70 ? 'Proceed with detailed due diligence.' :
  'Requires significant improvement before investment consideration.'}`;
  }

  if (q.includes('valuation') || q.includes('price') || q.includes('expensive') || q.includes('cheap')) {
    const revenueMultiple = (startup.financials.valuation / startup.metrics.arr).toFixed(1);
    return `Valuation analysis for ${startup.name}:

💰 Pre-money: $${(startup.financials.valuation / 1000000).toFixed(0)}M
📈 ARR Multiple: ${revenueMultiple}x

${parseFloat(revenueMultiple) > 15 ? '⚠️ Premium valuation - justify with growth' :
  parseFloat(revenueMultiple) > 10 ? '✅ Fair market valuation for growth' :
  '✅ Attractive valuation'}

Raising: $${(startup.financials.raising / 1000000).toFixed(1)}M
${startup.financials.invested ? `Our investment: $${(startup.financials.invested / 1000000).toFixed(1)}M (${startup.financials.ownership}% ownership)` : ''}

Comparable companies at similar stage trade at ${startup.stage === 'Seed' ? '8-12x' : startup.stage === 'Series A' ? '10-15x' : '12-20x'} ARR.

${parseFloat(revenueMultiple) < 12 && startup.metrics.revenueGrowth > 200 ? '🎯 Strong valuation relative to growth rate' : ''}`;
  }

  // Default
  return `I can help analyze ${startup.name} across several dimensions:

💰 Financial Metrics - Revenue, growth, unit economics
⚠️ Risk Factors - Key concerns and mitigation strategies
👥 Team Assessment - Founder backgrounds and experience
🏢 Market Position - TAM, competition, differentiation
📊 Investment Case - Buy/hold/pass recommendation
💵 Valuation - Price analysis and comparables

What would you like to explore?`;
}

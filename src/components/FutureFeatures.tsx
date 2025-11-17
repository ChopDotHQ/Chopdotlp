import { TrendingUp, Lock } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export function FutureFeatures() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="future-features"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black border-t border-black/5 dark:border-white/5 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">What's Next</h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            We're building features that make group finance smarter and fairer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-[#E6007A]/5 to-transparent scroll-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-[#E6007A]" />
              <h3 className="text-xl font-bold text-black dark:text-white">Group Savings Pots</h3>
              <span className="px-2 py-1 text-xs font-medium bg-[#E6007A]/20 text-[#E6007A] rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-black/70 dark:text-white/70 mb-4">
              Save together and earn DeFi yields on pooled funds via Acala integration. While saving for trips or shared expenses, your money works for you- not just sitting idle.
            </p>
            <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
              <li>✅ Earn interest on group savings</li>
              <li>✅ Acala DeFi integration</li>
              <li>✅ Automatic yield generation</li>
            </ul>
          </div>

          <div className="p-8 rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-[#E6007A]/5 to-transparent scroll-fade-in" style={{ animationDelay: '250ms' }}>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-[#E6007A]" />
              <h3 className="text-xl font-bold text-black dark:text-white">Smart Contract Escrow</h3>
              <span className="px-2 py-1 text-xs font-medium bg-[#E6007A]/20 text-[#E6007A] rounded">
                Coming Soon
              </span>
            </div>
            <p className="text-black/70 dark:text-white/70 mb-4">
              Trustless deposits that release automatically when conditions are met. Perfect for event planning, group purchases, and milestone-based payments. No middleman needed- the smart contract enforces fairness.
            </p>
            <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
              <li>✅ Event deposits (held until date)</li>
              <li>✅ Group purchases (releases on delivery)</li>
              <li>✅ Milestone payments (auto-release)</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scroll-fade-in {
          animation: scroll-fade-in 0.2s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

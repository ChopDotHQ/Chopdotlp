import { useScrollAnimation } from '../utils/useScrollAnimation';

export function Comparison() {
  const { elementRef, isVisible } = useScrollAnimation();
  const ecosystemCards = [
    {
      title: 'Polkadot App',
      role: 'Gateway & identity',
      summary: 'Onboards newcomers, issues digital IDs, offers DOT on-ramps, staking, curated news and upcoming Visa card support.',
      pairing: 'ChopDot plugs into gifting + identity so those users can coordinate value instantly.',
    },
    {
      title: 'Nova / SubWallet / Talisman',
      role: 'Asset management',
      summary: 'Multi-chain wallets for staking, crowdloans and transfers.',
      pairing: 'Keep assets there, then connect to ChopDot to settle pots with the same keys.',
    },
    {
      title: 'Venmo / Cash App / Revolut',
      role: 'Traditional fintech',
      summary: 'Custodial, geo-locked and reliant on banks or card networks. Good for simple P2P, weak for group coordination.',
      pairing: 'ChopDot is global, non-custodial and inherits on-chain transparency with no manual paybacks.',
    }
  ];

  return (
    <section
      id="comparison"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black scroll-animate border-b border-black/5 dark:border-white/5 ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Why not just use other apps?
          </h2>
          <p className="text-black/60 dark:text-white/60">
            Here's how ChopDot stacks up against traditional expense apps.
          </p>
        </div>

        <div className="overflow-x-auto scroll-fade-in" style={{ animationDelay: '150ms' }}>
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <th className="text-left py-4 px-4 font-semibold text-black dark:text-white">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-black/70 dark:text-white/70">Other apps</th>
                <th className="text-center py-4 px-4 font-semibold text-black dark:text-white">ChopDot</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  feature: 'Settlement method',
                  legacy: 'Manual bank transfer',
                  chopdot: '✅ On-chain or bank'
                },
                {
                  feature: 'Group savings / yield',
                  legacy: '❌ Not offered',
                  chopdot: '✅ DeFi yields (coming soon)'
                },
                {
                  feature: 'Receipt storage',
                  legacy: 'Centralized servers',
                  chopdot: '✅ Decentralized (Crust/IPFS)'
                },
                {
                  feature: 'Privacy & data ownership',
                  legacy: 'Platform controlled',
                  chopdot: '✅ Your data, your control'
                },
                {
                  feature: 'Blockchain transparency',
                  legacy: '❌ Hidden ledgers',
                  chopdot: '✅ Immutable records'
                },
                {
                  feature: 'Fees',
                  legacy: 'Free (monetized via data)',
                  chopdot: '✅ Transparent, waived in beta'
                }
              ].map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-black/5 dark:border-white/5 last:border-0"
                >
                  <td className="py-4 px-4 font-medium text-black dark:text-white">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-black/60 dark:text-white/60">{row.legacy}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center gap-1 text-black dark:text-white">{row.chopdot}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-center text-sm text-black/50 dark:text-white/50 mt-6 px-6">
        Demo pricing is symbolic for now. Final fees will stay low because DOT settlement is cheap by design- especially when you settle directly on Polkadot.
      </p>

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center mb-8 scroll-fade-in" style={{ animationDelay: '200ms' }}>
          <h3 className="text-3xl font-bold text-black dark:text-white mb-3">How we fit with the Polkadot stack</h3>
          <p className="text-black/60 dark:text-white/60">Complement, not compete: gateways onboard, wallets hold assets, ChopDot coordinates the group spend.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {ecosystemCards.map((card, index) => (
            <div key={card.title} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black scroll-fade-in" style={{ animationDelay: `${250 + index * 80}ms` }}>
              <p className="text-xs uppercase tracking-wide font-semibold text-[#E6007A] mb-2">{card.role}</p>
              <h4 className="text-xl font-semibold text-black dark:text-white mb-2">{card.title}</h4>
              <p className="text-sm text-black/70 dark:text-white/70 mb-3 leading-relaxed">{card.summary}</p>
              <div className="text-sm text-black/60 dark:text-white/60 bg-black/5 dark:bg-white/5 rounded-xl p-3">
                <span className="font-semibold text-black dark:text-white">ChopDot pairs by:</span> {card.pairing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

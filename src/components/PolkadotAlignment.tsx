import { useScrollAnimation } from '../utils/useScrollAnimation';
import { Share2, Layers, Zap, ShieldCheck, Smartphone, Compass, CheckCircle2, Rocket } from 'lucide-react';

export function PolkadotAlignment() {
  const { elementRef, isVisible } = useScrollAnimation();

  const roadmapHighlights = [
    {
      title: 'Parity roadmap 2024-25',
      description: 'Asynchronous Backing, Agile Coretime, Elastic Scaling and PolkaVM shrink block times, unlock flexible blockspace and welcome Solidity builders.',
      bullets: [
        'Shorter blocks = instant pot settlements',
        'Coretime markets keep fees predictable',
        'PolkaVM + Ethereum compatibility widen dev surface'
      ],
      icon: Zap
    },
    {
      title: 'Polkadot App focus',
      description: 'A community-built gateway for non-crypto friends: identity, DOT on-ramps, staking, curated Web3 news and gifting.',
      bullets: [
        'Passed Apple & Google review; awaiting Oak Security audit',
        'Gifting lets anyone send DOT without knowing wallets',
        'Next up: non-custodial Visa card + country rollouts'
      ],
      icon: Smartphone
    }
  ];

  const synergyCards = [
    {
      title: 'Gateway × Coordination',
      description: 'The Polkadot App brings new people in; ChopDot gives them something useful to do together- coordinate value with friends, squads and pop-up cities.',
      icon: Share2
    },
    {
      title: 'Wallets we plug into',
      description: 'Nova, SubWallet and Talisman excel at asset management and staking. ChopDot layers social finance on top of the wallets communities already trust.',
      icon: Layers
    },
    {
      title: 'Beyond fintech silos',
      description: 'Venmo, Cash App and Revolut are custodial, geo-locked and KYC-heavy. ChopDot is borderless, non-custodial and inherits Polkadot’s transparency.',
      icon: ShieldCheck
    }
  ];

  const futureNotes = [
    {
      title: 'Elastic Scaling ready',
      copy: 'Scaling upgrades and Agile Coretime mean ChopDot can serve festivals, DAOs or pop-up cities without clogged lanes.'
    },
    {
      title: 'Polkadot Visa card',
      copy: 'When the non-custodial card ships, we plan to let pots fund on-chain spend with a tap.'
    },
    {
      title: 'Unified experience',
      copy: 'Parity’s plan to hide “parachain” complexity matches our goal: users just feel like they’re using Polkadot-powered money that works everywhere.'
    }
  ];

  const liveToday = [
    'Wallet login with Polkadot.js, SubWallet, Talisman or WalletConnect',
    'DOT settlements on Asset Hub using balances.transferKeepAlive',
    'Supabase auth + guest mode for email users',
    'Local pots with Crust/IPFS receipt exports',
    'Responsive UI with variant toggle and beta funnels'
  ];

  const nextUp = [
    'Shared backend data so pots sync across devices',
    'Guided gifting/onboarding via privacy-friendly Polkadot identity rails (if/when available)',
    'Stablecoin savings + DeFi yields via Asset Hub and Acala',
    'Smart-contract escrow, ChopPay and merchant QR pilots',
    'Elastic Scaling readiness + full Crust audit trails'
  ];

  return (
    <section
      id="polkadot-story"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black border-b border-black/5 dark:border-white/5 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl text-black dark:text-white font-bold mb-4">
            Built for Polkadot’s next era
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-3xl mx-auto">
            ChopDot exists because the Polkadot community is making Web3 feel like the internet again: fast, sovereign, no parachain jargon. You don’t need the Polkadot App to use ChopDot- we simply stay aligned with the upgrades and gateways that are coming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {roadmapHighlights.map((card, index) => {
            const Icon = card.icon;
            return (
              <div key={card.title} className="p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black scroll-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-12 h-12 rounded-full bg-[#E6007A]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#E6007A]" />
                </div>
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">{card.title}</h3>
                <p className="text-black/70 dark:text-white/70 mb-4">{card.description}</p>
                <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-black dark:text-white text-center mb-8">
            Where ChopDot sits in the stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {synergyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 scroll-fade-in" style={{ animationDelay: `${index * 120}ms` }}>
                  <div className="w-10 h-10 rounded-full bg-[#E6007A]/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#E6007A]" />
                  </div>
                  <h4 className="text-xl font-semibold text-black dark:text-white mb-2">{card.title}</h4>
                  <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {futureNotes.map((note, index) => (
            <div key={note.title} className="p-6 rounded-xl bg-white dark:bg-black border border-black/10 dark:border-white/10 scroll-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-2 text-[#E6007A] font-semibold text-sm uppercase tracking-wide mb-3">
                <Compass className="w-4 h-4" />
                <span>{note.title}</span>
              </div>
              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{note.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black scroll-fade-in">
            <div className="flex items-center gap-2 text-[#E6007A] font-semibold text-xs uppercase tracking-wide mb-3">
              <CheckCircle2 className="w-4 h-4" />
              <span>Live today</span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Everything you can demo right now. Wallet sign-in, DOT settlement, Supabase auth, Crust receipts and the polished responsive web app already ship.
            </p>
            <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
              {liveToday.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 scroll-fade-in" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center gap-2 text-[#E6007A] font-semibold text-xs uppercase tracking-wide mb-3">
              <Rocket className="w-4 h-4" />
              <span>Next up</span>
            </div>
            <p className="text-sm text-black/70 dark:text-white/70 mb-4">
              Tied directly to Parity’s roadmap and community feedback. These are the pieces we’re building toward as education, scaling and governance land.
            </p>
            <ul className="space-y-2 text-sm text-black/60 dark:text-white/60">
              {nextUp.map((item) => (
                <li key={item}>• {item}</li>
              ))}
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

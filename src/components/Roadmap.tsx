import { useScrollAnimation } from '../utils/useScrollAnimation';
import { ArrowRight, Target, Users, Infinity } from 'lucide-react';

const phases = [
  {
    label: 'Phase 1 · Today',
    title: 'Group pots & fast receipts',
    description: 'Live today. Split anything, settle with DOT on Polkadot or bank rails, and export receipts to Crust so communities feel self-sovereign from day one.',
    bullets: ['Multi-wallet settlement', 'Exports + transparency', 'Education-first onboarding kits'],
  },
  {
    label: 'Phase 2 · Next up',
    title: 'ChopCards + guided onboarding',
    description: 'Design ChopCards so groups can swipe one shared card, auto-log the spend into the pot, and guide newcomers through the flow. When privacy-preserving IDs or gifting appear in the ecosystem, we can plug in without requiring them.',
    bullets: ['Optional identity bridge (e.g., Polkadot App)', 'Auto-add card purchases to pots', 'Self-serve playbooks for organizers'],
  },
  {
    label: 'Phase 3',
    title: 'Stable savings & merchant rails',
    description: 'Asset Hub stablecoins + Acala yield pots keep pooled funds productive, while QR/POS pilots and the Polkadot Visa card let events settle quickly.',
    bullets: ['USDC/USDT pots', 'Yield routing + reporting', 'Merchant/venue payouts'],
  },
  {
    label: 'Phase 4',
    title: 'Programmable communities',
    description: 'Micro-subscriptions, creator tipping and API hooks that stitch ChopDot into DAO tooling. Subject to change as scaling features like Elastic Coretime evolve, but always aimed at education + sovereignty.',
    bullets: ['Recurring flows', 'Creator & DAO APIs', 'Elastic Scaling-ready infra'],
  }
];

const values = [
  { title: 'Mission', text: 'Enable fair, transparent and near-real-time group finance on Polkadot so communities can coordinate value without custodians or borders.' },
  { title: 'Vision', text: 'Money coordination should feel as easy as sending a message- sovereign, interoperable and censorship-resistant.' },
  { title: 'Values', text: 'Sovereignty · Privacy · User-owned data · Open collaboration.' }
];

export function Roadmap() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section
      id="roadmap"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black border-b border-black/5 dark:border-white/5 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl text-black dark:text-white font-bold mb-4">
            Roadmap & Vision
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-3xl mx-auto">
            Every Parity upgrade unlocks something new for ChopDot. We’re building the social coordination layer that rides on top of the Polkadot App, Asset Hub and future Visa card.
          </p>
          <p className="text-xs text-black/50 dark:text-white/50 max-w-2xl mx-auto mt-3">
            These phases are directional and will flex with community feedback, education needs and Polkadot’s scaling roadmap- but each step keeps pushing self-sovereign group finance forward.
          </p>
        </div>

        <div className="space-y-6">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black scroll-fade-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#E6007A]">{phase.label}</span>
                <div className="flex items-center gap-2 text-sm text-black/50 dark:text-white/50">
                  <ArrowRight className="w-4 h-4" />
                  <span>Building toward sovereign coordination</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-black dark:text-white mb-3">{phase.title}</h3>
              <p className="text-black/70 dark:text-white/70 mb-4">{phase.description}</p>
              <ul className="text-sm text-black/60 dark:text-white/60 grid sm:grid-cols-3 gap-2">
                {phase.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-[#E6007A] mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div key={value.title} className="p-6 rounded-2xl bg-black/5 dark:bg-white/5 text-left scroll-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-center gap-2 mb-3 text-[#E6007A] uppercase text-xs tracking-wide font-semibold">
                {index === 0 ? <Users className="w-4 h-4" /> : index === 1 ? <Infinity className="w-4 h-4" /> : <Target className="w-4 h-4" />}
                <span>{value.title}</span>
              </div>
              <p className="text-sm text-black/70 dark:text-white/70 leading-relaxed">{value.text}</p>
            </div>
          ))}
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

import { Zap, Shield, Users, Plus, Receipt, BarChart3, CheckCircle2, ArrowRight, Database } from 'lucide-react';
import baliTripScreenshot from 'figma:asset/7886c174fa4d02abef2f4f5291ac0d99dfe17f82.png';
import polkadotSettlement from 'figma:asset/b077d869eeeb730c7df4c3568ced9d5f0744bc21.png';
import { useScrollAnimation } from '../utils/useScrollAnimation';

type LandingVariant = 'legacy' | 'next';

interface WhyAndHowProps {
  variant?: LandingVariant;
}

export function WhyAndHow({ variant = 'next' }: WhyAndHowProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const benefits = variant === 'legacy'
    ? [
        {
          icon: Zap,
          title: 'Instant settlement',
          description: "Close the pot, everyone's paid. No IOUs."
        },
        {
          icon: Shield,
          title: 'Blockchain receipts',
          description: 'Every transaction recorded. No "wait, who paid?"'
        },
        {
          icon: Users,
          title: 'Actually scales',
          description: 'Works for 2 roommates or 20 festival attendees.'
        }
      ]
    : [
        {
          icon: Zap,
          title: 'Instant settlement',
          description: "Close the pot, everyone's paid. No IOUs."
        },
        {
          icon: Shield,
          title: 'Your receipts, forever',
          description: 'Stored on Crust Network- decentralized, permanent, yours.'
        },
        {
          icon: Users,
          title: 'Actually scales',
          description: 'Works for 2 roommates or 20 festival attendees.'
        },
        {
          icon: Database,
          title: 'Built on Polkadot',
          description: 'Low fees, fast settlements, Web3 integrations.'
        }
      ];

  const benefitsGridClass = variant === 'next'
    ? 'grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'
    : 'grid md:grid-cols-3 gap-8 mb-20';

  const paragraphTwo =
    variant === 'next'
      ? `Here's the thing about blockchain: it's not just crypto hype. Every transaction gets recorded permanently on Polkadot and the receipts live on Crust Network- decentralized storage that means your data belongs to you, not our servers. So when someone asks "wait, did I pay for parking?" you have receipts. Literally. Even if ChopDot shuts down, your records live on. It's transparency by default, not as an afterthought.`
      : `Here's the thing about blockchain: it's not just crypto hype. Every transaction gets recorded permanently. So when someone asks "wait, did I pay for parking?" you have receipts. Literally. It's transparency by default, not as an afterthought. Whether you're splitting a dinner with 3 friends or managing expenses for 20 people at a festival, the system just works.`;

  const paragraphThree =
    variant === 'next'
      ? `Parity's 2025 roadmap- Asynchronous Backing, Agile Coretime, Elastic Scaling, PolkaVM, and a more accessible Polkadot App- means faster blocks, flexible blockspace, and Solidity compatibility. The Polkadot App focuses on onboarding and identity; ChopDot sits on top to coordinate group finance the moment those new users need to settle with friends.`
      : undefined;

  return (
    <section 
      id="story"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black relative border-b border-black/5 dark:border-white/5 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      
      {/* Subtle film grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* WHY SECTION */}
        <div className="mb-16">
          <div className="text-center mb-8 scroll-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white tracking-tight mb-4" style={{ fontWeight: 700, lineHeight: 1.1 }}>
              Why ChopDot?
            </h2>
          </div>

          {/* Prose content */}
          <div className="space-y-6 scroll-fade-in max-w-4xl mx-auto mb-12" style={{ animationDelay: '100ms' }}>
            {[ 
              'Group expenses are messy. Someone pays upfront, screenshots get lost, and settling up becomes this awkward game of "who owes who what?" ChopDot cuts through that. When you close a pot, everyone gets paid instantly- no IOUs, no mental accounting, no chasing people down three weeks later.',
              paragraphTwo,
              paragraphThree
            ]
              .filter((copy): copy is string => Boolean(copy))
              .map((copy, index) => (
                <p key={index} className="text-lg leading-relaxed text-black/80 dark:text-white/80">
                  {copy}
                </p>
              ))}
          </div>
        </div>

        {/* Benefits */}
        <div className={benefitsGridClass}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center scroll-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E6007A]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E6007A]" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="text-lg mb-2 text-black dark:text-white" style={{ fontWeight: 700 }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-16 scroll-fade-in" style={{ animationDelay: '300ms' }}>
          <div className="h-px bg-black/10 dark:bg-white/10 flex-1 max-w-xs" />
          <div className="w-2 h-2 rounded-full bg-[#E6007A] mx-4" />
          <div className="h-px bg-black/10 dark:bg-white/10 flex-1 max-w-xs" />
        </div>

        {/* HOW IT WORKS SECTION - Visual Storytelling */}
        <div className="mb-12 scroll-fade-in" style={{ animationDelay: '400ms' }} id="how-it-works">
          <h2 className="text-3xl sm:text-4xl text-black dark:text-white tracking-tight mb-3 text-center" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            How it works
          </h2>
          <p className="text-black/50 dark:text-white/50 text-sm max-w-xl mx-auto text-center">
            Follow a Bali trip from creation to settlement.
          </p>
        </div>

        {/* Visual Story Flow */}
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Part 1: Create & Track */}
          <div className="scroll-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Steps 1-2 */}
              <div className="space-y-8 order-2 lg:order-1">
                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#E6007A] flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                      01
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Plus className="w-5 h-5 text-[#E6007A]" strokeWidth={2} />
                      <h3 className="text-xl text-black dark:text-white" style={{ fontWeight: 700 }}>
                        Create Pot
                      </h3>
                    </div>
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      Name your group pot and invite members. In this case, "Bali Trip" with friends splitting vacation costs.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center lg:justify-start">
                  <ArrowRight className="w-5 h-5 text-[#E6007A]/50" strokeWidth={2} />
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#E6007A] flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                      02
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Receipt className="w-5 h-5 text-[#E6007A]" strokeWidth={2} />
                      <h3 className="text-xl text-black dark:text-white" style={{ fontWeight: 700 }}>
                        Add Expenses
                      </h3>
                    </div>
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      Track who paid for what- accommodation, food, activities. Each expense gets logged with who covered it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Screenshot: Bali Trip Pot */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Subtle glow */}
                  <div 
                    className="absolute inset-0 rounded-xl blur-[40px] opacity-15"
                    style={{
                      background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Screenshot */}
                  <div className="relative rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-black shadow-xl" style={{ maxWidth: '280px' }}>
                    <img
                      src={baliTripScreenshot}
                      alt="Bali Trip pot showing expenses and who paid what"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Pink accent */}
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#E6007A] shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Connecting Line */}
          <div className="flex justify-center scroll-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-12 bg-gradient-to-b from-[#E6007A]/20 to-[#E6007A]/50" />
              <div className="w-2 h-2 rounded-full bg-[#E6007A]" />
              <div className="w-px h-12 bg-gradient-to-b from-[#E6007A]/50 to-[#E6007A]/20" />
            </div>
          </div>

        {/* Part 2: Review & Settle */}
        <div className="scroll-fade-in" style={{ animationDelay: '700ms' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Screenshot: Settlement */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Subtle glow */}
                  <div 
                    className="absolute inset-0 rounded-xl blur-[40px] opacity-15"
                    style={{
                      background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Screenshot */}
                  <div className="relative rounded-xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-black shadow-xl" style={{ maxWidth: '280px' }}>
                    <img
                      src={polkadotSettlement}
                      alt="Polkadot blockchain settlement showing instant on-chain confirmation"
                      className="w-full h-auto"
                    />
                  </div>

                  {/* Pink accent */}
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#E6007A] shadow-lg" />
                </div>
              </div>

              {/* Steps 3-4 */}
              <div className="space-y-8">
                {/* Step 3 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#E6007A] flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                      03
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-5 h-5 text-[#E6007A]" strokeWidth={2} />
                      <h3 className="text-xl text-black dark:text-white" style={{ fontWeight: 700 }}>
                        Review Balances
                      </h3>
                    </div>
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      ChopDot automatically calculates who owes what. Everyone sees the breakdown before settling.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center lg:justify-start">
                  <ArrowRight className="w-5 h-5 text-[#E6007A]/50" strokeWidth={2} />
                </div>

                {/* Step 4 */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#E6007A] flex items-center justify-center text-white" style={{ fontWeight: 600 }}>
                      04
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-[#E6007A]" strokeWidth={2} />
                      <h3 className="text-xl text-black dark:text-white" style={{ fontWeight: 700 }}>
                        Settle On-Chain
                      </h3>
                    </div>
                    <p className="text-black/70 dark:text-white/70 leading-relaxed">
                      Close the pot and settle instantly on Polkadot. Every transaction gets recorded on the blockchain- transparent, permanent, done.
                    </p>
          </div>
        </div>

        {variant === 'next' && (
          <div className="mt-16 scroll-fade-in" style={{ animationDelay: '500ms' }}>
            <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
              Powered by the Polkadot Ecosystem
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 rounded-lg bg-black/5 dark:bg-white/5">
                <h4 className="font-semibold mb-2 text-black dark:text-white">Polkadot</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Low-fee settlements in DOT and USDC
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-black/5 dark:bg-white/5">
                <h4 className="font-semibold mb-2 text-black dark:text-white">Crust Network</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  Decentralized receipt storage- your data, forever
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-black/5 dark:bg-white/5">
                <h4 className="font-semibold mb-2 text-black dark:text-white">Acala</h4>
                <p className="text-sm text-black/60 dark:text-white/60">
                  DeFi yields on group savings (coming soon)
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
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

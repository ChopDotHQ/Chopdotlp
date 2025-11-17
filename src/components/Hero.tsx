import { Button } from './ui/button';
import dashboardScreenshot from 'figma:asset/180bfc8e80372d9c9d7a7766a8c533f2e3674ee8.png';
import { useScrollAnimation } from '../utils/useScrollAnimation';

type HeroVariant = 'legacy' | 'next';

interface HeroProps {
  variant?: HeroVariant;
}

export function Hero({ variant = 'next' }: HeroProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const subheading =
    variant === 'legacy'
      ? 'Split expenses. On-chain.'
      : 'Group expenses settle fast on Polkadot (blocks land in a few seconds). Fewer IOUs, fewer awkward reminders.';
  const showPolkadotBadge = variant === 'next';
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative overflow-hidden min-h-[96vh] flex items-center bg-white dark:bg-black scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      {/* Subtle film grain texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Minimal Background - Subtle pink glow only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/2 right-1/3 w-[600px] h-[600px] rounded-full blur-[150px] opacity-5 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite'
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            
            {/* Headline - Large bold typography with sequential animation */}
            <h1 
              className="tracking-tight text-black dark:text-white"
              style={{ 
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.15
              }}
            >
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0ms' }}>
                Catch vibes,
              </span>
              {' '}
              <span className="block animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                not feelings about money
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              {subheading}
            </p>

            {showPolkadotBadge && (
              <div 
                className="flex items-center gap-2 justify-center lg:justify-start animate-fade-in-up"
                style={{ animationDelay: '150ms' }}
              >
                <div className="px-3 py-1 rounded-full bg-[#E6007A]/10 border border-[#E6007A]/20">
                  <span className="text-xs font-medium text-[#E6007A]">Built on Polkadot</span>
                </div>
              </div>
            )}

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('beta')}
                className="bg-[#E6007A] text-white px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all border-0"
                style={{ fontSize: '18px', fontWeight: 600 }}
              >
                Join Beta
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('how-it-works')}
                className="px-10 py-7 rounded-xl border-2 border-black/10 hover:border-black dark:border-white/20 dark:hover:border-white bg-transparent hover:bg-black/5 dark:hover:bg-white/5 text-black dark:text-white transition-all"
                style={{ fontSize: '18px', fontWeight: 600 }}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* App Screenshot Preview */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Faint radial glow behind screenshot */}
              <div 
                className="absolute inset-0 rounded-full blur-[100px] scale-110 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)',
                  opacity: 0.12,
                  animation: 'pulse 4s ease-in-out infinite'
                }}
              />
              
              {/* Screenshot Container */}
              <div 
                className="relative rounded-2xl overflow-hidden border-2 border-black/10 dark:border-white/10 shadow-2xl"
                style={{
                  maxWidth: '280px',
                  animation: 'floatGentle 6s ease-in-out infinite'
                }}
              >
                <img
                  src={dashboardScreenshot}
                  alt="ChopDot app dashboard showing pots and balances"
                  className="w-full h-auto"
                />
              </div>

              {/* Polkadot pink accent dot */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-[#E6007A] shadow-lg" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }

        .perspective-\[2000px\] {
          perspective: 2000px;
        }
      `}</style>
    </section>
  );
}

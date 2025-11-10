import { Plane, Home, Users, Calendar, Code2, Utensils } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export function Scenarios() {
  const { elementRef, isVisible } = useScrollAnimation();
  const scenarios = [
    {
      icon: Home,
      title: 'Roommates',
      description: 'Rent, utilities, groceries—monthly auto-split'
    },
    {
      icon: Plane,
      title: 'Group trip',
      description: 'Flights, hotels, meals—settled transparently'
    },
    {
      icon: Code2,
      title: 'Hackathon team',
      description: 'Hotel, food runs, supplies—on-chain settlement'
    },
    {
      icon: Users,
      title: 'Crypto house',
      description: 'Shared expenses, multi-sig, transparent accounting'
    },
    {
      icon: Calendar,
      title: 'Weekend getaway',
      description: 'Airbnb, activities, dinners—split instantly'
    },
    {
      icon: Utensils,
      title: 'Group dinner',
      description: '15 people, one check, zero awkwardness'
    }
  ];

  return (
    <section 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`py-[72px] bg-white dark:bg-black relative scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      
      {/* Subtle film grain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black dark:text-white tracking-tight" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            Made for real life
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Not just another expense app. Built for how groups actually spend.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {scenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black transition-all duration-250 ease-out scroll-fade-in hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E6007A]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#E6007A]" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl mb-2 text-black dark:text-white" style={{ fontWeight: 700 }}>
                  {scenario.title}
                </h3>
                <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            );
          })}
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

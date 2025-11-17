import { useScrollAnimation } from '../utils/useScrollAnimation';

export function FAQ() {
  const { elementRef, isVisible } = useScrollAnimation();
  const faqs = [
    {
      question: 'Do all members need crypto?',
      answer: 'Nope. Everyone just adds expenses; settlement options are flexible.'
    },
    {
      question: 'Why blockchain though?',
      answer: 'Permanent receipts. No "wait, did I pay?" Transparent by default, not as an afterthought.'
    },
    {
      question: 'Can I export everything?',
      answer: 'Yes. CSV/PDF exports include receipts and balances.'
    },
    {
      question: 'What if someone disagrees?',
      answer: 'Comment on any expense. Attach receipts. Everyone sees the same numbers.'
    },
    {
      question: 'What\'s the catch?',
      answer: 'No ads. No data resale. Fees are waived during beta, you only pay blockchain gas fees. After beta, small platform fees may apply (0.02–0.20 CHF per settlement).'
    },
    {
      question: 'How much does it cost?',
      answer: 'The per-pot fee you see in the demo is symbolic while we finalize pricing. Settling in DOT keeps costs low because Polkadot fees are measured in fractions of a cent, and even bank payouts will stay cheaper than most fintech options.'
    },
    {
      question: 'Is this ready to use?',
      answer: 'We\'re in beta. Join the waitlist to be first in line.'
    }
  ];

  return (
    <section 
      id="faq"
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black dark:text-white tracking-tight" style={{ fontWeight: 700, lineHeight: 1.1 }}>
            Questions, answered.
          </h2>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="scroll-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg mb-2 text-black dark:text-white" style={{ fontWeight: 700 }}>
                {faq.question}
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
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

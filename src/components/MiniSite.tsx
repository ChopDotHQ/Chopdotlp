import { Button } from './ui/button';
import { Twitter, CheckCircle2, Github } from 'lucide-react';
import logoImage from 'figma:asset/2f278e7f9aca00057cd69bc7a598aa9bac969b83.png';

const twitterUrl = 'https://x.com/chopdotapp';
const githubUrl = 'https://github.com/ChopDotHQ/ChopDot';

const steps = [
  {
    title: 'Follow on X',
    description: 'Beta drops and product updates post on @chopdotapp first.'
  },
  {
    title: 'DM “BETA”',
    description: 'Send us a DM with “BETA” so we can slot you into the next cohort.'
  },
  {
    title: 'Watch for invites',
    description: 'We announce cohorts via DM + public threads. No spam, just progress.'
  }
];

const socialLinks = [
  {
    label: 'Twitter',
    href: twitterUrl,
    Icon: Twitter
  },
  {
    label: 'GitHub',
    href: githubUrl,
    Icon: Github
  }
];

export function MiniSite() {
  const openTwitter = () => {
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10" style={{ background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)' }} />
      </div>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
        <div className="max-w-2xl w-full text-center space-y-8 sm:space-y-12">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4 animate-fade-in">
            <div className="bg-[#E6007A] px-8 py-4 rounded-2xl shadow-[0_0_30px_rgba(230,0,122,0.4)]">
              <img 
                src={logoImage} 
                alt="ChopDot" 
                className="h-10 sm:h-14 md:h-16 w-auto"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ fontWeight: 700 }}>
              Split fair. Pay transparent. <span className="text-[#E6007A]">Trust built-in.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-xl mx-auto">
              The transparent expense app for friends, teams, and communities -  built with Polkadot tech.
            </p>
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              onClick={openTwitter}
              className="bg-[#E6007A] hover:bg-[#c00068] text-white border-0 text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontWeight: 600 }}
            >
              Follow @chopdotapp
            </Button>
          </div>

          <div className="grid gap-4 text-left max-w-3xl mx-auto sm:grid-cols-3">
            {steps.map((step, idx) => (
              <div key={step.title} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-[#E6007A] font-semibold text-sm uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Step {idx + 1}</span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-10 relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
          <p className="text-white/60 text-sm sm:text-base">
            ChopDot makes fairness practical -  for friends, studios, and communities.
          </p>

          <div className="flex justify-center gap-4 sm:gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#E6007A] flex items-center justify-center transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-white/50 text-xs sm:text-sm">
            © 2025 ChopDot. Uses Polkadot technology.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

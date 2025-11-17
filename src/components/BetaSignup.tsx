import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Lock, CheckCircle2, Users, Twitter, MessageCircle, BellRing } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useScrollAnimation } from '../utils/useScrollAnimation';

type LandingVariant = 'legacy' | 'next';

interface BetaSignupProps {
  variant?: LandingVariant;
}

const twitterUrl = 'https://x.com/chopdotapp';

export function BetaSignup({ variant = 'next' }: BetaSignupProps) {
  const { elementRef, isVisible } = useScrollAnimation();
  const isLegacy = variant === 'legacy';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'user',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [signupCount, setSignupCount] = useState<number | null>(null);

  // Fetch signup count only for the legacy form
  useEffect(() => {
    if (!isLegacy) return;

    const fetchCount = async () => {
      try {
        const url = `https://${projectId}.supabase.co/functions/v1/make-server-18b870a9/beta-signups`;
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          setSignupCount(data.count || 0);
        } else {
          console.log('Counter: Server returned status', response.status);
          setSignupCount(null);
        }
      } catch (err) {
        console.log('Counter: Server not available yet (this is normal on first load)');
        setSignupCount(null);
      }
    };

    fetchCount();
    const interval = setInterval(fetchCount, 30000);
    return () => clearInterval(interval);
  }, [isLegacy]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-18b870a9/beta-signup`;
    console.log('Submitting to:', url);
    console.log('Form data:', formData);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        console.error('Beta signup error:', data.error);
        setError(data.error || 'Failed to submit. Please try again.');
        setIsSubmitting(false);
        return;
      }

      console.log('Beta signup successful!');
      setIsSubmitted(true);
      
      if (signupCount !== null) {
        setSignupCount(signupCount + 1);
      }
      
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          interest: 'user',
        });
      }, 2000);

    } catch (err) {
      console.error('Beta signup network error:', err);
      setError(`Network error: ${err instanceof Error ? err.message : 'Unknown error'}. Please try again.`);
      setIsSubmitting(false);
    }
  };

  const openTwitter = () => {
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isLegacy) {
    const steps = [
      {
        icon: Twitter,
        title: 'Follow @chopdotapp',
        description: 'Beta drops go live on X first. Following is how you raise your hand.'
      },
      {
        icon: MessageCircle,
        title: 'DM “BETA”',
        description: 'Send us a DM once you follow so we can DM you cohort invites.'
      },
      {
        icon: BellRing,
        title: 'Watch for invites',
        description: 'We announce small groups via DM + public threads as features ship.'
      }
    ];

    return (
      <section 
        id="beta"
        ref={elementRef as React.RefObject<HTMLElement>}
        className={`relative py-[72px] overflow-hidden bg-white dark:bg-black scroll-animate ${isVisible ? 'visible' : ''}`}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px]"
            style={{ background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)' }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 sm:px-8 relative">
          <div className="text-center mb-12 scroll-fade-in">
            <h2 
              className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black dark:text-white tracking-tight"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Join the beta
            </h2>
            <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto">
              We’re moving early access coordination to X. Follow us there and DM “BETA” to get the next drop.
            </p>
          </div>

          <div className="relative rounded-2xl p-10 sm:p-12 bg-white dark:bg-black border border-black/10 dark:border-white/10 scroll-fade-in">
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay rounded-2xl"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative space-y-10">
              <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="p-6 rounded-xl bg-black/5 dark:bg-white/5 text-center">
                      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#E6007A]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#E6007A]" />
                      </div>
                      <h3 className="text-lg text-black dark:text-white mb-2" style={{ fontWeight: 600 }}>
                        {step.title}
                      </h3>
                      <p className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={openTwitter}
                  className="bg-[#E6007A] text-white px-10 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all border-0"
                  style={{ fontSize: '18px', fontWeight: 600 }}
                >
                  Follow @chopdotapp
                </Button>
              </div>

              <p className="text-center text-sm text-black/60 dark:text-white/60">
                After you follow, DM us “BETA” so we can confirm your spot and send cohort dates.
              </p>
              <p className="text-center text-xs text-black/50 dark:text-white/50">
                We’ll share progress threads, feature drops, and open beta cohorts exclusively via X.
              </p>
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

  return (
    <section 
      id="beta"
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`relative py-[72px] overflow-hidden bg-white dark:bg-black scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      
      {/* Subtle pink glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, #E6007A 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 sm:px-8 relative">
        
        {/* Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black dark:text-white tracking-tight"
            style={{ fontWeight: 700, lineHeight: 1.1 }}
          >
            Join the beta
          </h2>
          <p className="text-lg sm:text-xl text-black/60 dark:text-white/60 max-w-xl mx-auto">
            Be among the first to split expenses- fairly, instantly, transparently.
          </p>
          
          {/* Signup Counter */}
          {signupCount !== null && (
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#E6007A]/10 dark:bg-[#E6007A]/20 rounded-full border border-[#E6007A]/20">
              <Users className="w-4 h-4 text-[#E6007A]" />
              <span className="text-black dark:text-white">
                <span className="font-bold">{signupCount}</span> {signupCount === 1 ? 'person' : 'people'} joined
              </span>
            </div>
          )}
        </div>

        {/* Clean Form Panel */}
        <div 
          className="relative rounded-2xl p-10 sm:p-12 bg-white dark:bg-black scroll-fade-in"
        >
          
          {/* Subtle film grain */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay rounded-2xl"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <form onSubmit={handleSubmit} className="space-y-6 relative">
            
            {/* Name Field */}
            <div>
              <Label htmlFor="name" className="text-black dark:text-white mb-2 block" style={{ fontWeight: 600 }}>
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-14 w-full px-5 bg-white dark:bg-neutral-950 border border-black/20 dark:border-white/20 focus:border-[#E6007A] dark:focus:border-[#E6007A] rounded-xl text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/40 transition-all"
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Email Field */}
            <div>
              <Label htmlFor="email" className="text-black dark:text-white mb-2 block" style={{ fontWeight: 600 }}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-14 w-full px-5 bg-white dark:bg-neutral-950 border border-black/20 dark:border-white/20 focus:border-[#E6007A] dark:focus:border-[#E6007A] rounded-xl text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/40 transition-all"
                style={{ fontSize: '16px' }}
              />
            </div>

            {/* Interest Radio Group */}
            <div className="space-y-4">
              <Label className="text-black dark:text-white mb-3 block" style={{ fontWeight: 600 }}>
                I'm interested as a...
              </Label>
              
              <RadioGroup
                value={formData.interest}
                onValueChange={(value) => setFormData({ ...formData, interest: value })}
                className="space-y-3"
              >
                <label 
                  htmlFor="user"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 cursor-pointer transition-all bg-white dark:bg-neutral-950 has-[:checked]:border-[#E6007A] has-[:checked]:bg-[#E6007A] dark:has-[:checked]:bg-white"
                >
                  <RadioGroupItem 
                    value="user" 
                    id="user"
                    className="mt-0.5 w-5 h-5 border-2 border-black/30 dark:border-white/30 data-[state=checked]:border-white data-[state=checked]:bg-[#E6007A] dark:data-[state=checked]:border-black dark:data-[state=checked]:bg-black"
                  />
                  <span 
                    className="text-black dark:text-white group-has-[:checked]:text-white dark:group-has-[:checked]:text-black leading-snug flex-1"
                    style={{ fontWeight: 500, fontSize: '15px' }}
                  >
                    User – I want to split expenses with my group
                  </span>
                </label>

                <label 
                  htmlFor="organizer"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 cursor-pointer transition-all bg-white dark:bg-neutral-950 has-[:checked]:border-[#E6007A] has-[:checked]:bg-[#E6007A] dark:has-[:checked]:bg-white"
                >
                  <RadioGroupItem 
                    value="organizer" 
                    id="organizer"
                    className="mt-0.5 w-5 h-5 border-2 border-black/30 dark:border-white/30 data-[state=checked]:border-white data-[state=checked]:bg-[#E6007A] dark:data-[state=checked]:border-black dark:data-[state=checked]:bg-black"
                  />
                  <span 
                    className="text-black dark:text-white group-has-[:checked]:text-white dark:group-has-[:checked]:text-black leading-snug flex-1"
                    style={{ fontWeight: 500, fontSize: '15px' }}
                  >
                    Organizer – I manage expenses for communities
                  </span>
                </label>

                <label 
                  htmlFor="developer"
                  className="group flex items-start gap-4 p-4 rounded-xl border border-black/20 dark:border-white/20 hover:border-black/30 dark:hover:border-white/30 cursor-pointer transition-all bg-white dark:bg-neutral-950 has-[:checked]:border-[#E6007A] has-[:checked]:bg-[#E6007A] dark:has-[:checked]:bg-white"
                >
                  <RadioGroupItem 
                    value="developer" 
                    id="developer"
                    className="mt-0.5 w-5 h-5 border-2 border-black/30 dark:border-white/30 data-[state=checked]:border-white data-[state=checked]:bg-[#E6007A] dark:data-[state=checked]:border-black dark:data-[state=checked]:bg-black"
                  />
                  <span 
                    className="text-black dark:text-white group-has-[:checked]:text-white dark:group-has-[:checked]:text-black leading-snug flex-1"
                    style={{ fontWeight: 500, fontSize: '15px' }}
                  >
                    Developer – I want to build on ChopDot
                  </span>
                </label>
              </RadioGroup>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}

            {/* Pink Button with Morph Animation */}
            <div className="pt-2">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className={`w-full h-14 rounded-xl text-white border-0 transition-all duration-200 ${
                  isSubmitted ? 'bg-green-500 hover:bg-green-500' : 'bg-[#E6007A]'
                }`}
                style={{ 
                  fontSize: '18px',
                  fontWeight: 600,
                  transform: isSubmitted ? 'scale(0.95)' : 'scale(1)'
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center justify-center gap-2 animate-button-success">
                    <CheckCircle2 className="w-6 h-6" />
                    <span>You're on the list!</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Get Early Access
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                )}
              </Button>

              {/* Trust Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-black/60 dark:text-white/60">
                <Lock className="w-4 h-4 text-[#E6007A]" />
                <span>Your data is safe and private</span>
              </div>
            </div>
          </form>
        </div>

        {/* Follow on X Section */}
        <div className="mt-12 text-center scroll-fade-in">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-black">
            <p className="text-lg text-black dark:text-white" style={{ fontWeight: 600 }}>
              Follow us on X
            </p>
            <p className="text-sm text-black/60 dark:text-white/60 max-w-sm">
              Stay updated on launch announcements, features, and Web3 community news
            </p>
            <Button
              onClick={openTwitter}
              variant="outline"
              className="gap-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              style={{ fontWeight: 600 }}
            >
              <Twitter className="w-5 h-5" />
              @chopdotapp
            </Button>
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

        @keyframes button-success {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-button-success {
          animation: button-success 0.4s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .scroll-fade-in {
            animation: none;
            opacity: 1;
            transform: none;
          }
          .animate-button-success {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

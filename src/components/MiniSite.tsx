import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Github, Twitter, MessageCircle } from 'lucide-react';
import logoImage from 'figma:asset/2f278e7f9aca00057cd69bc7a598aa9bac969b83.png';

export function MiniSite() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'user',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for joining the ChopDot Beta! We\'ll be in touch soon.');
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
              The transparent expense app for friends, teams, and communities -  powered by Polkadot.
            </p>
          </div>

          {/* CTA Button */}
          {!showForm && (
            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => setShowForm(true)}
                className="bg-[#E6007A] hover:bg-[#c00068] text-white border-0 text-lg sm:text-xl px-10 sm:px-12 py-6 sm:py-7 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                Join the Beta
              </Button>
            </div>
          )}

          {/* Signup Form */}
          {showForm && (
            <Card className="border border-white/10 bg-white/5 backdrop-blur-xl animate-fade-in">
              <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                  <div>
                    <Label htmlFor="name" className="text-white" style={{ fontWeight: 600 }}>Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#E6007A]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white" style={{ fontWeight: 600 }}>Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-1.5 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#E6007A]"
                    />
                  </div>

                  <div>
                    <Label className="mb-3 block text-white" style={{ fontWeight: 600 }}>I'm interested as a...</Label>
                    <RadioGroup
                      value={formData.interest}
                      onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="user" id="mini-user" />
                        <Label htmlFor="mini-user" className="cursor-pointer text-white/80 text-sm sm:text-base">
                          User – I want to split expenses with my group
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="organizer" id="mini-organizer" />
                        <Label htmlFor="mini-organizer" className="cursor-pointer text-white/80 text-sm sm:text-base">
                          Organizer – I manage expenses for communities
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="developer" id="mini-developer" />
                        <Label htmlFor="mini-developer" className="cursor-pointer text-white/80 text-sm sm:text-base">
                          Developer – I want to build on ChopDot
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#E6007A] hover:bg-[#c00068] text-white border-0 text-base sm:text-lg"
                      style={{ fontWeight: 600 }}
                    >
                      Get Early Access
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-10 relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5 sm:space-y-6">
          <p className="text-white/60 text-sm sm:text-base">
            ChopDot makes fairness practical -  for friends, studios, and communities.
          </p>

          <div className="flex justify-center gap-4 sm:gap-5">
            <a
              href="#"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#E6007A] flex items-center justify-center transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#E6007A] flex items-center justify-center transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-[#E6007A] flex items-center justify-center transition-all"
              aria-label="Discord"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          <p className="text-white/50 text-xs sm:text-sm">
            © 2025 ChopDot. Built on Polkadot.
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

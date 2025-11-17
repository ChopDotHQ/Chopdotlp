import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/2f278e7f9aca00057cd69bc7a598aa9bac969b83.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Story', id: 'story' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Polkadot', id: 'polkadot-story' },
    { label: 'Scenarios', id: 'scenarios' },
    { label: 'Comparison', id: 'comparison' },
    { label: 'Future', id: 'future-features' },
    { label: 'Roadmap', id: 'roadmap' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Beta', id: 'beta' }
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 relative ${
        isScrolled 
          ? 'bg-white/90 dark:bg-black/90 shadow-sm border-b border-black/10 dark:border-white/10' 
          : 'bg-white dark:bg-black border-b border-transparent'
      }`}
      style={isScrolled ? { backdropFilter: 'blur(12px)' } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-[#E6007A] px-3 py-1.5 rounded-lg">
              <img 
                src={logoImage} 
                alt="ChopDot" 
                className="h-6 sm:h-7 w-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-5 lg:gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              className="md:hidden p-2 rounded-lg border border-black/10 dark:border-white/20"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Button
              onClick={() => scrollToSection('beta')}
              className="bg-[#E6007A] text-white border-0"
              style={{ fontWeight: 600 }}
            >
              <span className="hidden sm:inline">Join Beta</span>
              <span className="sm:hidden">Join</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 px-4 pb-4 z-40">
          <div className="rounded-2xl bg-white/95 dark:bg-black/95 border border-black/10 dark:border-white/10 shadow-xl py-4 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left px-4 py-2 text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

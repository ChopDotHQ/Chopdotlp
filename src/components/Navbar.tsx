import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ThemeToggle } from './ThemeToggle';
import logoImage from 'figma:asset/2f278e7f9aca00057cd69bc7a598aa9bac969b83.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
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
          
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('comparison')}
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              Comparison
            </button>
            <button
              onClick={() => scrollToSection('beta')}
              className="text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-colors"
              style={{ fontWeight: 500 }}
            >
              Beta
            </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
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
    </nav>
  );
}

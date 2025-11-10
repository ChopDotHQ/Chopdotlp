import { Github, Twitter, FileText } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

export function Footer() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <footer 
      ref={elementRef as React.RefObject<HTMLElement>}
      className={`bg-black dark:bg-white text-white dark:text-black py-12 border-t border-white/10 dark:border-black/10 scroll-animate ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 mb-8 text-sm">
          <a 
            href="#" 
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            About
          </a>
          <a 
            href="#" 
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            Docs
          </a>
          <a 
            href="#" 
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            GitHub
          </a>
          <a 
            href="#" 
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            X
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="X / Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="Mirror"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-white/60 dark:text-black/60 text-sm">
          Built in Zurich • Powered by Polkadot • Designed for clarity.
        </p>
      </div>
    </footer>
  );
}

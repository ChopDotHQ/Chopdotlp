import { Github, Twitter, FileText } from 'lucide-react';
import { useScrollAnimation } from '../utils/useScrollAnimation';

const githubUrl = 'https://github.com/ChopDotHQ/ChopDot';
const twitterUrl = 'https://x.com/chopdotapp';

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
            href="#story" 
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            About
          </a>
          <a 
            href={`${githubUrl}#readme`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            Docs
          </a>
          <a 
            href="/privacy.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            Privacy Policy
          </a>
          <a 
            href="/terms.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            Terms of Service
          </a>
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            GitHub
          </a>
          <a 
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 dark:text-black/70 hover:text-white dark:hover:text-black transition-colors"
            style={{ fontWeight: 500 }}
          >
            X
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="X / Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 hover:bg-[#E6007A] dark:hover:bg-[#E6007A] hover:text-white flex items-center justify-center transition-all duration-250 ease-out"
            aria-label="Mirror"
          >
            <FileText className="w-4 h-4" />
          </a>
        </div>

        {/* Tagline */}
        <p className="text-white/60 dark:text-black/60 text-sm">
          Built in Zurich • Uses Polkadot technology • Designed for clarity.
        </p>
        <p className="text-white/50 dark:text-black/50 text-xs mt-2">
          Built by <a href="https://x.com/me_darealjev" target="_blank" rel="noopener noreferrer" className="underline hover:text-white dark:hover:text-black">@me_darealjev</a> &amp; <a href="https://x.com/TheMrScrooby" target="_blank" rel="noopener noreferrer" className="underline hover:text-white dark:hover:text-black">@TheMrScrooby</a>
        </p>

        <div className="mt-8 pt-8 border-t border-white/10 dark:border-black/10">
          <p className="text-xs text-white/50 dark:text-black/50 mb-2">Built with:</p>
          <div className="flex flex-wrap gap-2 justify-center text-xs text-white/60 dark:text-black/60">
            <span>React + TypeScript</span>
            <span>•</span>
            <span>Polkadot JS</span>
            <span>•</span>
            <span>Crust Network</span>
            <span>•</span>
            <span>Acala (coming)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

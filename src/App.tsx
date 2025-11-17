import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Scenarios } from './components/Scenarios';
import { WhyAndHow } from './components/WhyAndHow';
import { FAQ } from './components/FAQ';
import { BetaSignup } from './components/BetaSignup';
import { Footer } from './components/Footer';
import { MiniSite } from './components/MiniSite';
import { AdminSignups } from './components/AdminSignups';
import { Button } from './components/ui/button';
import { Target, FileText } from 'lucide-react';
import { Comparison } from './components/Comparison';
import { FutureFeatures } from './components/FutureFeatures';
import { PolkadotAlignment } from './components/PolkadotAlignment';
import { Roadmap } from './components/Roadmap';

export default function App() {
  const [viewMode, setViewMode] = useState<'full' | 'mini' | 'admin'>('full');
  const [landingVersion, setLandingVersion] = useState<'legacy' | 'next'>('next');

  // Set meta description
  useEffect(() => {
    document.title = 'ChopDot -  Effortless Group Expense Splitting';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'No more "you owe me." Split group expenses quickly with DOT on Polkadot, keep receipts, and skip awkward reminders.');

    // Add favicon
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.setAttribute('rel', 'icon');
      document.head.appendChild(favicon);
    }
    favicon.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">💸</text></svg>');
  }, []);

  // Check URL for admin route and handle unknown routes
  useEffect(() => {
    const pathname = window.location.pathname;
    
    // Handle admin route
    if (pathname === '/admin' || window.location.hash === '#/admin') {
      setViewMode('admin');
      return;
    }
    
    // Redirect any unknown routes (like /dashboard) to home
    // Only allow: /, /admin, or hash routes
    if (pathname !== '/' && pathname !== '/admin' && !pathname.startsWith('/#')) {
      // Redirect to home for any other route
      window.history.replaceState({}, '', '/');
      setViewMode('full');
      return;
    }
    
    // Default to full view for home
    setViewMode('full');
  }, []);

  // Determine initial landing version from URL search params
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const variant = searchParams.get('variant');
    if (variant === 'legacy') {
      setLandingVersion('legacy');
    } else {
      setLandingVersion('next');
    }
  }, []);

  const toggleLandingVersion = () => {
    setLandingVersion((current) => {
      const nextVariant = current === 'next' ? 'legacy' : 'next';
      const searchParams = new URLSearchParams(window.location.search);
      if (nextVariant === 'legacy') {
        searchParams.set('variant', 'legacy');
      } else {
        searchParams.delete('variant');
      }
      const query = searchParams.toString();
      const newUrl = `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`;
      window.history.replaceState({}, '', newUrl);
      return nextVariant;
    });
  };

  return (
    <>
      {/* View Mode Toggle - Fixed position */}
      {viewMode !== 'admin' && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <Button
            onClick={() => setViewMode(viewMode === 'full' ? 'mini' : 'full')}
            variant="outline"
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg border-2 hover:scale-105 transition-transform gap-2"
          >
            {viewMode === 'full' ? (
              <>
                <Target className="w-4 h-4" />
                <span>Mini Site</span>
              </>
            ) : (
              <>
                <FileText className="w-4 h-4" />
                <span>Full Page</span>
              </>
            )}
          </Button>

          <Button
            onClick={toggleLandingVersion}
            variant="outline"
            className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg border-2 hover:scale-105 transition-transform"
            style={{ fontWeight: 600 }}
          >
            {landingVersion === 'next' ? 'View Legacy Landing' : 'View New Landing'}
          </Button>
        </div>
      )}

      {/* Render based on view mode */}
      {viewMode === 'admin' ? (
        <AdminSignups />
      ) : viewMode === 'mini' ? (
        <MiniSite />
      ) : (
        <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
          <Navbar variant={landingVersion} />
          <Hero variant={landingVersion} />
          {landingVersion === 'next' ? (
            <>
              <WhyAndHow variant="next" />
              <PolkadotAlignment />
              <Scenarios />
              <Comparison />
              <FutureFeatures />
              <Roadmap />
            </>
          ) : (
            <>
              <Scenarios />
              <WhyAndHow variant="legacy" />
            </>
          )}
          <FAQ />
          <BetaSignup variant={landingVersion} />
          <Footer variant={landingVersion} />
        </div>
      )}
    </>
  );
}

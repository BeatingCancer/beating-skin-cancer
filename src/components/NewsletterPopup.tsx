import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'newsletter_popup_dismissed';

const isDesktop = () => window.innerWidth >= 768;

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [hasShown, setHasShown] = useState(false);

  const showModal = useCallback(() => {
    if (!isDismissed && !hasShown) {
      setIsVisible(true);
      setHasShown(true);
    }
  }, [isDismissed, hasShown]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
    setIsDismissed(true);
  }, []);

  useEffect(() => {
    if (isDismissed || hasShown) return;

    const timer = setTimeout(() => {
      showModal();
    }, 15000);

    return () => clearTimeout(timer);
  }, [isDismissed, hasShown, showModal]);

  useEffect(() => {
    if (isDismissed || !isDesktop() || hasShown) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (event.clientY < 10) {
        showModal();
      }
    };

    document.addEventListener('mouseleave', handleMouseMove);

    return () => {
      document.removeEventListener('mouseleave', handleMouseMove);
    };
  }, [isDismissed, hasShown, showModal]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fadeIn transform transition-transform duration-300 scale-100">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-slate/60 hover:text-slate transition-colors focus:outline-none"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        <div className="p-8 sm:p-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-navy mb-3">
            Stay Informed. Stay Protected.
          </h2>
          <p className="text-slate/80 text-lg mb-6 leading-relaxed">
            Get expert guidance on skin cancer prevention, treatment options, and the latest updates—all in plain language.
          </p>

          <div className="mb-6">
            <iframe
              src="https://newsletter.beatingskincancer.com/hp/Rj20gf-NywoxZFOkP_ZuaQ/signup"
              style={{
                width: '100%',
                borderWidth: '0px',
                backgroundColor: '#ffffff',
                height: '215px',
              }}
              title="Newsletter Signup Form"
            />
          </div>

          <button
            onClick={handleClose}
            className="text-slate/60 hover:text-slate transition-colors text-sm underline focus:outline-none"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

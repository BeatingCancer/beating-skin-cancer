import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'newsletter_popup_dismissed';

  useEffect(() => {
    const isDismissed = localStorage.getItem(STORAGE_KEY);
    if (isDismissed) {
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem(STORAGE_KEY)) {
        setIsVisible(true);
      }
    };

    if (window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-slate/60 hover:text-slate transition-colors"
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
              title="Newsletter Signup"
            />
          </div>

          <button
            onClick={handleClose}
            className="text-slate/60 hover:text-slate transition-colors text-sm underline"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

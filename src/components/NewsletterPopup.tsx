import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('newsletter-dismissed');
    if (dismissed) {
      return;
    }

    let timeoutId: number;
    let exitIntentBound = false;

    const showPopup = () => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        showPopup();
      }
    };

    timeoutId = window.setTimeout(showPopup, 15000);

    document.addEventListener('mouseout', handleExitIntent);
    exitIntentBound = true;

    return () => {
      clearTimeout(timeoutId);
      if (exitIntentBound) {
        document.removeEventListener('mouseout', handleExitIntent);
      }
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-dismissed', 'true');
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md relative animate-fadeIn">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors"
          aria-label="Close popup"
        >
          <X size={28} />
        </button>

        <div className="p-8">
          <div className="mb-6">
            <h2 className="font-serif text-3xl font-bold text-navy mb-3 leading-tight">
              Stay Informed. Stay Protected.
            </h2>
            <p className="text-slate text-base leading-relaxed">
              Get expert guidance on skin cancer prevention, treatment options, and the latest updates—all in plain language.
            </p>
          </div>

          <div className="mb-4">
            <iframe
              src="https://newsletter.beatingskincancer.com/hp/Rj20gf-NywoxZFOkP_ZuaQ/signup"
              className="w-full border-0 bg-white"
              style={{ height: '250px' }}
              title="Newsletter signup"
            />
          </div>

          <button
            onClick={handleClose}
            className="w-full text-center text-sm text-gray-500 hover:text-gray-700 hover:underline transition-colors"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

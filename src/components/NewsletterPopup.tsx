import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'newsletter_popup_dismissed';

const isDesktop = () => window.innerWidth >= 768;

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(() => {
    return typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY) === 'true';
  });
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        handleClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('newsletter_signups')
        .insert([
          {
            email: email.trim(),
            first_name: firstName.trim(),
            last_name: lastName.trim(),
          },
        ]);

      if (insertError) {
        if (insertError.code === '23505') {
          setError('This email is already subscribed!');
        } else {
          setError('Failed to subscribe. Please try again.');
        }
        console.error('Newsletter signup error:', insertError);
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          {isSuccess ? (
            <div className="mb-6 p-4 bg-teal/10 border border-teal/20 rounded-lg text-center">
              <p className="text-teal font-medium">Thank you for subscribing!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-6">
              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-slate/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal text-white px-6 py-3 rounded-lg hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          )}

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

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Navigate() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const targetUrl = 'https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator';
    const partner = searchParams.get('partner');

    const fullUrl = partner
      ? `${targetUrl}?partner=${encodeURIComponent(partner)}`
      : targetUrl;

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'partner_redirect', {
        partner_name: partner || 'none',
        destination_url: fullUrl
      });
    }

    setTimeout(() => {
      window.location.replace(fullUrl);
    }, 100);
  }, [searchParams]);

  return (
    <>
      <meta httpEquiv="refresh" content="0;url=https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator" />
      <div className="min-h-screen flex items-center justify-center bg-ivory">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-900 mx-auto"></div>
          <p className="mt-4 text-slate-600">Redirecting...</p>
        </div>
      </div>
    </>
  );
}

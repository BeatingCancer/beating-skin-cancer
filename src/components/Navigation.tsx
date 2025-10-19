import { MessageSquare, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif text-navy font-bold hover:text-teal transition-colors">
              BeatingSkinCancer.com
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-slate hover:text-teal transition-colors font-medium"
              >
                Skin Cancers
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-white rounded-lg shadow-lg border border-slate/10 py-2">
                    <Link
                      to="/melanoma"
                      className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors"
                    >
                      <div className="font-medium">Melanoma</div>
                      <div className="text-sm text-slate/60">Most serious type</div>
                    </Link>
                    <Link
                      to="/squamous-cell-carcinoma"
                      className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors"
                    >
                      <div className="font-medium">Squamous Cell Carcinoma</div>
                      <div className="text-sm text-slate/60">Second most common</div>
                    </Link>
                    <Link
                      to="/basal-cell-carcinoma"
                      className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors"
                    >
                      <div className="font-medium">Basal Cell Carcinoma</div>
                      <div className="text-sm text-slate/60">Most common type</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/prevention"
              className="text-slate hover:text-teal transition-colors font-medium"
            >
              Prevention
            </Link>
            <Link
              to="/about"
              className="text-slate hover:text-teal transition-colors font-medium"
            >
              About Us
            </Link>
            <a
              href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-teal text-white px-6 py-2.5 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
            >
              <MessageSquare size={18} />
              Chat with AI
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navy hover:text-teal transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate/10">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate/60 px-4">Explore Cancers</div>
                <Link
                  to="/melanoma"
                  className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">Melanoma</div>
                  <div className="text-sm text-slate/60">Most serious type</div>
                </Link>
                <Link
                  to="/squamous-cell-carcinoma"
                  className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">Squamous Cell Carcinoma</div>
                  <div className="text-sm text-slate/60">Second most common</div>
                </Link>
                <Link
                  to="/basal-cell-carcinoma"
                  className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="font-medium">Basal Cell Carcinoma</div>
                  <div className="text-sm text-slate/60">Most common type</div>
                </Link>
              </div>

              <Link
                to="/prevention"
                className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prevention
              </Link>

              <Link
                to="/about"
                className="block px-4 py-3 text-slate hover:bg-teal/5 hover:text-teal transition-colors rounded-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-teal text-white px-6 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium mx-4"
              >
                <MessageSquare size={18} />
                Chat with AI
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

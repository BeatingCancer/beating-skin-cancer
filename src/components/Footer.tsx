import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">BeatingSkinCancer.com</h3>
            <p className="text-white/70">
              Your trusted resource for skin cancer information and AI-powered guidance.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/about" className="hover:text-teal transition-colors">About Us</Link></li>
              <li><Link to="/questions-to-ask" className="hover:text-teal transition-colors">200 Smart Questions</Link></li>
              <li><a href="#" className="hover:text-teal transition-colors">Contact</a></li>
              <li><Link to="/privacy-policy" className="hover:text-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-teal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Disclaimer</h4>
            <p className="text-white/70 text-sm">
              This website provides general information only and does not constitute medical advice.
              Always consult with a qualified healthcare professional for diagnosis and treatment.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-white/70">
          <p>&copy; 2025 Beating Cancers. Educational purposes only. Not medical advice. View our <Link to="/privacy-policy" className="text-teal hover:underline">Privacy Policy</Link> and <Link to="/terms-of-service" className="text-teal hover:underline">Terms of Use</Link>.</p>
        </div>
      </div>
    </footer>
  );
}

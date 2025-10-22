import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CancerCards() {
  return (
    <section id="cancers" className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-navy text-center mb-4">Types of Skin Cancer</h2>
        <p className="text-center text-slate/70 mb-16 text-lg max-w-3xl mx-auto">
          Learn about different types of skin cancer, precancerous conditions, and atypical moles.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/melanoma" className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-2 w-16 bg-coral rounded-full mb-6"></div>
            <h3 className="text-2xl font-serif text-navy mb-4">Melanoma</h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              The most serious type of skin cancer that develops in melanocytes. Early detection is crucial for successful treatment.
            </p>
            <div className="flex items-center gap-2 text-teal font-medium group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={18} />
            </div>
          </Link>

          <Link to="/squamous-cell-carcinoma" className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-2 w-16 bg-teal rounded-full mb-6"></div>
            <h3 className="text-2xl font-serif text-navy mb-4">Squamous Cell Carcinoma</h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              The second most common skin cancer that can be cured if detected and treated early. Usually appears on sun-exposed areas.
            </p>
            <div className="flex items-center gap-2 text-teal font-medium group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={18} />
            </div>
          </Link>

          <Link to="/basal-cell-carcinoma" className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-2 w-16 bg-navy rounded-full mb-6"></div>
            <h3 className="text-2xl font-serif text-navy mb-4">Basal Cell Carcinoma</h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              The most common type of skin cancer. Highly treatable with excellent cure rates when detected early.
            </p>
            <div className="flex items-center gap-2 text-teal font-medium group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={18} />
            </div>
          </Link>

          <Link to="/atypical-nevi" className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="h-2 w-16 bg-sky rounded-full mb-6"></div>
            <h3 className="text-2xl font-serif text-navy mb-4">Atypical Nevi</h3>
            <p className="text-slate/70 mb-6 leading-relaxed">
              Unusual moles that may increase melanoma risk. Learn how to monitor and manage atypical nevi.
            </p>
            <div className="flex items-center gap-2 text-teal font-medium group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

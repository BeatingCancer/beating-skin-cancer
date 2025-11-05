import { Search, BookOpen, Heart } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-navy text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-6">
              <Search className="text-teal" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-navy mb-4">1. Ask Your Question</h3>
            <p className="text-slate/70 leading-relaxed">
              Sign up with ChatGPT. Start a conversation with our customized AI about your skin cancer concerns, diagnosis, or treatment options.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-6">
              <BookOpen className="text-teal" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-navy mb-4">2. Get Expert Insights</h3>
            <p className="text-slate/70 leading-relaxed">
              Receive evidence-based information drawn from the latest medical research and clinical guidelines.
            </p>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal/10 rounded-full mb-6">
              <Heart className="text-teal" size={32} />
            </div>
            <h3 className="text-2xl font-serif text-navy mb-4">3. Move Forward</h3>
            <p className="text-slate/70 leading-relaxed">
              Make informed decisions about your care with confidence and clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

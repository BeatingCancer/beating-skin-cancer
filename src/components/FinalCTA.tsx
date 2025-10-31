import { MessageSquare } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="prevention" className="py-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-navy mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="text-xl text-slate/70 mb-10 leading-relaxed">
          Whether you're newly diagnosed, exploring treatment options, or supporting a loved one,
          our AI guide is here to help you navigate every step with confidence.
        </p>
        <a
          href="https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-teal text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal/90 transition-all shadow-lg hover:shadow-xl"
        >
          <MessageSquare size={22} />
          Start Chatting Now
        </a>
        <p className="mt-8 text-slate/60 text-sm">
          This tool provides information only. Always consult your healthcare provider for medical advice.
        </p>
      </div>
    </section>
  );
}

import { Bot, Shield, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

const conversations = [
  {
    question: "What are the early warning signs of melanoma?",
    answer: "The ABCDE rule helps identify melanoma: Asymmetry, Border irregularity, Color variation, Diameter larger than 6mm, and Evolving appearance..."
  },
  {
    question: "How often should I get a skin cancer screening?",
    answer: "Annual skin exams are recommended for most adults. Those with higher risk factors or a history of skin cancer may need more frequent screenings every 3-6 months."
  },
  {
    question: "What's the difference between basal cell and squamous cell carcinoma?",
    answer: "Basal cell carcinoma grows slowly and rarely spreads, while squamous cell carcinoma grows faster and has a higher risk of spreading to other parts of the body if left untreated."
  },
  {
    question: "Can skin cancer be prevented?",
    answer: "Yes! Use broad-spectrum SPF 30+ sunscreen daily, seek shade during peak hours, wear protective clothing, avoid tanning beds, and perform regular self-examinations."
  }
];

export default function AIGuide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % conversations.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="ai-tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-navy mb-6">
              Your AI Guide, Always Here for You
            </h2>
            <p className="text-lg text-slate/70 mb-8 leading-relaxed">
              Our AI assistant is trained on the latest medical research and clinical guidelines
              to provide you with accurate, up-to-date information about skin cancer.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Bot className="text-teal" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">24/7 Availability</h3>
                  <p className="text-slate/70">Get answers to your questions anytime, day or night.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Shield className="text-teal" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Evidence-Based</h3>
                  <p className="text-slate/70">All information is backed by peer-reviewed research.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Clock className="text-teal" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Instant Responses</h3>
                  <p className="text-slate/70">No waiting rooms or appointments needed.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal/10 rounded-full flex items-center justify-center">
                    <Users className="text-teal" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Physician-Created</h3>
                  <p className="text-slate/70">Developed by board-certified physicians.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-teal/10 to-navy/5 rounded-2xl p-12 shadow-xl mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md mb-4 transition-all duration-500">
                <p className="text-slate/60 text-sm mb-2">You</p>
                <p className="text-navy">{conversations[currentIndex].question}</p>
              </div>
              <div className="bg-navy text-white rounded-xl p-6 shadow-md transition-all duration-500">
                <p className="text-white/80 text-sm mb-2">AI Assistant</p>
                <p>{conversations[currentIndex].answer}</p>
              </div>
            </div>
            <div className="text-center">
              <div className="flex flex-col items-center gap-2">
                <a
                  href="https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-lg hover:shadow-xl font-medium"
                >
                  Chat with the Navigator
                </a>
                <p className="text-sm text-slate/60">Ask questions and get clear, trusted answers — instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

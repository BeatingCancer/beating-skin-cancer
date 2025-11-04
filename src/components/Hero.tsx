import { MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-ivory via-white to-teal/5 pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDk2ODgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnpNMTEgMjVoMTB2MTBIMTFaIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy leading-tight mb-6">
            Have Questions About Skin Cancer?
          </h1>
          <p className="text-xl sm:text-2xl text-slate/80 mb-10 leading-relaxed font-light">
           Get expert answers instantly, 24/7. <br /> Our AI Educator is built by dermatologists, trained on clinical guidelines & research. 
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-teal text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-teal/90 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageSquare size={22} />
                Chat with the Navigator
              </a>
            </div>
            <p className="text-sm text-slate/60 text-center sm:text-left">
              Powered by ChatGPT (free account required)
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <div className="text-4xl font-serif text-teal mb-2">Build by Experts</div>
              <p className="text-slate/70">Created by board-certified physicians</p>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-serif text-teal mb-2">Evidence-Based</div>
              <p className="text-slate/70">Backed by the latest research</p>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-serif text-teal mb-2">Personalized</div>
              <p className="text-slate/70">Tailored guidance for your journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

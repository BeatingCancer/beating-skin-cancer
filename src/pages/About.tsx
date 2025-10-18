import { Heart, Users, Shield, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">About Us</h1>
          <p className="text-xl text-white/80">Experts dedicated to empowering you with knowledge</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-coral" size={32} />
            <h2 className="text-3xl font-serif text-navy">Our Mission</h2>
          </div>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            BeatingSkinCancer.com was created to help people facing skin cancer replace fear with clarity, and confusion with confidence. We believe that every person deserves access to trusted, easy-to-understand guidance — grounded in science, compassion, and experience.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with Beating Skin Cancer GPT
          </a>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Users className="text-teal" size={32} />
            <h2 className="text-3xl font-serif text-navy">Who We Are</h2>
          </div>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            BeatingSkinCancer.com is developed by a team of board-certified dermatology and oncology professionals with decades of experience caring for patients with melanoma, basal cell carcinoma, and squamous cell carcinoma.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Our contributors have published research in leading medical journals and helped shape national skin cancer guidelines. Together, we translate complex medical information into practical, human-centered guidance.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-coral" size={32} />
            <h2 className="text-3xl font-serif text-navy">What Makes Us Different</h2>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Shield className="text-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Built by Experts</h3>
                <p className="text-slate/80 leading-relaxed">
                  Every word, recommendation, and educational tool on this site was created or reviewed by specialists who treat skin cancer every day.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="text-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Science You Can Trust</h3>
                <p className="text-slate/80 leading-relaxed">
                  Our information aligns with the most current clinical evidence and national guidelines.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="text-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">AI That Educates, Not Replaces</h3>
                <p className="text-slate/80 leading-relaxed">
                  Our custom Skin Cancer GPT is designed to help you ask smarter questions and better understand your next steps — never to diagnose or treat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="text-teal flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-navy mb-2">Human at Heart</h3>
                <p className="text-slate/80 leading-relaxed">
                  Behind every line of code and every answer is a deep commitment to patient care and empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Ready to Learn More?</h3>
          <p className="text-white/80 mb-6">Explore our resources and chat with our AI guide</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with Beating Skin Cancer GPT
          </a>
        </div>
      </div>
    </div>
  );
}

import { Award, BookCheck, Heart, Users } from 'lucide-react';

export default function Trust() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-navy to-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-6">Why Trust Us?</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our platform combines cutting-edge AI technology with rigorous medical expertise
            to provide you with reliable, compassionate guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Award className="text-teal" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Expert-Led</h3>
            <p className="text-white/70">
              Created and reviewed by board-certified physicians specializing in oncology and dermatology.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <BookCheck className="text-teal" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Research-Backed</h3>
            <p className="text-white/70">
              Every piece of information is grounded in peer-reviewed medical literature.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Heart className="text-teal" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Compassionate</h3>
            <p className="text-white/70">
              We understand the emotional journey and provide empathetic, supportive guidance.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Users className="text-teal" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Patient-Focused</h3>
            <p className="text-white/70">
              Designed with patients in mind, making complex medical information accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

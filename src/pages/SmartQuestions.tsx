import { ArrowRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SmartQuestions() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky/10">
      <div className="h-20"></div>

      <section className="py-20 bg-gradient-to-br from-teal to-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            200 Smart Questions to Ask About Skin Cancer
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A physician-created library of questions to help you understand, prepare, and advocate for yourself at every stage
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <h2 className="text-2xl font-serif font-bold text-navy mb-4">About This Resource</h2>
          <p className="text-slate leading-relaxed mb-6">
            This comprehensive collection of questions is designed to empower you with knowledge and help you have more meaningful conversations with your healthcare team. Whether you've just been diagnosed, are living with a history of skin cancer, or want to focus on prevention, these questions can guide your learning journey.
          </p>
          <p className="text-sm text-slate/70 italic border-l-4 border-teal pl-4">
            <strong>Disclaimer:</strong> This content is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your own clinician for personalized guidance.
          </p>
        </div>

        <div className="bg-sky/5 rounded-xl p-8 mb-12 border border-teal/20">
          <h2 className="text-2xl font-serif font-bold text-navy mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <button
              onClick={() => scrollToSection('melanoma-diagnosed')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">1. Melanoma</div>
              <div className="text-sm text-slate">Just Diagnosed</div>
            </button>
            <button
              onClick={() => scrollToSection('melanoma-living')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">2. Melanoma</div>
              <div className="text-sm text-slate">Living With a History</div>
            </button>
            <button
              onClick={() => scrollToSection('bcc-diagnosed')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">3. Basal Cell Carcinoma</div>
              <div className="text-sm text-slate">Just Diagnosed</div>
            </button>
            <button
              onClick={() => scrollToSection('bcc-living')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">4. Basal Cell Carcinoma</div>
              <div className="text-sm text-slate">Living With a History</div>
            </button>
            <button
              onClick={() => scrollToSection('scc-diagnosed')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">5. Squamous Cell Carcinoma</div>
              <div className="text-sm text-slate">Just Diagnosed</div>
            </button>
            <button
              onClick={() => scrollToSection('scc-living')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">6. Squamous Cell Carcinoma</div>
              <div className="text-sm text-slate">Living With a History</div>
            </button>
            <button
              onClick={() => scrollToSection('actinic-keratosis')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">7. Actinic Keratosis</div>
              <div className="text-sm text-slate">Understanding & Managing</div>
            </button>
            <button
              onClick={() => scrollToSection('prevention')}
              className="text-left p-4 bg-white rounded-lg hover:shadow-md transition-all hover:scale-105 border border-slate/10"
            >
              <div className="font-semibold text-teal mb-1">8. Prevention</div>
              <div className="text-sm text-slate">Healthy Skin Habits</div>
            </button>
          </div>
        </div>

        <section id="melanoma-diagnosed" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Melanoma – If You've Just Been Diagnosed</h2>
            <p className="text-slate mb-6">Starter questions to help you understand your diagnosis and what comes next.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20exactly%20is%20melanoma%2C%20and%20how%20is%20it%20different%20from%20other%20skin%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What exactly is melanoma, and how is it different from other skin cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20do%20doctors%20pay%20so%20much%20attention%20to%20how%20deep%20a%20melanoma%20is%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why do doctors pay so much attention to how deep a melanoma is?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22stage%201%20vs%20stage%203%22%20mean%20in%20plain%20language%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does "stage 1 vs stage 3" mean in plain language?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Where%20in%20the%20skin%20does%20melanoma%20start%2C%20and%20why%20can%20it%20sometimes%20spread%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Where in the skin does melanoma start, and why can it sometimes spread?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20common%20is%20melanoma%2C%20and%20what%20are%20the%20main%20causes%20or%20risk%20factors%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How common is melanoma, and what are the main causes or risk factors?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=After%20a%20biopsy%20confirms%20melanoma%2C%20what%20usually%20happens%20next%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  After a biopsy confirms melanoma, what usually happens next?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Who%20are%20the%20typical%20specialists%20involved%20%E2%80%94%20and%20what%20does%20each%20one%20do%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Who are the typical specialists involved — and what does each one do?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20whether%20to%20order%20more%20tests%20or%20imaging%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide whether to order more tests or imaging?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20the%20phrase%20%22clear%20margins%22%20mean%20after%20surgery%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does the phrase "clear margins" mean after surgery?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20soon%20does%20treatment%20usually%20begin%2C%20and%20what%20factors%20affect%20timing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How soon does treatment usually begin, and what factors affect timing?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20main%20treatment%20options%20for%20early%20melanoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the main treatment options for early melanoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20difference%20between%20wide%20local%20excision%20and%20Mohs%20surgery%20for%20melanoma%20in%20situ%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the difference between wide local excision and Mohs surgery for melanoma in situ?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20if%20a%20sentinel%20lymph%20node%20biopsy%20is%20needed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide if a sentinel lymph node biopsy is needed?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20goals%20of%20immunotherapy%20and%20targeted%20therapy%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the goals of immunotherapy and targeted therapy?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20side%20effects%20from%20these%20treatments%20usually%20feel%20for%20patients%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do side effects from these treatments usually feel for patients?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20manage%20the%20stress%20or%20fear%20that%20comes%20with%20a%20melanoma%20diagnosis%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I manage the stress or fear that comes with a melanoma diagnosis?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20most%20people%20explain%20melanoma%20to%20their%20family%20or%20children%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do most people explain melanoma to their family or children?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20can%20I%20expect%20during%20recovery%20from%20surgery%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What can I expect during recovery from surgery?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20questions%20I%20should%20ask%20about%20scarring%20and%20healing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there questions I should ask about scarring and healing?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20stay%20organized%20with%20appointments%20and%20test%20results%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I stay organized with appointments and test results?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20smart%20questions%20to%20ask%20at%20my%20first%20oncology%20or%20surgery%20visit%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are smart questions to ask at my first oncology or surgery visit?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20information%20should%20I%20bring%20to%20help%20my%20doctor%20make%20the%20best%20plan%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What information should I bring to help my doctor make the best plan?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20make%20sure%20I%20understand%20my%20pathology%20report%20when%20it%27s%20explained%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I make sure I understand my pathology report when it's explained?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20pros%20and%20cons%20of%20getting%20a%20second%20opinion%20at%20a%20melanoma%20center%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the pros and cons of getting a second opinion at a melanoma center?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20take%20notes%20or%20record%20my%20visit%20so%20I%20don%27t%20miss%20important%20details%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I take notes or record my visit so I don't miss important details?
                </a>
              </li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="melanoma-living" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Melanoma – Living With a History</h2>
            <p className="text-slate mb-6">Advanced questions for long-term follow-up, prevention, and peace of mind.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20a%20typical%20follow-up%20schedule%20after%20melanoma%20treatment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is a typical follow-up schedule after melanoma treatment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20the%20risk%20of%20recurrence%20change%20over%20time%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does the risk of recurrence change over time?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20kinds%20of%20checkups%20or%20imaging%20are%20done%20for%20different%20stages%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What kinds of checkups or imaging are done for different stages?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20common%20signs%20of%20melanoma%20coming%20back%20in%20the%20skin%20or%20lymph%20nodes%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are common signs of melanoma coming back in the skin or lymph nodes?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20difference%20between%20a%20new%20melanoma%20and%20a%20recurrence%20of%20the%20old%20one%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the difference between a new melanoma and a recurrence of the old one?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20perform%20a%20useful%20self-skin%20exam%20each%20month%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I perform a useful self-skin exam each month?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20look%20for%20around%20my%20surgical%20scar%20or%20lymph-node%20area%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I look for around my surgical scar or lymph-node area?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20mole-mapping%20apps%20or%20total-body%20photos%20worth%20using%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are mole-mapping apps or total-body photos worth using?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20tell%20when%20a%20mole%20looks%20%22different%20enough%22%20to%20get%20checked%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I tell when a mole looks "different enough" to get checked?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20should%20I%20call%20the%20doctor%20versus%20wait%20for%20my%20next%20visit%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When should I call the doctor versus wait for my next visit?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20daily%20habits%20lower%20the%20chance%20of%20getting%20another%20melanoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What daily habits lower the chance of getting another melanoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20SPF%2C%20shade%2C%20and%20clothing%20work%20together%20to%20protect%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do SPF, shade, and clothing work together to protect me?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Is%20it%20safe%20to%20get%20some%20sun%20for%20vitamin%20D%20if%20I%27ve%20had%20melanoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Is it safe to get some sun for vitamin D if I've had melanoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20nicotinamide%2C%20and%20how%20does%20it%20help%20prevent%20future%20skin%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is nicotinamide, and how does it help prevent future skin cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20medications%20or%20immune%20conditions%20change%20my%20skin-cancer%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do medications or immune conditions change my skin-cancer risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20people%20cope%20with%20the%20fear%20of%20recurrence%20over%20the%20years%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do people cope with the fear of recurrence over the years?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20healthy%20ways%20to%20balance%20vigilance%20with%20peace%20of%20mind%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are healthy ways to balance vigilance with peace of mind?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20support%20groups%20or%20online%20communities%20for%20melanoma%20survivors%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there support groups or online communities for melanoma survivors?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20talk%20about%20my%20experience%20without%20feeling%20defined%20by%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I talk about my experience without feeling defined by it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20small%20milestones%20should%20I%20celebrate%20after%20treatment%20ends%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What small milestones should I celebrate after treatment ends?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20new%20treatments%20or%20clinical%20trials%20are%20changing%20melanoma%20care%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What new treatments or clinical trials are changing melanoma care?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20genetic%20testing%20for%20melanoma%20risk%20work%2C%20and%20who%20benefits%20from%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does genetic testing for melanoma risk work, and who benefits from it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20can%20my%20family%20do%20to%20get%20screened%20or%20reduce%20their%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What can my family do to get screened or reduce their risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20technology%20(AI%20skin%20scans%2C%20teledermatology)%20fit%20into%20follow-up%20care%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does technology (AI skin scans, teledermatology) fit into follow-up care?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20stay%20educated%20about%20melanoma%20without%20feeling%20overwhelmed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I stay educated about melanoma without feeling overwhelmed?
                </a>
              </li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="bcc-diagnosed" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Basal Cell Carcinoma – If You've Just Been Diagnosed</h2>
            <p className="text-slate mb-6">Essential questions for understanding your BCC and treatment options.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>What exactly is basal cell carcinoma, and how is it different from other types of skin cancer?</li>
              <li>Why do doctors say it grows slowly — does that mean I shouldn't worry?</li>
              <li>What does it mean when they say it "almost never spreads"?</li>
              <li>Are there different kinds of basal cell carcinoma, and how do they behave?</li>
              <li>How do doctors confirm that a spot is a basal cell — is biopsy always needed?</li>
              <li>After being told I have basal cell carcinoma, what are the typical next steps?</li>
              <li>How do doctors decide whether surgery, scraping, freezing, or cream treatment is best?</li>
              <li>What does it mean when they talk about "low-risk" or "high-risk" basal cell cancers?</li>
              <li>What is the difference between "clear margins" and "positive margins" on a report?</li>
              <li>Why do doctors sometimes recommend Mohs surgery instead of a regular excision?</li>
              <li>What happens during Mohs surgery, and how long does it usually take?</li>
              <li>What are the pros and cons of topical treatments like imiquimod or 5-FU?</li>
              <li>How effective is freezing (cryotherapy) or scraping and burning (ED&C)?</li>
              <li>When would radiation be used for basal cell carcinoma?</li>
              <li>What are "hedgehog inhibitors," and who might need those medicines?</li>
              <li>How can I stay calm while waiting for my procedure?</li>
              <li>What does recovery usually look like for small vs. large basal cell removals?</li>
              <li>How can I talk to my doctor about scarring or cosmetic concerns?</li>
              <li>Is it okay to ask about second opinions or treatment alternatives?</li>
              <li>What does follow-up care look like after treatment — is it lifelong?</li>
              <li>What questions should I ask before agreeing to a specific treatment?</li>
              <li>How can I make sure I understand what's written in my pathology report?</li>
              <li>What should I expect in the days right after surgery?</li>
              <li>How do I know if my wound is healing normally?</li>
              <li>What should I ask about protecting the treated area from the sun?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="bcc-living" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Basal Cell Carcinoma – Living With a History</h2>
            <p className="text-slate mb-6">Questions for ongoing monitoring and reducing future risk.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>How often should I see my dermatologist now that I've had basal cell cancer?</li>
              <li>What does "recurrence" mean, and how can I tell if one is coming back?</li>
              <li>Where on the body are recurrences most likely to appear?</li>
              <li>Why do some people develop many basal cell cancers over time?</li>
              <li>How do doctors decide if follow-up imaging or biopsy is needed again?</li>
              <li>What's the best way to check my skin at home after treatment?</li>
              <li>How can I tell the difference between a new basal cell and a healing scar?</li>
              <li>Should I take photos of my skin or use an app to track changes?</li>
              <li>What should I look for around surgical scars or graft sites?</li>
              <li>How do I know when to schedule an earlier appointment?</li>
              <li>What daily habits reduce my risk of another basal cell cancer?</li>
              <li>How much does sunscreen really help, and what kind should I use?</li>
              <li>Does taking nicotinamide actually lower the risk of new skin cancers?</li>
              <li>How important is wearing hats or sun-protective clothing every day?</li>
              <li>Are there any lifestyle or diet changes that can make my skin healthier?</li>
              <li>How do people cope with feeling self-conscious about facial scars?</li>
              <li>How do I explain repeated skin cancer treatments to family or coworkers?</li>
              <li>What's a healthy way to manage fear about "what if it comes back"?</li>
              <li>How can I rebuild confidence after having visible surgeries?</li>
              <li>What do other survivors say helped them feel normal again?</li>
              <li>What new treatments or prevention methods are being researched for BCC?</li>
              <li>How does genetics play a role in people who keep getting basal cells?</li>
              <li>What is Gorlin syndrome, and how do doctors recognize it?</li>
              <li>Are there studies or clinical trials for people with multiple basal cell cancers?</li>
              <li>How can I keep learning about skin cancer safely without getting overwhelmed?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="scc-diagnosed" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Squamous Cell Carcinoma – If You've Just Been Diagnosed</h2>
            <p className="text-slate mb-6">Key questions to understand your SCC diagnosis and treatment plan.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>What is squamous cell carcinoma, and how is it different from basal cell and melanoma?</li>
              <li>Why do doctors sometimes call SCC "more aggressive"?</li>
              <li>Does squamous cell always come from sun damage?</li>
              <li>What are common warning signs that a spot might be SCC?</li>
              <li>What does it mean if the pathology report says "well-differentiated" or "poorly differentiated"?</li>
              <li>After a biopsy confirms SCC, what are the next steps?</li>
              <li>Who are the specialists usually involved in SCC care?</li>
              <li>How do doctors decide whether the tumor is "low-risk" or "high-risk"?</li>
              <li>Why might a doctor order an MRI or CT scan for skin cancer?</li>
              <li>When do doctors recommend Mohs surgery for SCC?</li>
              <li>What are the main treatment options for SCC, and how do they differ?</li>
              <li>How does Mohs surgery work, and why is it often used for high-risk areas like the ear or lip?</li>
              <li>What is the difference between standard excision and radiation therapy?</li>
              <li>When would a lymph-node evaluation or biopsy be needed?</li>
              <li>What does "perineural invasion" mean, and how does it change treatment?</li>
              <li>How can I stay calm while waiting for my surgery or results?</li>
              <li>What should I expect during recovery after surgery on the face or scalp?</li>
              <li>How do people handle concerns about scarring or appearance?</li>
              <li>Is it normal to feel afraid that it might spread?</li>
              <li>How can I talk to my family about this without causing alarm?</li>
              <li>What questions should I ask about the size, depth, and grade of my SCC?</li>
              <li>What should I know about margin status in my pathology report?</li>
              <li>How can I prepare for my post-operative appointment?</li>
              <li>When is it reasonable to seek a second opinion for SCC?</li>
              <li>What can I do to make sure I understand all of my options clearly?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="scc-living" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Squamous Cell Carcinoma – Living With a History</h2>
            <p className="text-slate mb-6">Questions for surveillance, prevention, and managing ongoing care.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>How often should I see my dermatologist now that I've had SCC?</li>
              <li>What does "recurrence" mean for SCC, and where does it usually show up first?</li>
              <li>How does having multiple SCCs change my follow-up schedule?</li>
              <li>What are the warning signs that SCC may have spread to a lymph node?</li>
              <li>Why is SCC near the ear, lip, or scalp considered higher risk?</li>
              <li>How do I check for new or recurring SCCs on my skin?</li>
              <li>What does "field cancerization" mean, and how does it affect my care?</li>
              <li>Are there apps or photo methods to help me track new spots?</li>
              <li>How do I know when a rough patch or scar should be checked again?</li>
              <li>What should I look for if I had SCC in a radiation field or old scar?</li>
              <li>How can I reduce my risk of getting another SCC?</li>
              <li>What kind of sunscreen routine is most important for SCC prevention?</li>
              <li>Does taking nicotinamide help lower SCC risk?</li>
              <li>How does immunosuppression (from transplants or medications) increase SCC risk?</li>
              <li>Are there specific vitamins or lifestyle changes that might help my skin heal better?</li>
              <li>How can I cope with the stress of frequent skin checks and procedures?</li>
              <li>How do people stay positive when new SCCs keep appearing?</li>
              <li>What are good ways to explain to family that SCC is treatable but requires attention?</li>
              <li>How can I take care of my skin without feeling anxious about every spot?</li>
              <li>What resources exist for patients who have many SCCs each year?</li>
              <li>What new therapies are available for advanced or recurrent SCC?</li>
              <li>How does immunotherapy like cemiplimab work, and who might receive it?</li>
              <li>What do doctors mean by "locally advanced" vs "metastatic" SCC?</li>
              <li>Are there clinical trials studying better treatments for high-risk SCC?</li>
              <li>How can I stay educated about SCC without becoming overwhelmed?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="actinic-keratosis" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Actinic Keratosis – Understanding and Managing</h2>
            <p className="text-slate mb-6">Questions about precancerous lesions and how to manage them effectively.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>What is an actinic keratosis, and why do doctors call it a "precancer"?</li>
              <li>How does it form — and what does years of sun exposure actually do to the skin?</li>
              <li>How common is it to have more than one AK at the same time?</li>
              <li>What does an AK usually look or feel like on the skin?</li>
              <li>Can an actinic keratosis go away on its own, or do they always need treatment?</li>
              <li>What does it mean when doctors say an AK can "turn into" squamous cell carcinoma?</li>
              <li>How likely is that to happen, and how long does it take?</li>
              <li>Why are some people more prone to AKs than others?</li>
              <li>Does my skin type or history of tanning affect my risk?</li>
              <li>If I've had AKs treated, does that mean I'm more likely to get others later?</li>
              <li>What are the main treatments for actinic keratosis — freezing, creams, or light therapy — and how do they work?</li>
              <li>What's the difference between treating one spot at a time and "field therapy" for a whole area?</li>
              <li>How effective are creams like 5-fluorouracil, imiquimod, or diclofenac?</li>
              <li>What is photodynamic therapy (PDT), and what should I expect during it?</li>
              <li>How do doctors decide which treatment is right for me?</li>
              <li>What daily habits can lower my chances of developing new AKs?</li>
              <li>How important is sunscreen in preventing future AKs?</li>
              <li>What SPF and type of sunscreen should I use if I already have sun-damaged skin?</li>
              <li>How much do hats, clothing, and shade really help compared to sunscreen alone?</li>
              <li>Does taking nicotinamide (vitamin B3) actually help prevent AKs or new skin cancers?</li>
              <li>How often should I check my skin if I've had actinic keratoses before?</li>
              <li>What should I look for when checking areas that have been treated?</li>
              <li>When should I see a doctor again if a treated area becomes rough or red again?</li>
              <li>How do I balance protecting my skin from the sun with getting enough vitamin D?</li>
              <li>What can I do year-round to keep my skin healthier and reduce future sun damage?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <section id="prevention" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Skin Cancer Prevention & Healthy Skin Habits</h2>
            <p className="text-slate mb-6">Essential questions for protecting your skin and reducing your risk.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>Why does sun exposure cause skin cancer — what actually happens inside the skin?</li>
              <li>How much daily sunlight is too much for my skin type?</li>
              <li>What's the difference between UVA and UVB rays, and why does that matter?</li>
              <li>How does sunscreen work, and how can I tell if it's still effective?</li>
              <li>What are common myths about sun exposure or tanning that I should stop believing?</li>
              <li>What's the easiest way to make sunscreen part of my everyday routine?</li>
              <li>How much sunscreen should I apply to cover my whole face and body?</li>
              <li>How often should I reapply if I'm sweating or swimming?</li>
              <li>Does SPF 100 protect me much better than SPF 50 in real life?</li>
              <li>How do I choose between mineral and chemical sunscreens?</li>
              <li>What types of hats, shirts, and fabrics give the best UV protection?</li>
              <li>How do I check if my clothes have UPF built in, or if they need special wash-in protection?</li>
              <li>At what times of day is the sun's UV strongest?</li>
              <li>What are smart ways to enjoy outdoor activities safely?</li>
              <li>How do car windows and indoor light exposure affect UV risk?</li>
              <li>How can I learn to recognize early warning signs of skin changes?</li>
              <li>What does the "ABCDE rule" for moles stand for, and how can I use it?</li>
              <li>How often should most people do self-skin checks, and how long should it take?</li>
              <li>How do I take clear reference photos of my skin to track changes over time?</li>
              <li>When should I make a dermatology appointment even if I'm not sure something looks serious?</li>
              <li>Does diet or hydration affect how my skin responds to sun damage?</li>
              <li>What role does vitamin D play, and how can I get enough safely without sunburn?</li>
              <li>How do smoking or alcohol influence skin cancer risk?</li>
              <li>How can I help my children or family learn good sun protection habits early?</li>
              <li>What are small daily choices that add up to lifelong healthy skin?</li>
            </ol>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate/10">
              <a
                href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-teal hover:text-teal/80 transition-colors font-medium"
              >
                Ask these in our AI guide <ArrowRight size={18} />
              </a>
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-slate hover:text-navy transition-colors text-sm"
              >
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-br from-teal to-navy text-white rounded-xl p-8 text-center mb-12">
          <h2 className="text-2xl font-serif font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Use these questions with our AI guide to get personalized, physician-quality answers tailored to your situation.
          </p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-teal px-8 py-3 rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl font-semibold"
          >
            Chat with AI Guide <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

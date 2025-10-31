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
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20exactly%20is%20basal%20cell%20carcinoma%2C%20and%20how%20is%20it%20different%20from%20other%20types%20of%20skin%20cancer%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What exactly is basal cell carcinoma, and how is it different from other types of skin cancer?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20do%20doctors%20say%20it%20grows%20slowly%20%E2%80%94%20does%20that%20mean%20I%20shouldn%27t%20worry%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why do doctors say it grows slowly — does that mean I shouldn't worry?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20it%20mean%20when%20they%20say%20it%20%22almost%20never%20spreads%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does it mean when they say it "almost never spreads"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20different%20kinds%20of%20basal%20cell%20carcinoma%2C%20and%20how%20do%20they%20behave%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there different kinds of basal cell carcinoma, and how do they behave?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20confirm%20that%20a%20spot%20is%20a%20basal%20cell%20%E2%80%94%20is%20biopsy%20always%20needed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors confirm that a spot is a basal cell — is biopsy always needed?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=After%20being%20told%20I%20have%20basal%20cell%20carcinoma%2C%20what%20are%20the%20typical%20next%20steps%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  After being told I have basal cell carcinoma, what are the typical next steps?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20whether%20surgery%2C%20scraping%2C%20freezing%2C%20or%20cream%20treatment%20is%20best%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide whether surgery, scraping, freezing, or cream treatment is best?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20it%20mean%20when%20they%20talk%20about%20%22low-risk%22%20or%20%22high-risk%22%20basal%20cell%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does it mean when they talk about "low-risk" or "high-risk" basal cell cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20the%20difference%20between%20%22clear%20margins%22%20and%20%22positive%20margins%22%20on%20a%20report%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is the difference between "clear margins" and "positive margins" on a report?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20do%20doctors%20sometimes%20recommend%20Mohs%20surgery%20instead%20of%20a%20regular%20excision%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why do doctors sometimes recommend Mohs surgery instead of a regular excision?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20happens%20during%20Mohs%20surgery%2C%20and%20how%20long%20does%20it%20usually%20take%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What happens during Mohs surgery, and how long does it usually take?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20pros%20and%20cons%20of%20topical%20treatments%20like%20imiquimod%20or%205-FU%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the pros and cons of topical treatments like imiquimod or 5-FU?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20effective%20is%20freezing%20(cryotherapy)%20or%20scraping%20and%20burning%20(ED%26C)%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How effective is freezing (cryotherapy) or scraping and burning (ED&C)?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20would%20radiation%20be%20used%20for%20basal%20cell%20carcinoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When would radiation be used for basal cell carcinoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20%22hedgehog%20inhibitors%2C%22%20and%20who%20might%20need%20those%20medicines%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are "hedgehog inhibitors," and who might need those medicines?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20stay%20calm%20while%20waiting%20for%20my%20procedure%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I stay calm while waiting for my procedure?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20recovery%20usually%20look%20like%20for%20small%20vs.%20large%20basal%20cell%20removals%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does recovery usually look like for small vs. large basal cell removals?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20talk%20to%20my%20doctor%20about%20scarring%20or%20cosmetic%20concerns%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I talk to my doctor about scarring or cosmetic concerns?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Is%20it%20okay%20to%20ask%20about%20second%20opinions%20or%20treatment%20alternatives%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Is it okay to ask about second opinions or treatment alternatives?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20follow-up%20care%20look%20like%20after%20treatment%20%E2%80%94%20is%20it%20lifelong%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does follow-up care look like after treatment — is it lifelong?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20questions%20should%20I%20ask%20before%20agreeing%20to%20a%20specific%20treatment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What questions should I ask before agreeing to a specific treatment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20make%20sure%20I%20understand%20what%27s%20written%20in%20my%20pathology%20report%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I make sure I understand what's written in my pathology report?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20expect%20in%20the%20days%20right%20after%20surgery%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I expect in the days right after surgery?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20know%20if%20my%20wound%20is%20healing%20normally%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I know if my wound is healing normally?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20ask%20about%20protecting%20the%20treated%20area%20from%20the%20sun%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I ask about protecting the treated area from the sun?
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

        <section id="bcc-living" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Basal Cell Carcinoma – Living With a History</h2>
            <p className="text-slate mb-6">Questions for ongoing monitoring and reducing future risk.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20often%20should%20I%20see%20my%20dermatologist%20now%20that%20I%27ve%20had%20basal%20cell%20cancer%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How often should I see my dermatologist now that I've had basal cell cancer?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22recurrence%22%20mean%2C%20and%20how%20can%20I%20tell%20if%20one%20is%20coming%20back%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does "recurrence" mean, and how can I tell if one is coming back?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Where%20on%20the%20body%20are%20recurrences%20most%20likely%20to%20appear%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Where on the body are recurrences most likely to appear?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20do%20some%20people%20develop%20many%20basal%20cell%20cancers%20over%20time%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why do some people develop many basal cell cancers over time?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20if%20follow-up%20imaging%20or%20biopsy%20is%20needed%20again%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide if follow-up imaging or biopsy is needed again?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20best%20way%20to%20check%20my%20skin%20at%20home%20after%20treatment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the best way to check my skin at home after treatment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20tell%20the%20difference%20between%20a%20new%20basal%20cell%20and%20a%20healing%20scar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I tell the difference between a new basal cell and a healing scar?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Should%20I%20take%20photos%20of%20my%20skin%20or%20use%20an%20app%20to%20track%20changes%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Should I take photos of my skin or use an app to track changes?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20look%20for%20around%20surgical%20scars%20or%20graft%20sites%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I look for around surgical scars or graft sites?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20know%20when%20to%20schedule%20an%20earlier%20appointment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I know when to schedule an earlier appointment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20daily%20habits%20reduce%20my%20risk%20of%20another%20basal%20cell%20cancer%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What daily habits reduce my risk of another basal cell cancer?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20much%20does%20sunscreen%20really%20help%2C%20and%20what%20kind%20should%20I%20use%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How much does sunscreen really help, and what kind should I use?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20taking%20nicotinamide%20actually%20lower%20the%20risk%20of%20new%20skin%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does taking nicotinamide actually lower the risk of new skin cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20important%20is%20wearing%20hats%20or%20sun-protective%20clothing%20every%20day%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How important is wearing hats or sun-protective clothing every day?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20any%20lifestyle%20or%20diet%20changes%20that%20can%20make%20my%20skin%20healthier%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there any lifestyle or diet changes that can make my skin healthier?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20people%20cope%20with%20feeling%20self-conscious%20about%20facial%20scars%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do people cope with feeling self-conscious about facial scars?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20explain%20repeated%20skin%20cancer%20treatments%20to%20family%20or%20coworkers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I explain repeated skin cancer treatments to family or coworkers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20a%20healthy%20way%20to%20manage%20fear%20about%20%22what%20if%20it%20comes%20back%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's a healthy way to manage fear about "what if it comes back"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20rebuild%20confidence%20after%20having%20visible%20surgeries%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I rebuild confidence after having visible surgeries?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20do%20other%20survivors%20say%20helped%20them%20feel%20normal%20again%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What do other survivors say helped them feel normal again?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20new%20treatments%20or%20prevention%20methods%20are%20being%20researched%20for%20BCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What new treatments or prevention methods are being researched for BCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20genetics%20play%20a%20role%20in%20people%20who%20keep%20getting%20basal%20cells%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does genetics play a role in people who keep getting basal cells?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20Gorlin%20syndrome%2C%20and%20how%20do%20doctors%20recognize%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is Gorlin syndrome, and how do doctors recognize it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20studies%20or%20clinical%20trials%20for%20people%20with%20multiple%20basal%20cell%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there studies or clinical trials for people with multiple basal cell cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20keep%20learning%20about%20skin%20cancer%20safely%20without%20getting%20overwhelmed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I keep learning about skin cancer safely without getting overwhelmed?
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

        <section id="scc-diagnosed" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Squamous Cell Carcinoma – If You've Just Been Diagnosed</h2>
            <p className="text-slate mb-6">Key questions to understand your SCC diagnosis and treatment plan.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20squamous%20cell%20carcinoma%2C%20and%20how%20is%20it%20different%20from%20basal%20cell%20and%20melanoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is squamous cell carcinoma, and how is it different from basal cell and melanoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20do%20doctors%20sometimes%20call%20SCC%20%22more%20aggressive%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why do doctors sometimes call SCC "more aggressive"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20squamous%20cell%20always%20come%20from%20sun%20damage%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does squamous cell always come from sun damage?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20common%20warning%20signs%20that%20a%20spot%20might%20be%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are common warning signs that a spot might be SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20it%20mean%20if%20the%20pathology%20report%20says%20%22well-differentiated%22%20or%20%22poorly%20differentiated%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does it mean if the pathology report says "well-differentiated" or "poorly differentiated"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=After%20a%20biopsy%20confirms%20SCC%2C%20what%20are%20the%20next%20steps%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  After a biopsy confirms SCC, what are the next steps?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Who%20are%20the%20specialists%20usually%20involved%20in%20SCC%20care%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Who are the specialists usually involved in SCC care?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20whether%20the%20tumor%20is%20%22low-risk%22%20or%20%22high-risk%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide whether the tumor is "low-risk" or "high-risk"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20might%20a%20doctor%20order%20an%20MRI%20or%20CT%20scan%20for%20skin%20cancer%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why might a doctor order an MRI or CT scan for skin cancer?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20do%20doctors%20recommend%20Mohs%20surgery%20for%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When do doctors recommend Mohs surgery for SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20main%20treatment%20options%20for%20SCC%2C%20and%20how%20do%20they%20differ%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the main treatment options for SCC, and how do they differ?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20Mohs%20surgery%20work%2C%20and%20why%20is%20it%20often%20used%20for%20high-risk%20areas%20like%20the%20ear%20or%20lip%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does Mohs surgery work, and why is it often used for high-risk areas like the ear or lip?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20the%20difference%20between%20standard%20excision%20and%20radiation%20therapy%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is the difference between standard excision and radiation therapy?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20would%20a%20lymph-node%20evaluation%20or%20biopsy%20be%20needed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When would a lymph-node evaluation or biopsy be needed?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22perineural%20invasion%22%20mean%2C%20and%20how%20does%20it%20change%20treatment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does "perineural invasion" mean, and how does it change treatment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20stay%20calm%20while%20waiting%20for%20my%20surgery%20or%20results%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I stay calm while waiting for my surgery or results?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20expect%20during%20recovery%20after%20surgery%20on%20the%20face%20or%20scalp%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I expect during recovery after surgery on the face or scalp?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20people%20handle%20concerns%20about%20scarring%20or%20appearance%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do people handle concerns about scarring or appearance?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Is%20it%20normal%20to%20feel%20afraid%20that%20it%20might%20spread%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Is it normal to feel afraid that it might spread?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20talk%20to%20my%20family%20about%20this%20without%20causing%20alarm%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I talk to my family about this without causing alarm?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20questions%20should%20I%20ask%20about%20the%20size%2C%20depth%2C%20and%20grade%20of%20my%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What questions should I ask about the size, depth, and grade of my SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20know%20about%20margin%20status%20in%20my%20pathology%20report%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I know about margin status in my pathology report?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20prepare%20for%20my%20post-operative%20appointment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I prepare for my post-operative appointment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20is%20it%20reasonable%20to%20seek%20a%20second%20opinion%20for%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When is it reasonable to seek a second opinion for SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20can%20I%20do%20to%20make%20sure%20I%20understand%20all%20of%20my%20options%20clearly%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What can I do to make sure I understand all of my options clearly?
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

        <section id="scc-living" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Squamous Cell Carcinoma – Living With a History</h2>
            <p className="text-slate mb-6">Questions for surveillance, prevention, and managing ongoing care.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20often%20should%20I%20see%20my%20dermatologist%20now%20that%20I%27ve%20had%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How often should I see my dermatologist now that I've had SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22recurrence%22%20mean%20for%20SCC%2C%20and%20where%20does%20it%20usually%20show%20up%20first%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does "recurrence" mean for SCC, and where does it usually show up first?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20having%20multiple%20SCCs%20change%20my%20follow-up%20schedule%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does having multiple SCCs change my follow-up schedule?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20warning%20signs%20that%20SCC%20may%20have%20spread%20to%20a%20lymph%20node%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the warning signs that SCC may have spread to a lymph node?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20is%20SCC%20near%20the%20ear%2C%20lip%2C%20or%20scalp%20considered%20higher%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why is SCC near the ear, lip, or scalp considered higher risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20check%20for%20new%20or%20recurring%20SCCs%20on%20my%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I check for new or recurring SCCs on my skin?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22field%20cancerization%22%20mean%2C%20and%20how%20does%20it%20affect%20my%20care%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does "field cancerization" mean, and how does it affect my care?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20apps%20or%20photo%20methods%20to%20help%20me%20track%20new%20spots%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there apps or photo methods to help me track new spots?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20know%20when%20a%20rough%20patch%20or%20scar%20should%20be%20checked%20again%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I know when a rough patch or scar should be checked again?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20look%20for%20if%20I%20had%20SCC%20in%20a%20radiation%20field%20or%20old%20scar%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I look for if I had SCC in a radiation field or old scar?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20reduce%20my%20risk%20of%20getting%20another%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I reduce my risk of getting another SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20kind%20of%20sunscreen%20routine%20is%20most%20important%20for%20SCC%20prevention%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What kind of sunscreen routine is most important for SCC prevention?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20taking%20nicotinamide%20help%20lower%20SCC%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does taking nicotinamide help lower SCC risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20immunosuppression%20(from%20transplants%20or%20medications)%20increase%20SCC%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does immunosuppression (from transplants or medications) increase SCC risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20specific%20vitamins%20or%20lifestyle%20changes%20that%20might%20help%20my%20skin%20heal%20better%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there specific vitamins or lifestyle changes that might help my skin heal better?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20cope%20with%20the%20stress%20of%20frequent%20skin%20checks%20and%20procedures%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I cope with the stress of frequent skin checks and procedures?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20people%20stay%20positive%20when%20new%20SCCs%20keep%20appearing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do people stay positive when new SCCs keep appearing?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20good%20ways%20to%20explain%20to%20family%20that%20SCC%20is%20treatable%20but%20requires%20attention%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are good ways to explain to family that SCC is treatable but requires attention?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20take%20care%20of%20my%20skin%20without%20feeling%20anxious%20about%20every%20spot%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I take care of my skin without feeling anxious about every spot?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20resources%20exist%20for%20patients%20who%20have%20many%20SCCs%20each%20year%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What resources exist for patients who have many SCCs each year?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20new%20therapies%20are%20available%20for%20advanced%20or%20recurrent%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What new therapies are available for advanced or recurrent SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20immunotherapy%20like%20cemiplimab%20work%2C%20and%20who%20might%20receive%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does immunotherapy like cemiplimab work, and who might receive it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20do%20doctors%20mean%20by%20%22locally%20advanced%22%20vs%20%22metastatic%22%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What do doctors mean by "locally advanced" vs "metastatic" SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Are%20there%20clinical%20trials%20studying%20better%20treatments%20for%20high-risk%20SCC%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Are there clinical trials studying better treatments for high-risk SCC?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20stay%20educated%20about%20SCC%20without%20becoming%20overwhelmed%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I stay educated about SCC without becoming overwhelmed?
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

        <section id="actinic-keratosis" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Actinic Keratosis – Understanding and Managing</h2>
            <p className="text-slate mb-6">Questions about precancerous lesions and how to manage them effectively.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20an%20actinic%20keratosis%2C%20and%20why%20do%20doctors%20call%20it%20a%20%22precancer%22%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is an actinic keratosis, and why do doctors call it a "precancer"?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20it%20form%20%E2%80%94%20and%20what%20does%20years%20of%20sun%20exposure%20actually%20do%20to%20the%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does it form — and what does years of sun exposure actually do to the skin?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20common%20is%20it%20to%20have%20more%20than%20one%20AK%20at%20the%20same%20time%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How common is it to have more than one AK at the same time?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20an%20AK%20usually%20look%20or%20feel%20like%20on%20the%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does an AK usually look or feel like on the skin?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Can%20an%20actinic%20keratosis%20go%20away%20on%20its%20own%2C%20or%20do%20they%20always%20need%20treatment%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Can an actinic keratosis go away on its own, or do they always need treatment?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20it%20mean%20when%20doctors%20say%20an%20AK%20can%20%22turn%20into%22%20squamous%20cell%20carcinoma%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does it mean when doctors say an AK can "turn into" squamous cell carcinoma?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20likely%20is%20that%20to%20happen%2C%20and%20how%20long%20does%20it%20take%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How likely is that to happen, and how long does it take?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20are%20some%20people%20more%20prone%20to%20AKs%20than%20others%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why are some people more prone to AKs than others?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20my%20skin%20type%20or%20history%20of%20tanning%20affect%20my%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does my skin type or history of tanning affect my risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=If%20I%27ve%20had%20AKs%20treated%2C%20does%20that%20mean%20I%27m%20more%20likely%20to%20get%20others%20later%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  If I've had AKs treated, does that mean I'm more likely to get others later?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20the%20main%20treatments%20for%20actinic%20keratosis%20%E2%80%94%20freezing%2C%20creams%2C%20or%20light%20therapy%20%E2%80%94%20and%20how%20do%20they%20work%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are the main treatments for actinic keratosis — freezing, creams, or light therapy — and how do they work?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20difference%20between%20treating%20one%20spot%20at%20a%20time%20and%20%22field%20therapy%22%20for%20a%20whole%20area%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the difference between treating one spot at a time and "field therapy" for a whole area?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20effective%20are%20creams%20like%205-fluorouracil%2C%20imiquimod%2C%20or%20diclofenac%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How effective are creams like 5-fluorouracil, imiquimod, or diclofenac?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20is%20photodynamic%20therapy%20(PDT)%2C%20and%20what%20should%20I%20expect%20during%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What is photodynamic therapy (PDT), and what should I expect during it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20doctors%20decide%20which%20treatment%20is%20right%20for%20me%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do doctors decide which treatment is right for me?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20daily%20habits%20can%20lower%20my%20chances%20of%20developing%20new%20AKs%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What daily habits can lower my chances of developing new AKs?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20important%20is%20sunscreen%20in%20preventing%20future%20AKs%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How important is sunscreen in preventing future AKs?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20SPF%20and%20type%20of%20sunscreen%20should%20I%20use%20if%20I%20already%20have%20sun-damaged%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What SPF and type of sunscreen should I use if I already have sun-damaged skin?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20much%20do%20hats%2C%20clothing%2C%20and%20shade%20really%20help%20compared%20to%20sunscreen%20alone%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How much do hats, clothing, and shade really help compared to sunscreen alone?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20taking%20nicotinamide%20(vitamin%20B3)%20actually%20help%20prevent%20AKs%20or%20new%20skin%20cancers%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does taking nicotinamide (vitamin B3) actually help prevent AKs or new skin cancers?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20often%20should%20I%20check%20my%20skin%20if%20I%27ve%20had%20actinic%20keratoses%20before%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How often should I check my skin if I've had actinic keratoses before?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20should%20I%20look%20for%20when%20checking%20areas%20that%20have%20been%20treated%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What should I look for when checking areas that have been treated?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20should%20I%20see%20a%20doctor%20again%20if%20a%20treated%20area%20becomes%20rough%20or%20red%20again%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When should I see a doctor again if a treated area becomes rough or red again?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20balance%20protecting%20my%20skin%20from%20the%20sun%20with%20getting%20enough%20vitamin%20D%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I balance protecting my skin from the sun with getting enough vitamin D?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20can%20I%20do%20year-round%20to%20keep%20my%20skin%20healthier%20and%20reduce%20future%20sun%20damage%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What can I do year-round to keep my skin healthier and reduce future sun damage?
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

        <section id="prevention" className="mb-16 scroll-mt-24">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-3xl font-serif font-bold text-navy mb-4">Skin Cancer Prevention & Healthy Skin Habits</h2>
            <p className="text-slate mb-6">Essential questions for protecting your skin and reducing your risk.</p>
            <ol className="space-y-3 list-decimal list-inside text-slate leading-relaxed">
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Why%20does%20sun%20exposure%20cause%20skin%20cancer%20%E2%80%94%20what%20actually%20happens%20inside%20the%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Why does sun exposure cause skin cancer — what actually happens inside the skin?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20much%20daily%20sunlight%20is%20too%20much%20for%20my%20skin%20type%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How much daily sunlight is too much for my skin type?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20difference%20between%20UVA%20and%20UVB%20rays%2C%20and%20why%20does%20that%20matter%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the difference between UVA and UVB rays, and why does that matter?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20does%20sunscreen%20work%2C%20and%20how%20can%20I%20tell%20if%20it%27s%20still%20effective%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How does sunscreen work, and how can I tell if it's still effective?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20common%20myths%20about%20sun%20exposure%20or%20tanning%20that%20I%20should%20stop%20believing%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are common myths about sun exposure or tanning that I should stop believing?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%27s%20the%20easiest%20way%20to%20make%20sunscreen%20part%20of%20my%20everyday%20routine%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What's the easiest way to make sunscreen part of my everyday routine?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20much%20sunscreen%20should%20I%20apply%20to%20cover%20my%20whole%20face%20and%20body%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How much sunscreen should I apply to cover my whole face and body?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20often%20should%20I%20reapply%20if%20I%27m%20sweating%20or%20swimming%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How often should I reapply if I'm sweating or swimming?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20SPF%20100%20protect%20me%20much%20better%20than%20SPF%2050%20in%20real%20life%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does SPF 100 protect me much better than SPF 50 in real life?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20choose%20between%20mineral%20and%20chemical%20sunscreens%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I choose between mineral and chemical sunscreens?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20types%20of%20hats%2C%20shirts%2C%20and%20fabrics%20give%20the%20best%20UV%20protection%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What types of hats, shirts, and fabrics give the best UV protection?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20check%20if%20my%20clothes%20have%20UPF%20built%20in%2C%20or%20if%20they%20need%20special%20wash-in%20protection%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I check if my clothes have UPF built in, or if they need special wash-in protection?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=At%20what%20times%20of%20day%20is%20the%20sun%27s%20UV%20strongest%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  At what times of day is the sun's UV strongest?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20smart%20ways%20to%20enjoy%20outdoor%20activities%20safely%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are smart ways to enjoy outdoor activities safely?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20car%20windows%20and%20indoor%20light%20exposure%20affect%20UV%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do car windows and indoor light exposure affect UV risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20learn%20to%20recognize%20early%20warning%20signs%20of%20skin%20changes%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I learn to recognize early warning signs of skin changes?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20the%20%22ABCDE%20rule%22%20for%20moles%20stand%20for%2C%20and%20how%20can%20I%20use%20it%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What does the "ABCDE rule" for moles stand for, and how can I use it?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20often%20should%20most%20people%20do%20self-skin%20checks%2C%20and%20how%20long%20should%20it%20take%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How often should most people do self-skin checks, and how long should it take?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20I%20take%20clear%20reference%20photos%20of%20my%20skin%20to%20track%20changes%20over%20time%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do I take clear reference photos of my skin to track changes over time?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=When%20should%20I%20make%20a%20dermatology%20appointment%20even%20if%20I%27m%20not%20sure%20something%20looks%20serious%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  When should I make a dermatology appointment even if I'm not sure something looks serious?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=Does%20diet%20or%20hydration%20affect%20how%20my%20skin%20responds%20to%20sun%20damage%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  Does diet or hydration affect how my skin responds to sun damage?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20role%20does%20vitamin%20D%20play%2C%20and%20how%20can%20I%20get%20enough%20safely%20without%20sunburn%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What role does vitamin D play, and how can I get enough safely without sunburn?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20do%20smoking%20or%20alcohol%20influence%20skin%20cancer%20risk%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How do smoking or alcohol influence skin cancer risk?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=How%20can%20I%20help%20my%20children%20or%20family%20learn%20good%20sun%20protection%20habits%20early%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  How can I help my children or family learn good sun protection habits early?
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20are%20small%20daily%20choices%20that%20add%20up%20to%20lifelong%20healthy%20skin%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal hover:text-teal/80 hover:underline transition-colors"
                >
                  What are small daily choices that add up to lifelong healthy skin?
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
            Chat with the Navigator <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

import { AlertTriangle, Eye, Shield, Activity } from 'lucide-react';

export default function SquamousCellCarcinoma() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Squamous Cell Carcinoma</h1>
          <p className="text-xl text-white/80">The second most common type of skin cancer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">What is Squamous Cell Carcinoma?</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Squamous cell carcinoma (SCC) is the second most common form of skin cancer. It arises from the squamous cells that make up the middle and outer layers of the skin. While usually not life-threatening, SCC can grow large or spread to other parts of the body if not treated, causing serious complications.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Most SCCs can be cured if detected and treated early. SCC typically appears on sun-exposed areas such as the face, ears, neck, lips, and backs of the hands.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about squamous cell carcinoma</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with Beating Skin Cancer GPT
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Key Topics</h2>
          <p className="text-slate/80 mb-6">
            Explore these essential topics to better understand your squamous cell carcinoma diagnosis and treatment:
          </p>
          <div className="space-y-3">
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What are the early signs of squamous cell carcinoma and how is it different from other skin cancers?</div>
              <div className="text-sm text-slate/70">Recognizing SCC characteristics and distinguishing it from BCC and melanoma</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do doctors grade or stage an SCC and why does that matter for treatment?</div>
              <div className="text-sm text-slate/70">Understanding staging systems and how they guide treatment decisions</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What are the main treatment approaches for SCC, and what are the pros and cons of each?</div>
              <div className="text-sm text-slate/70">Comparing surgical and non-surgical options to find the best approach</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What follow-up care is required after SCC treatment?</div>
              <div className="text-sm text-slate/70">Monitoring schedules, skin checks, and long-term surveillance plans</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What increases the risk of SCC coming back or spreading to lymph nodes or other organs?</div>
              <div className="text-sm text-slate/70">Understanding high-risk features and metastasis potential</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do I perform regular skin checks for SCC and what changes should alert me?</div>
              <div className="text-sm text-slate/70">Self-examination techniques and warning signs requiring immediate attention</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">Are there special considerations for SCC in high-risk areas (ears, lips, fingers)?</div>
              <div className="text-sm text-slate/70">Why location matters and specialized treatment approaches for challenging areas</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What prevention steps and skin-care practices reduce my chance of getting another SCC?</div>
              <div className="text-sm text-slate/70">Daily habits and lifestyle strategies for long-term prevention</div>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Warning Signs</h2>
              <p className="text-slate/80 mb-4">SCC may appear as:</p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A persistent, scaly red patch with irregular borders that may bleed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>An elevated growth with a central depression that occasionally bleeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A wart-like growth that crusts and occasionally bleeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>An open sore that persists for weeks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A raised growth with a rough surface that is firm to the touch</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-teal" size={28} />
              <h2 className="text-2xl font-serif text-navy">Risk Factors</h2>
            </div>
            <ul className="space-y-3 text-slate/80">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Cumulative sun exposure over a lifetime</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Fair skin, light hair, and blue or green eyes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Use of tanning beds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of precancerous lesions (actinic keratoses)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Previous skin cancer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Weakened immune system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Chronic skin inflammation or injury</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-teal" size={28} />
              <h2 className="text-2xl font-serif text-navy">Prevention</h2>
            </div>
            <ul className="space-y-3 text-slate/80">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Apply broad-spectrum SPF 30+ sunscreen daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Reapply sunscreen every 2 hours when outdoors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Wear sun-protective clothing and hats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Avoid peak sun hours (10am-4pm)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Never use tanning beds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Examine your skin monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>See a dermatologist annually</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-teal" size={28} />
            <h2 className="text-2xl font-serif text-navy">Treatment Options</h2>
          </div>
          <p className="text-slate/80 mb-4">
            Several effective treatments are available for SCC, depending on the size, location, and aggressiveness of the tumor:
          </p>
          <ul className="space-y-3 text-slate/80">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Excisional surgery:</strong> Cutting out the tumor with a margin of normal skin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Mohs surgery:</strong> Removing the tumor layer by layer for maximum preservation of healthy tissue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Curettage and electrodesiccation:</strong> Scraping away the cancer and using electricity to destroy remaining cells</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Cryosurgery:</strong> Freezing the tumor with liquid nitrogen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Radiation therapy:</strong> For patients who cannot undergo surgery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Topical medications:</strong> For superficial SCCs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Immunotherapy or targeted therapy:</strong> For advanced cases</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about squamous cell carcinoma</p>
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

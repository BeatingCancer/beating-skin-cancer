import { AlertTriangle, Eye, Shield, Activity } from 'lucide-react';

export default function BasalCellCarcinoma() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Basal Cell Carcinoma</h1>
          <p className="text-xl text-white/80">The most common type of skin cancer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">What is Basal Cell Carcinoma?</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Basal cell carcinoma (BCC) is the most common form of skin cancer, with millions of cases diagnosed each year. It begins in the basal cells, which are located in the deepest layer of the epidermis. BCCs rarely spread to other parts of the body but can cause significant local damage if left untreated.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            BCC typically develops on sun-exposed areas, especially the head and neck. When detected early, BCC is highly treatable with excellent cure rates.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about basal cell carcinoma</p>
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
            Explore these essential topics to better understand your basal cell carcinoma diagnosis and treatment:
          </p>
          <div className="space-y-3">
          <Link to="/basal-cell-carcinoma/biopsy-meaning" className="block p-4 bg-sky/5 rounded-lg border border-teal/10 hover:bg-sky/10 hover:border-teal/30 transition-colors cursor-pointer">
              <div className="font-semibold text-teal mb-1">What does it mean if my biopsy says "basal cell carcinoma"?</div>
              <div className="text-sm text-slate/70">Understanding your diagnosis and what happens next</div>
            </Link>            
            
            
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do doctors decide which type of BCC I have (superficial, nodular, morpheaform)?</div>
              <div className="text-sm text-slate/70">Learn about the different subtypes and how they affect treatment</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What are the treatment options for basal cell carcinoma and how do I choose?</div>
              <div className="text-sm text-slate/70">Compare surgical and non-surgical options to find what's right for you</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What should I expect during recovery after BCC surgery?</div>
              <div className="text-sm text-slate/70">Timeline, wound care, and what's normal during healing</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">Can basal cell carcinoma come back after treatment — and how do I prevent it?</div>
              <div className="text-sm text-slate/70">Understanding recurrence rates and prevention strategies</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What is the risk of BCC spreading or becoming serious?</div>
              <div className="text-sm text-slate/70">Learn about BCC behavior and when to be more vigilant</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do I check my skin for basal cell carcinoma — and when should I see a doctor?</div>
              <div className="text-sm text-slate/70">Self-examination tips and warning signs that need attention</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What lifestyle or skin-care habits help reduce the chance of another basal cell carcinoma?</div>
              <div className="text-sm text-slate/70">Daily practices and prevention strategies for long-term skin health</div>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Warning Signs</h2>
              <p className="text-slate/80 mb-4">BCC can take several forms. Look for:</p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A pearly or waxy bump on the face, ears, or neck</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A flat, flesh-colored or brown scar-like lesion on the chest or back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A bleeding or scabbing sore that heals and returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>A pink growth with a slightly elevated rolled border and crusted indentation in the center</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Visible blood vessels on the growth</span>
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
                <span>Chronic sun exposure throughout life</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Fair skin that freckles or burns easily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Light-colored hair and eyes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of severe sunburns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Use of tanning beds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Older age (risk increases with age)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Family or personal history of skin cancer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Immune-suppressing medications</span>
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
                <span>Use broad-spectrum SPF 30+ sunscreen every day</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Reapply sunscreen every 2 hours outdoors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Cover up with clothing, sunglasses, and hats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Seek shade, especially during midday hours</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Avoid tanning beds entirely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Check your skin monthly for changes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Get professional skin exams regularly</span>
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
            BCC is highly treatable, especially when caught early. Treatment options include:
          </p>
          <ul className="space-y-3 text-slate/80">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Mohs surgery:</strong> The gold standard for BCC, removing cancer layer by layer with immediate microscopic examination</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Excisional surgery:</strong> Cutting out the tumor and surrounding margin of healthy skin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Curettage and electrodesiccation:</strong> Scraping the lesion and using heat to destroy remaining cells</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Cryotherapy:</strong> Freezing the tumor with liquid nitrogen</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Topical treatments:</strong> Prescription creams for superficial BCCs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Photodynamic therapy:</strong> Light-activated treatment for certain BCCs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Radiation therapy:</strong> For patients who cannot undergo surgery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Targeted therapy:</strong> For advanced or metastatic cases</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about basal cell carcinoma</p>
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

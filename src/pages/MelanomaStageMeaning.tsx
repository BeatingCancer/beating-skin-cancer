import { AlertTriangle, FileText, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MelanomaStageMeaning() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/melanoma"
            className="text-teal hover:text-teal/80 transition-colors mb-4 inline-block"
          >
            ← Back to Melanoma
          </Link>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">What Does My Melanoma Stage Mean?</h1>
          <p className="text-xl text-white/80">Understanding melanoma staging and what it means for your care</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Introduction</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Hearing the words "You have melanoma" can stop you in your tracks. Soon after, another question often follows: "What stage is it?"
          </p>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Melanoma staging is how doctors describe how deep or advanced the cancer is. Your stage helps guide treatment, estimate prognosis, and plan follow-up care. But for many patients, these medical terms—like "Stage 1A" or "Stage 3C"—can feel overwhelming at first.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            In this article, we'll break down what melanoma staging really means, how it's determined, and what each stage can tell you about your next steps.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Have Questions?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about melanoma staging</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22stage%201%20vs%20stage%203%22%20mean%20in%20plain%20language%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with Beating Skin Cancer GPT
          </a>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Target className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">How Melanoma Staging Works</h2>
              <p className="text-slate/80 mb-4">
                Melanoma is staged using a system developed by the American Joint Committee on Cancer (AJCC). This staging system is based on three main factors, often called TNM:
              </p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">T (Tumor):</span>
                  <span>How thick or deep the melanoma is under the skin (known as Breslow depth) and whether it shows ulceration—a breakdown of the skin over the tumor.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">N (Nodes):</span>
                  <span>Whether melanoma cells have spread to nearby lymph nodes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">M (Metastasis):</span>
                  <span>Whether it has spread to other organs such as the lungs, liver, brain, or distant skin areas.</span>
                </li>
              </ul>
              <p className="text-slate/80 mt-4">
                Together, these factors help assign a stage from 0 to 4 (written as Stage 0–IV).
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-serif text-navy mb-4">Stage 0 (Melanoma in Situ)</h2>
            <p className="text-slate/80 mb-4">
              This is the earliest form of melanoma. The cancer cells are confined to the top layer of skin (epidermis) and haven't invaded deeper layers.
            </p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Treatment:</strong> Usually removed completely with surgery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Outlook:</strong> Nearly 100% cure rate when fully excised.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Follow-Up:</strong> Regular skin checks to detect new or atypical moles early.</span>
              </li>
            </ul>
            <p className="text-slate/80 italic bg-sky/5 p-4 rounded-lg">
              In simple terms: Think of Stage 0 as melanoma "on the surface." It hasn't yet developed the ability to spread.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-serif text-navy mb-4">Stage I: Early Invasive Melanoma</h2>
            <p className="text-slate/80 mb-4">
              Stage I melanomas have started to grow deeper into the skin but have not spread to lymph nodes or distant organs.
            </p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Stage IA:</strong> Thin melanoma (≤1 mm deep) without ulceration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Stage IB:</strong> May be slightly thicker (1–2 mm) with ulceration or other minor risk features.</span>
              </li>
            </ul>
            <p className="text-slate/80 mb-2"><strong>Treatment:</strong> Surgery is the main treatment, often removing a margin of healthy skin around the melanoma to ensure no cancer cells remain.</p>
            <p className="text-slate/80 mb-4"><strong>Prognosis:</strong> Five-year survival is above 95% when treated early.</p>
            <p className="text-slate/80 bg-coral/5 p-4 rounded-lg">
              <strong>Tip:</strong> Even at early stages, melanoma requires follow-up because people who've had one melanoma are at higher risk for another.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-serif text-navy mb-4">Stage II: Intermediate to High-Risk Melanoma</h2>
            <p className="text-slate/80 mb-4">
              Stage II melanoma is thicker—often deeper than 1 mm—and may show ulceration but still hasn't spread to lymph nodes or other organs.
            </p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Stage IIA:</strong> 1–2 mm thick with ulceration or 2–4 mm without ulceration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Stage IIB:</strong> 2–4 mm with ulceration or thicker than 4 mm without ulceration.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Stage IIC:</strong> Thicker than 4 mm with ulceration.</span>
              </li>
            </ul>
            <p className="text-slate/80 mb-2"><strong>Treatment:</strong> Surgery to remove the tumor and surrounding skin. Some patients may be offered a sentinel lymph node biopsy to check whether microscopic spread has occurred.</p>
            <p className="text-slate/80 mb-4"><strong>Prognosis:</strong> Stage II is still considered localized melanoma, but recurrence risk is higher than in Stage I. Depending on pathology results, your care team might discuss clinical trials or adjuvant therapy (treatments given after surgery to reduce recurrence risk).</p>
            <p className="text-slate/80 italic bg-sky/5 p-4 rounded-lg">
              Plain language: Stage II melanoma is still curable in most cases, but doctors monitor it more closely because of its higher risk of coming back.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-serif text-navy mb-4">Stage III: Melanoma That Has Spread to Nearby Lymph Nodes</h2>
            <p className="text-slate/80 mb-4">
              At Stage III, melanoma cells have moved beyond the original site and into nearby lymph nodes or nearby skin areas (called in-transit or satellite metastases).
            </p>
            <p className="text-slate/80 mb-4"><strong>Key features:</strong></p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>May still have a visible or previous skin tumor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Cancer cells are detected in one or more lymph nodes or nearby skin.</span>
              </li>
            </ul>
            <p className="text-slate/80 mb-2"><strong>Treatment Options:</strong></p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Surgical removal of the melanoma and affected lymph nodes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Adjuvant immunotherapy (drugs that help your immune system fight melanoma) or targeted therapy for specific mutations like BRAF.</span>
              </li>
            </ul>
            <p className="text-slate/80 mb-4"><strong>Prognosis:</strong> Many people live long, healthy lives after Stage III melanoma. New treatments have significantly improved outcomes compared to just a decade ago.</p>
            <p className="text-slate/80 bg-teal/5 p-4 rounded-lg">
              <strong>Good news:</strong> Immunotherapy and targeted treatments can reduce recurrence and, in many cases, prevent the cancer from coming back.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-serif text-navy mb-4">Stage IV: Advanced or Metastatic Melanoma</h2>
            <p className="text-slate/80 mb-4">
              This stage means melanoma has spread to distant organs—commonly the lungs, liver, brain, bones, or distant skin.
            </p>
            <p className="text-slate/80 mb-2"><strong>Treatment:</strong> Today, there are several promising treatments for advanced melanoma:</p>
            <ul className="space-y-2 text-slate/80 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Immunotherapy (such as pembrolizumab or nivolumab)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Targeted therapy (for BRAF or MEK mutations)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Clinical trials testing new drug combinations</span>
              </li>
            </ul>
            <p className="text-slate/80 mb-4"><strong>Prognosis:</strong> Stage IV used to be considered terminal. But thanks to advances in immunotherapy, many patients now live years beyond diagnosis, and some even achieve long-term remission.</p>
            <p className="text-slate/80 italic bg-sky/5 p-4 rounded-lg">
              In simple terms: Stage IV melanoma is serious, but it's no longer hopeless. Treatments today can be life-extending—and sometimes life-saving.
            </p>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <FileText className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">How Doctors Confirm Your Stage</h2>
              <p className="text-slate/80 mb-4">
                Your care team uses several tools to determine your stage accurately:
              </p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Skin biopsy:</strong> Confirms melanoma and measures Breslow depth and ulceration.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Sentinel lymph node biopsy:</strong> Checks for early lymph node involvement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Imaging scans (CT, PET, or MRI):</strong> Used for advanced cases to check for spread.</span>
                </li>
              </ul>
              <p className="text-slate/80 mt-4">
                You may also hear terms like "pathologic stage" (based on biopsy findings) and "clinical stage" (based on imaging and physical exam).
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Why Staging Matters</h2>
          <p className="text-slate/80 mb-4">Knowing your melanoma stage helps your team:</p>
          <ol className="space-y-3 text-slate/80 list-decimal list-inside">
            <li>Select the right treatment plan (for example, surgery alone vs. surgery plus immunotherapy).</li>
            <li>Estimate prognosis—the likelihood of long-term control or cure.</li>
            <li>Guide follow-up care—how often you should see your dermatologist or oncologist.</li>
          </ol>
          <p className="text-slate/80 mt-6 bg-teal/5 p-4 rounded-lg">
            <strong>Remember:</strong> A higher stage doesn't define your future. Many patients with advanced melanoma respond very well to modern therapies.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <Heart className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">What to Ask Your Doctor</h2>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>What is my exact melanoma stage, and how was it determined?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Does my pathology report mention Breslow depth or ulceration?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Should I have a sentinel lymph node biopsy?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Are there adjuvant or clinical trial options for my stage?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>How often should I return for skin and lymph node checks?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Conclusion</h2>
          <p className="text-slate/80 mb-4">
            Understanding your melanoma stage is the first step toward taking control of your care. Whether your melanoma is caught early or at a more advanced stage, treatments today are more effective than ever before.
          </p>
          <p className="text-slate/80 mb-4">
            Ask questions, keep regular follow-up appointments, and learn how to perform monthly self-skin exams. Early detection and proactive care are the best tools for beating melanoma—and for maintaining peace of mind.
          </p>
          <p className="text-slate/80">
            → Learn more at: <Link to="/melanoma" className="text-teal hover:text-teal/80 underline">BeatingSkinCancer.com/melanoma</Link>
          </p>
        </div>

        <div className="bg-slate/5 rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-slate/30">
          <p className="text-sm text-slate/70">
            <strong>Disclaimer:</strong> Educational only. Not a substitute for professional medical advice. Always consult your dermatologist or oncologist about your personal diagnosis and treatment plan.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Still Have Questions?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about melanoma staging</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt?prompt=What%20does%20%22stage%201%20vs%20stage%203%22%20mean%20in%20plain%20language%3F"
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

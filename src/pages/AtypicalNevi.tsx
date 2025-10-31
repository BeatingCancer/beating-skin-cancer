import { AlertTriangle, Eye, Shield, Activity } from 'lucide-react';

export default function AtypicalNevi() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Atypical Nevi</h1>
          <p className="text-xl text-white/80">Understanding dysplastic moles and melanoma risk</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">What are Atypical Nevi?</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Atypical nevi, also called dysplastic nevi, are unusual-looking moles that are larger and more irregular than common moles. While atypical nevi themselves are benign (non-cancerous), they can resemble melanoma and serve as a marker for increased melanoma risk. People with many atypical nevi have a higher chance of developing melanoma during their lifetime.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Atypical nevi can appear anywhere on the body but are most common on the back, chest, and areas exposed to the sun. They often have mixed colors and irregular borders, making them different from typical moles.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Ask questions and get clear, trusted answers — instantly.</p>
          <a
            href="https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with the Navigator
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Key Topics</h2>
          <p className="text-slate/80 mb-6">
            Explore these essential topics to better understand atypical nevi and their monitoring:
          </p>
          <div className="space-y-3">
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What makes a mole "atypical," and how is it different from a normal mole?</div>
              <div className="text-sm text-slate/70">Understanding the characteristics that distinguish dysplastic from common moles</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How can I tell if an atypical mole might be turning into melanoma?</div>
              <div className="text-sm text-slate/70">Warning signs and changes that require immediate medical attention</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What does a dermatologist look for when examining atypical moles?</div>
              <div className="text-sm text-slate/70">Understanding dermoscopy and professional evaluation techniques</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">When does an atypical mole need to be biopsied or removed?</div>
              <div className="text-sm text-slate/70">Decision factors for observation versus intervention</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">If I have atypical moles, how often should I get my skin checked?</div>
              <div className="text-sm text-slate/70">Recommended surveillance schedules based on your risk profile</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">Does having atypical moles mean I'm at higher risk for melanoma?</div>
              <div className="text-sm text-slate/70">Understanding the relationship between atypical nevi and melanoma risk</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What's the best way to track changes in my moles over time?</div>
              <div className="text-sm text-slate/70">Self-monitoring techniques, photography tips, and documentation strategies</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How can I protect my skin and prevent new atypical moles from forming?</div>
              <div className="text-sm text-slate/70">Sun protection strategies and lifestyle modifications for prevention</div>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Identifying Atypical Nevi</h2>
              <p className="text-slate/80 mb-4">Atypical nevi typically have one or more of these characteristics:</p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Larger than 5mm (about the size of a pencil eraser) in diameter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Irregular, fuzzy, or poorly defined borders</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Mixed colors including tan, brown, red, or pink within the same mole</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Asymmetrical appearance (one half doesn't match the other)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Flat or raised surface, or a mixture of both</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span>Uneven texture or a pebbly appearance</span>
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
                <span>Having many common moles (more than 50)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Fair skin, light hair, and light eyes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Family history of atypical nevi or melanoma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Personal history of melanoma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of excessive sun exposure or sunburns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Use of tanning beds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Weakened immune system</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-teal" size={28} />
              <h2 className="text-2xl font-serif text-navy">Prevention & Monitoring</h2>
            </div>
            <ul className="space-y-3 text-slate/80">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Get professional full-body skin exams every 6-12 months</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Perform monthly self-examinations of all moles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Use broad-spectrum SPF 30+ sunscreen daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Wear protective clothing and seek shade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Avoid tanning beds completely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Take photos of moles to track changes over time</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Report any changing moles to your dermatologist immediately</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">The ABCDE Rule for Monitoring Moles</h2>
          <p className="text-slate/80 mb-6">
            Use the ABCDE rule to check your atypical nevi and other moles for signs of melanoma:
          </p>
          <div className="space-y-4">
            <div className="bg-teal/5 p-4 rounded-lg">
              <p className="text-slate/80">
                <strong className="text-navy">A - Asymmetry:</strong> One half of the mole doesn't match the other half
              </p>
            </div>
            <div className="bg-teal/5 p-4 rounded-lg">
              <p className="text-slate/80">
                <strong className="text-navy">B - Border:</strong> Edges are irregular, ragged, notched, or blurred
              </p>
            </div>
            <div className="bg-teal/5 p-4 rounded-lg">
              <p className="text-slate/80">
                <strong className="text-navy">C - Color:</strong> Multiple colors or uneven distribution of color
              </p>
            </div>
            <div className="bg-teal/5 p-4 rounded-lg">
              <p className="text-slate/80">
                <strong className="text-navy">D - Diameter:</strong> Larger than 6mm (about the size of a pencil eraser), though melanomas can be smaller
              </p>
            </div>
            <div className="bg-teal/5 p-4 rounded-lg">
              <p className="text-slate/80">
                <strong className="text-navy">E - Evolving:</strong> The mole is changing in size, shape, color, or symptoms like bleeding or itching
              </p>
            </div>
          </div>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-teal" size={28} />
            <h2 className="text-2xl font-serif text-navy">Diagnosis & Treatment</h2>
          </div>
          <p className="text-slate/80 mb-6">
            Your dermatologist will examine atypical nevi using dermoscopy (a special magnifying device) to assess their features. If a mole appears suspicious or is changing, a biopsy may be recommended.
          </p>
          <h3 className="text-xl font-semibold text-navy mb-3">Management Options:</h3>
          <ul className="space-y-3 text-slate/80">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Observation:</strong> Many atypical nevi can be safely monitored with regular skin exams and photography</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Excisional biopsy:</strong> Complete removal of suspicious moles for pathological examination</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Shave biopsy:</strong> Removing the top layers of a mole for testing (though excision is often preferred)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Prophylactic removal:</strong> Removing moles in high-risk individuals or those in areas difficult to monitor</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Digital mole mapping:</strong> Using photography and computer analysis to track changes in multiple moles over time</span>
            </li>
          </ul>
          <div className="bg-white p-4 rounded-lg mt-6">
            <p className="text-slate/80">
              <strong>Important:</strong> Having atypical nevi doesn't mean you will develop melanoma, but it does mean you should be vigilant about sun protection and regular skin checks. Early detection is key to successful treatment if melanoma does develop.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about atypical nevi</p>
          <a
            href="https://chatgpt.com/g/g-69045e9a6ad8819192dbd404ede6db6d-beating-skin-cancer-navigator"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with the Navigator
          </a>
        </div>
      </div>
    </div>
  );
}

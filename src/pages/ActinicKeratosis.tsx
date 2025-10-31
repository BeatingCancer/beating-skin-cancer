import { AlertTriangle, Eye, Shield, Activity } from 'lucide-react';

export default function ActinicKeratosis() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Actinic Keratosis</h1>
          <p className="text-xl text-white/80">Precancerous sun-damaged skin lesions</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">What is Actinic Keratosis?</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Actinic keratosis (AK), also called solar keratosis, is a rough, scaly patch on the skin that develops from years of sun exposure. It's considered precancerous because it can potentially develop into squamous cell carcinoma if left untreated. AKs are most common in fair-skinned people and typically appear on sun-exposed areas like the face, scalp, ears, neck, forearms, and hands.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            While most actinic keratoses don't progress to cancer, early treatment is important to prevent potential transformation and address cosmetic concerns.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Ask questions and get clear, trusted answers — instantly.</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
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
            Explore these essential topics to better understand your actinic keratosis diagnosis and management:
          </p>
          <div className="space-y-3">
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What is an actinic keratosis and how is it different from skin cancer?</div>
              <div className="text-sm text-slate/70">Understanding the precancerous nature of AKs and their relationship to cancer</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do I know whether an AK needs treatment now or can be watched safely?</div>
              <div className="text-sm text-slate/70">When to treat versus monitor, and what factors influence the decision</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What are the treatment options for actinic keratoses and how do I pick the right one?</div>
              <div className="text-sm text-slate/70">Comparing freezing, topical treatments, and other options for your situation</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What are the risks of leaving AK untreated — can it turn into skin cancer?</div>
              <div className="text-sm text-slate/70">Understanding progression rates and why early treatment matters</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How often should I get skin exams when I have AKs?</div>
              <div className="text-sm text-slate/70">Recommended monitoring schedules and when to see your dermatologist</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What skin-care and sun-protection habits help reduce new AKs?</div>
              <div className="text-sm text-slate/70">Daily prevention strategies and lifestyle changes to protect your skin</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">What do I do when I have many AKs — does the approach differ?</div>
              <div className="text-sm text-slate/70">Field therapy options for widespread sun damage and multiple lesions</div>
            </div>
            <div className="block p-4 bg-sky/5 rounded-lg border border-teal/10">
              <div className="font-semibold text-teal mb-1">How do I talk to my doctor about managing AKs over time and monitoring changes?</div>
              <div className="text-sm text-slate/70">Questions to ask and how to advocate for effective long-term care</div>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Warning Signs & Appearance</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Texture</h3>
                  <p className="text-slate/80">Rough, dry, or scaly patches that feel like sandpaper to the touch</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Color</h3>
                  <p className="text-slate/80">Usually pink, red, or brown; may match your skin tone or appear slightly darker</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Size</h3>
                  <p className="text-slate/80">Typically small (less than 1 inch), but can vary in size and may cluster together</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Sensation</h3>
                  <p className="text-slate/80">May be tender, itchy, or cause a burning sensation; sometimes easier to feel than see</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Location</h3>
                  <p className="text-slate/80">Most common on sun-exposed areas: face, lips, ears, scalp (especially in bald areas), neck, forearms, and backs of hands</p>
                </div>
              </div>
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
                <span>Fair skin, light hair, and light-colored eyes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of frequent or intense sun exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Age over 40 (risk increases with age)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of sunburns, especially blistering burns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Weakened immune system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Living in sunny climates or high altitudes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Occupations with outdoor work exposure</span>
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
                <span>Apply broad-spectrum SPF 30+ sunscreen daily, even on cloudy days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Reapply sunscreen every 2 hours when outdoors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Seek shade during peak sun hours (10am-4pm)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Wear protective clothing, wide-brimmed hats, and UV-blocking sunglasses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Avoid tanning beds and intentional sun tanning</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Consider taking nicotinamide (vitamin B3) supplements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Schedule regular skin examinations with a dermatologist</span>
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
            Treatment depends on the number, size, and location of actinic keratoses. Your dermatologist may recommend one or more of the following:
          </p>
          <ul className="space-y-3 text-slate/80">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Cryotherapy (freezing):</strong> Liquid nitrogen is applied to freeze and destroy the abnormal cells; most common treatment for single lesions</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Topical medications:</strong> Prescription creams or gels (like 5-fluorouracil, imiquimod, or diclofenac) applied at home for field treatment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Photodynamic therapy (PDT):</strong> Light-activated treatment that targets multiple AKs at once using a photosensitizing agent and special light</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Chemical peels:</strong> Application of a chemical solution to remove damaged outer layers of skin</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Curettage:</strong> Scraping off the AK with a special instrument; may be combined with electrodesiccation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Laser therapy:</strong> Using targeted laser energy to remove lesions with minimal scarring</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 bg-sky/5 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-serif text-navy mb-4">Field Cancerization</h2>
          <p className="text-slate/80 leading-relaxed mb-4">
            When you have actinic keratoses, the surrounding skin has often been damaged by years of sun exposure as well. This condition, called "field cancerization," means that while you may only see a few rough spots, there may be many more precancerous cells in the area that aren't yet visible.
          </p>
          <p className="text-slate/80 leading-relaxed">
            This is why dermatologists often recommend "field therapy" treatments (like topical medications or PDT) that treat larger areas of sun-damaged skin, not just individual spots. These treatments can help prevent new AKs from forming and reduce your risk of developing skin cancer.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about actinic keratosis</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
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

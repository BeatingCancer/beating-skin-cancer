import { AlertTriangle, Eye, Shield, Activity } from 'lucide-react';

export default function Melanoma() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Melanoma</h1>
          <p className="text-xl text-white/80">The most serious type of skin cancer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">What is Melanoma?</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Melanoma is the most dangerous form of skin cancer. It develops in melanocytes, the cells that produce melanin (the pigment that gives skin its color). While less common than basal cell and squamous cell carcinomas, melanoma is more likely to spread to other parts of the body if not caught early.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Early detection is crucial. When found and treated early, melanoma has a very high cure rate.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about melanoma</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with Beating Skin Cancer GPT
          </a>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Warning Signs: The ABCDEs of Melanoma</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">A - Asymmetry</h3>
                  <p className="text-slate/80">One half of the mole doesn't match the other half</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">B - Border</h3>
                  <p className="text-slate/80">Edges are irregular, ragged, notched, or blurred</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">C - Color</h3>
                  <p className="text-slate/80">Color is not uniform and may include shades of brown, black, pink, red, white, or blue</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">D - Diameter</h3>
                  <p className="text-slate/80">Spot is larger than 6mm (about the size of a pencil eraser)</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">E - Evolving</h3>
                  <p className="text-slate/80">The mole is changing in size, shape, or color</p>
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
                <span>Fair skin, light hair, and light eyes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>History of sunburns, especially in childhood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Many moles or atypical moles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Family history of melanoma</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Weakened immune system</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Excessive UV exposure from sun or tanning beds</span>
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
                <span>Use broad-spectrum SPF 30+ sunscreen daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Seek shade during peak sun hours (10am-4pm)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Wear protective clothing and wide-brimmed hats</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Avoid tanning beds completely</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Perform monthly self-examinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span>Get annual skin checks by a dermatologist</span>
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
            Treatment depends on the stage and location of the melanoma. Options may include:
          </p>
          <ul className="space-y-3 text-slate/80">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Surgical excision:</strong> Removing the melanoma and some surrounding tissue</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Immunotherapy:</strong> Helping your immune system fight the cancer</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Targeted therapy:</strong> Drugs that target specific gene mutations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1">•</span>
              <span><strong>Radiation therapy:</strong> Using high-energy rays to kill cancer cells</span>
            </li>
          </ul>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about melanoma</p>
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

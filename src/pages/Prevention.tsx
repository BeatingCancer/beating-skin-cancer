import { Sun, Umbrella, Shield, Eye, Clock, Shirt } from 'lucide-react';

export default function Prevention() {
  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Skin Cancer Prevention</h1>
          <p className="text-xl text-white/80">Simple steps to protect your skin and reduce your risk</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Why Prevention Matters</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-6">
            Skin cancer is the most common type of cancer, but it's also one of the most preventable. Most skin cancers are caused by excessive exposure to ultraviolet (UV) radiation from the sun or tanning beds. By taking simple protective measures, you can significantly reduce your risk of developing skin cancer.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Prevention is especially important because early exposure to UV radiation can cause damage that leads to skin cancer years or even decades later. It's never too early or too late to start protecting your skin.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized prevention advice</p>
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
          <div className="flex items-center gap-3 mb-6">
            <Sun className="text-coral flex-shrink-0" size={32} />
            <h2 className="text-3xl font-serif text-navy">Essential Sun Protection Strategies</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="text-teal flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Use Sunscreen Daily</h3>
                  <p className="text-slate/80 mb-3">Apply broad-spectrum sunscreen with SPF 30 or higher to all exposed skin, even on cloudy days. UV rays can penetrate clouds and cause damage.</p>
                  <ul className="space-y-2 text-slate/80">
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Apply 15-30 minutes before going outside</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Use about 1 ounce (shot glass full) to cover your entire body</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Reapply every 2 hours, or immediately after swimming or sweating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Don't forget often-missed areas: ears, neck, hands, and feet</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Umbrella className="text-teal flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Seek Shade</h3>
                  <p className="text-slate/80 mb-3">The sun's rays are strongest between 10 a.m. and 4 p.m. Limit direct sun exposure during these peak hours.</p>
                  <ul className="space-y-2 text-slate/80">
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Plan outdoor activities for early morning or late afternoon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Use umbrellas, trees, or other shelter when outdoors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Remember that shade structures like umbrellas don't block all UV rays</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shirt className="text-teal flex-shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">Wear Protective Clothing</h3>
                  <p className="text-slate/80 mb-3">Clothing is your first line of defense against UV radiation.</p>
                  <ul className="space-y-2 text-slate/80">
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Wear long-sleeved shirts and long pants when possible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Choose tightly woven fabrics for better protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Consider clothing with UPF (Ultraviolet Protection Factor) rating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Wear a wide-brimmed hat (at least 3 inches) to protect face, ears, and neck</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1">•</span>
                      <span>Use UV-blocking sunglasses that wrap around to protect eyes and surrounding skin</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-teal" size={28} />
              <h2 className="text-2xl font-serif text-navy">Additional Protection Tips</h2>
            </div>
            <ul className="space-y-3 text-slate/80">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Avoid tanning beds:</strong> They emit harmful UV radiation that increases cancer risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Check UV Index:</strong> Plan outdoor activities when the UV index is lower</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Be extra careful near water, snow, and sand:</strong> They reflect UV rays and increase exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Protect children:</strong> Start sun protection early; childhood sunburns increase cancer risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Don't rely on a base tan:</strong> Any tan is a sign of skin damage</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="text-teal" size={28} />
              <h2 className="text-2xl font-serif text-navy">Regular Skin Checks</h2>
            </div>
            <p className="text-slate/80 mb-4">
              Early detection is crucial for successful treatment. Make skin checks part of your routine:
            </p>
            <ul className="space-y-3 text-slate/80">
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Self-exams:</strong> Check your skin monthly from head to toe</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Know your skin:</strong> Be familiar with your moles and spots</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Watch for changes:</strong> Look for new growths or changes in existing ones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Professional exams:</strong> See a dermatologist annually for a full skin check</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal mt-1">•</span>
                <span><strong>Don't wait:</strong> See a doctor immediately if you notice suspicious changes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">The ABCDE Rule for Skin Checks</h2>
          <p className="text-slate/80 mb-6">
            When examining your skin, look for these warning signs:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-navy mb-2">A - Asymmetry</h3>
              <p className="text-slate/80">One half doesn't match the other</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-navy mb-2">B - Border</h3>
              <p className="text-slate/80">Edges are irregular, ragged, or blurred</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-navy mb-2">C - Color</h3>
              <p className="text-slate/80">Multiple colors or uneven distribution</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-navy mb-2">D - Diameter</h3>
              <p className="text-slate/80">Larger than a pencil eraser (6mm)</p>
            </div>
            <div className="bg-white rounded-lg p-4 md:col-span-2">
              <h3 className="text-lg font-semibold text-navy mb-2">E - Evolving</h3>
              <p className="text-slate/80">Changing in size, shape, color, or symptoms (itching, bleeding)</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-coral to-coral/80 rounded-2xl shadow-lg p-8 text-white">
          <h2 className="text-3xl font-serif mb-4">Remember</h2>
          <p className="text-lg mb-4">
            Prevention and early detection are your best defenses against skin cancer. By incorporating these simple habits into your daily routine, you can significantly reduce your risk while still enjoying outdoor activities.
          </p>
          <p className="text-lg font-semibold">
            When in doubt, check it out. If you notice any changes in your skin, don't hesitate to consult a dermatologist.
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Need More Information?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized prevention advice</p>
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

import { Microscope, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const canonical = "https://www.beatingskincancer.com/basal-cell-carcinoma/types";
const title = "How Doctors Identify BCC Types: Superficial, Nodular & Morpheaform | 2025";
const description = "Learn how dermatologists identify different types of basal cell carcinoma—superficial, nodular, and morpheaform—and what each means for treatment.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How Do Doctors Decide Which Type of BCC I Have (Superficial, Nodular, Morpheaform)?",
  "description": description,
  "author": { "@type": "Organization", "name": "Beating Skin Cancer" },
  "publisher": { "@type": "Organization", "name": "Beating Skin Cancer" },
  "mainEntityOfPage": canonical,
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beatingskincancer.com/" },
    { "@type": "ListItem", "position": 2, "name": "Basal Cell Carcinoma", "item": "https://www.beatingskincancer.com/basal-cell-carcinoma" },
    { "@type": "ListItem", "position": 3, "name": "BCC Types", "item": canonical }
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What subtype of basal cell carcinoma do I have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your dermatologist determines your BCC subtype through visual examination and skin biopsy. The most common types are nodular (60-70% of cases), superficial, and morpheaform, each with distinct appearance and treatment approaches."
      }
    },
    {
      "@type": "Question",
      "name": "Is Mohs surgery recommended for my BCC type?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mohs surgery is typically recommended for morpheaform BCC due to its aggressive nature and ill-defined borders. It may also be recommended for nodular BCC in high-risk locations like the nose, eyes, or ears."
      }
    },
    {
      "@type": "Question",
      "name": "What are my chances of recurrence with different BCC types?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Superficial BCC has the lowest recurrence risk when fully treated. Nodular BCC has excellent cure rates with proper excision. Morpheaform BCC has higher recurrence risk if not completely removed, which is why Mohs surgery is often recommended."
      }
    }
  ]
};

export default function BCCTypes() {
  return (
    <div className="min-h-screen bg-ivory">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbsJsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/basal-cell-carcinoma"
            className="text-teal hover:text-teal/80 transition-colors mb-4 inline-block"
          >
            ← Back to Basal Cell Carcinoma
          </Link>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">
            How Do Doctors Decide Which Type of BCC I Have (Superficial, Nodular, Morpheaform)?
          </h1>
          <p className="text-xl text-white/80">Understanding how dermatologists identify BCC subtypes and what each means for treatment</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Introduction</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            When you're told you have basal cell carcinoma (BCC), the next thing your doctor may mention is the type of BCC—such as superficial, nodular, or morpheaform. These terms can sound confusing, but they're essential for choosing the best treatment.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Each type of BCC behaves differently under the microscope and on your skin. Understanding which kind you have helps your doctor determine how aggressive the cancer is, how deep it goes, and which therapy offers the highest cure rate with the least scarring.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Have Questions?</h3>
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
          <h2 className="text-3xl font-serif text-navy mb-6">Understanding the Types of Basal Cell Carcinoma</h2>
          <p className="text-slate/80 mb-6">
            Dermatologists classify BCC into several subtypes, based on how the cancer cells look and grow. The three most common are:
          </p>

          <div className="space-y-6">
            <div className="bg-teal/5 rounded-lg p-6">
              <h3 className="text-2xl font-serif text-navy mb-4">1. Nodular Basal Cell Carcinoma (Nodular BCC)</h3>
              <p className="text-slate/80 mb-4">
                This is the most common form, making up about 60–70% of all BCCs.
              </p>

              <h4 className="font-semibold text-navy mb-2">How it looks:</h4>
              <ul className="space-y-2 text-slate/80 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>A shiny or pearly bump with visible blood vessels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>Sometimes crusts or bleeds and then scabs over</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>Common on the nose, eyelids, and cheeks</span>
                </li>
              </ul>

              <h4 className="font-semibold text-navy mb-2">What it means:</h4>
              <p className="text-slate/80">
                Nodular BCC tends to grow downward into the skin rather than outward. It usually stays local but can invade deeper layers if left untreated. Most nodular BCCs are cured with excision or Mohs surgery, which ensures complete removal.
              </p>
            </div>

            <div className="bg-sky/5 rounded-lg p-6">
              <h3 className="text-2xl font-serif text-navy mb-4">2. Superficial Basal Cell Carcinoma (Superficial BCC)</h3>
              <p className="text-slate/80 mb-4">
                This type often appears on the chest, shoulders, back, or arms—areas that get intermittent sun.
              </p>

              <h4 className="font-semibold text-navy mb-2">How it looks:</h4>
              <ul className="space-y-2 text-slate/80 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>A flat, scaly pink patch that may resemble eczema or psoriasis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>Sometimes slightly shiny or with a thin, rolled border</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>May come and go, leading some patients to mistake it for "dry skin"</span>
                </li>
              </ul>

              <h4 className="font-semibold text-navy mb-2">What it means:</h4>
              <p className="text-slate/80">
                Superficial BCC is usually the least invasive type. Because it spreads across the skin surface, doctors may treat it with topical medications (like imiquimod or 5-fluorouracil), photodynamic therapy, or gentle surgical removal. However, your doctor may still recommend a biopsy to confirm that the cancer hasn't invaded deeper layers.
              </p>
            </div>

            <div className="bg-coral/5 rounded-lg p-6">
              <h3 className="text-2xl font-serif text-navy mb-4">3. Morpheaform (Sclerosing) Basal Cell Carcinoma</h3>
              <p className="text-slate/80 mb-4">
                Morpheaform—or sclerosing—BCC is less common but more aggressive.
              </p>

              <h4 className="font-semibold text-navy mb-2">How it looks:</h4>
              <ul className="space-y-2 text-slate/80 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>A scar-like, flat, or waxy area that's often hard to see clearly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>The borders are ill-defined, meaning the tumor may extend beyond what's visible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span>Common on the nose, temples, or around the eyes</span>
                </li>
              </ul>

              <h4 className="font-semibold text-navy mb-2">What it means:</h4>
              <p className="text-slate/80">
                Because morpheaform BCC grows in thin strands beneath the surface, it can be difficult to remove completely without Mohs micrographic surgery—a technique that checks tissue edges in real time. This type requires precise treatment to ensure all cancer cells are cleared while preserving healthy skin.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Microscope className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">How Doctors Decide Which Type You Have</h2>
              <p className="text-slate/80 mb-4">
                Your dermatologist uses several steps to identify the BCC subtype and plan your care:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">1. Visual Exam</h3>
                  <p className="text-slate/80">
                    Using a dermatoscope—a special magnifying tool—your doctor studies the lesion's color, surface texture, and borders. Pearly edges suggest nodular BCC, while pink, flat patches may suggest superficial type.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">2. Skin Biopsy</h3>
                  <p className="text-slate/80">
                    A small tissue sample is removed and examined under a microscope. This step is the gold standard for determining the exact type and depth of your BCC. The pathologist's report will describe whether the cancer is superficial, nodular, morpheaform, or mixed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">3. Depth and Margin Assessment</h3>
                  <p className="text-slate/80">
                    Some tumors show more than one pattern (for example, nodular mixed with morpheaform). If deeper invasion or aggressive growth is seen, treatment recommendations may shift toward Mohs surgery or wider excision.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-navy mb-2">4. NCCN Risk Stratification</h3>
                  <p className="text-slate/80 mb-2">
                    The 2025 NCCN Guidelines for Basal Cell Skin Cancer emphasize considering:
                  </p>
                  <ul className="space-y-2 text-slate/80 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1 font-bold">•</span>
                      <span>Tumor location (high-risk sites like nose, lips, ears)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1 font-bold">•</span>
                      <span>Size and depth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1 font-bold">•</span>
                      <span>Borders (well-defined vs. indistinct)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-teal mt-1 font-bold">•</span>
                      <span>Histologic subtype (e.g., morpheaform = higher risk)</span>
                    </li>
                  </ul>
                  <p className="text-slate/80 mt-2">
                    This risk-based approach helps doctors tailor treatment and follow-up frequency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <FileText className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Why Subtype Matters</h2>
              <p className="text-slate/80 mb-4">
                Knowing your specific BCC subtype helps guide:
              </p>

              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Treatment choice</strong> (topical vs. surgical vs. Mohs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Recurrence risk</strong> — morpheaform BCCs have a higher chance of coming back if not fully removed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Follow-up schedule</strong> — high-risk or aggressive types need closer monitoring</span>
                </li>
              </ul>

              <p className="text-slate/80 mt-4">
                As explained in <em>Beating Basal Cell Cancer</em> by Dr. Steven Q. Wang, patients often feel relieved once they understand that BCC is highly curable, especially when treated early.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <Heart className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">What to Ask Your Doctor</h2>
              <ol className="space-y-3 text-slate/80 list-decimal list-inside">
                <li>What subtype of basal cell carcinoma do I have?</li>
                <li>How deep or aggressive is my tumor?</li>
                <li>Is Mohs surgery recommended, or can this be treated another way?</li>
                <li>What are my chances of recurrence?</li>
                <li>How often should I have skin checks after treatment?</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Conclusion</h2>
          <p className="text-slate/80 mb-4">
            The type of basal cell carcinoma—whether superficial, nodular, or morpheaform—tells doctors how your skin cancer behaves and what treatment will work best.
          </p>
          <p className="text-slate/80">
            While hearing you have cancer can be unsettling, remember: Basal cell carcinoma is one of the most curable cancers when detected early. By understanding your subtype, you and your dermatologist can make informed choices that lead to excellent outcomes and healthy skin.
          </p>
        </div>

        <div className="bg-slate/5 rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-slate/30">
          <p className="text-sm text-slate/70">
            <strong>Disclaimer:</strong> This article is for educational purposes only and not a substitute for professional medical advice. Always consult a qualified dermatologist for diagnosis and treatment recommendations.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Still Have Questions?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about basal cell carcinoma</p>
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

import { Microscope, FileText, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const canonical = "https://www.beatingskincancer.com/basal-cell-carcinoma/biopsy-meaning";
const title = "What Does My Basal Cell Carcinoma Biopsy Mean? Complete Guide 2025";
const description = "If your skin biopsy shows basal cell carcinoma, here's what that diagnosis means, what to expect next, and how to understand your pathology report.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Does It Mean If My Biopsy Says Basal Cell Carcinoma?",
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
    { "@type": "ListItem", "position": 3, "name": "What Does My Biopsy Mean", "item": canonical }
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does it mean if my biopsy says basal cell carcinoma?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A biopsy showing basal cell carcinoma means that abnormal basal cells from the deepest layer of your epidermis have started growing out of control. While this is a cancer diagnosis, basal cell carcinoma is highly treatable and rarely life-threatening when caught early."
      }
    },
    {
      "@type": "Question",
      "name": "What does 'margins positive' mean on my pathology report?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Margins positive means cancer cells extend to the edge of the biopsy sample, indicating that some cancer cells are still present. Additional treatment will be needed to ensure complete removal of the cancer."
      }
    }
  ]
};

export default function BCCBiopsyMeaning() {
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
            What Does It Mean If My Biopsy Says "Basal Cell Carcinoma"?
          </h1>
          <p className="text-xl text-white/80">Understanding your diagnosis and what to expect next</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Introduction</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Hearing the words "basal cell carcinoma" on your biopsy report can be unsettling. Even though it's the most common type of skin cancer, seeing it written on paper makes it feel real—and often raises many questions.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            The good news: Basal cell carcinoma (BCC) is highly treatable and rarely life-threatening when found early. Your dermatologist's next steps will focus on confirming how deep and extensive it is, then choosing the treatment that completely removes it while preserving as much healthy skin as possible.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            This article helps you understand what your basal cell carcinoma diagnosis really means, what's in your skin biopsy results, and how to read your pathology report like a doctor would.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Have Questions?</h3>
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

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Microscope className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Step 1: What Your Biopsy Actually Shows</h2>
              <p className="text-slate/80 mb-4">
                When your dermatologist removes a small sample of skin (a biopsy), that tissue is sent to a pathologist, a physician trained to look at cells under a microscope.
              </p>
              <p className="text-slate/80 mb-4"><strong>In the lab, the pathologist checks for:</strong></p>
              <ul className="space-y-3 text-slate/80">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Abnormal basal cells</strong> – cells from the deepest layer of the epidermis that have started to grow out of control.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Growth pattern</strong> – whether the tumor is superficial (flat), nodular (rounded), or morpheaform (thin strands).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1 font-bold">•</span>
                  <span><strong>Depth and margins</strong> – how deep it extends and whether cancer cells reach the edge of the sample.</span>
                </li>
              </ul>
              <p className="text-slate/80 mt-4">
                If these features match basal cell carcinoma, your report will read something like:
              </p>
              <div className="bg-sky/5 p-4 rounded-lg mt-4 italic text-slate/80">
                <p>"Basal cell carcinoma, nodular type, extending into the dermis. Margins involved."</p>
              </div>
              <p className="text-slate/80 mt-4">
                This means the lesion is cancerous but usually slow-growing and highly curable. The mention of "margins involved" means some cancer cells are still present at the biopsy's edge, so additional treatment will be needed to ensure complete removal.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <FileText className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Step 2: Understanding Your Pathology Report</h2>
              <p className="text-slate/80 mb-4">
                Your pathology report is a roadmap that guides your treatment. Here's how to interpret the key terms.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-teal/5">
                      <th className="border-b border-slate/20 p-4 text-left font-semibold text-navy">Report Term</th>
                      <th className="border-b border-slate/20 p-4 text-left font-semibold text-navy">What It Means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b border-slate/20 p-4 text-slate/80"><strong>Basal cell carcinoma</strong></td>
                      <td className="border-b border-slate/20 p-4 text-slate/80">The type of skin cancer identified. It begins in the basal layer of the epidermis.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate/20 p-4 text-slate/80"><strong>Subtype (e.g., nodular, superficial, morpheaform)</strong></td>
                      <td className="border-b border-slate/20 p-4 text-slate/80">Describes how the tumor grows—this affects treatment choice.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate/20 p-4 text-slate/80"><strong>Margins positive</strong></td>
                      <td className="border-b border-slate/20 p-4 text-slate/80">Cancer cells extend to the edge of the sample; more tissue needs to be removed.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate/20 p-4 text-slate/80"><strong>Margins negative (clear)</strong></td>
                      <td className="border-b border-slate/20 p-4 text-slate/80">No cancer cells at the edges—likely fully removed.</td>
                    </tr>
                    <tr>
                      <td className="border-b border-slate/20 p-4 text-slate/80"><strong>Ulceration or perineural invasion</strong></td>
                      <td className="border-b border-slate/20 p-4 text-slate/80">Signs the tumor is more aggressive or deeper; may need specialized surgery.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-slate/80 mt-4">
                Dermatologists use this detailed report, along with clinical exam findings, to classify the cancer as low-risk or high-risk, following the 2025 NCCN Guidelines for Basal Cell Skin Cancer.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Step 3: What Happens After a Basal Cell Carcinoma Diagnosis</h2>
          <p className="text-slate/80 mb-4">
            After confirming your basal cell carcinoma diagnosis, your doctor will discuss next steps based on the tumor's type, size, and location.
          </p>
          
          <h3 className="text-2xl font-serif text-navy mb-4 mt-6">Common Treatment Options</h3>
          <ol className="space-y-3 text-slate/80 list-decimal list-inside">
            <li><strong>Excision</strong> – Surgical removal of the tumor with a small safety margin of normal skin.</li>
            <li><strong>Mohs micrographic surgery</strong> – Used for facial or high-risk areas; allows tissue to be checked layer by layer until all cancer is gone.</li>
            <li><strong>Topical therapy</strong> – For superficial BCCs, creams such as imiquimod or 5-fluorouracil may be used.</li>
            <li><strong>Radiation therapy</strong> – An alternative when surgery isn't possible.</li>
          </ol>

          <p className="text-slate/80 mt-4">
            Your dermatologist will explain which option gives the best chance for cure with the least scarring.
          </p>

          <h3 className="text-2xl font-serif text-navy mb-4 mt-6">Follow-Up Is Essential</h3>
          <p className="text-slate/80">
            Even though BCC rarely spreads, new cancers can form over time—especially in people with fair skin or a history of sun damage. That's why regular skin checks are key to long-term health.
          </p>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Step 4: Why Early Detection Matters</h2>
          <p className="text-slate/80 mb-4">
            Basal cell carcinoma grows slowly, but if ignored, it can destroy surrounding skin, cartilage, or bone. Early detection and complete removal are the best ways to prevent recurrence and protect appearance.
          </p>
          <p className="text-slate/80">
            As explained in <em>Beating Basal Cell Cancer</em> by Dr. Steven Q. Wang, patients often feel anxiety after a new diagnosis—but reassurance comes from knowing that nearly all basal cell cancers can be cured, often with minor outpatient procedures.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-4">
            <Heart className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">What to Ask Your Doctor</h2>
              <p className="text-slate/80 mb-4">When you review your biopsy results, consider asking:</p>
              <ol className="space-y-3 text-slate/80 list-decimal list-inside">
                <li>What type of basal cell carcinoma do I have?</li>
                <li>Were the biopsy margins clear or involved?</li>
                <li>Will I need Mohs surgery or a standard excision?</li>
                <li>What are my chances of recurrence?</li>
                <li>How often should I have full-body skin checks going forward?</li>
              </ol>
              <p className="text-slate/80 mt-4">
                These questions help you fully understand your diagnosis and next steps.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-4">Conclusion</h2>
          <p className="text-slate/80 mb-4">
            A biopsy that says "basal cell carcinoma" means that a small cluster of skin cells has turned cancerous—but the outlook is overwhelmingly positive. This is a diagnosis you can treat successfully, especially when caught early.
          </p>
          <p className="text-slate/80">
            Understanding your pathology report, asking informed questions, and following your doctor's guidance are the first steps to complete healing and confidence in your care.
          </p>
        </div>

        <div className="bg-slate/5 rounded-2xl shadow-lg p-6 mb-8 border-l-4 border-slate/30">
          <p className="text-sm text-slate/70">
            <strong>Disclaimer:</strong> This content is for educational purposes only and not a substitute for professional medical advice. Always consult a board-certified dermatologist for diagnosis and treatment.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-serif text-white mb-4">Still Have Questions?</h3>
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about basal cell carcinoma</p>
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
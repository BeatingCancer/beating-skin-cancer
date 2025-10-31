import { Heart, Pill, Zap, Stethoscope, FlaskConical, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const canonical = "https://www.beatingskincancer.com/melanoma/melanoma-treatment-options";
const title = "Melanoma Treatment Options | Beating Skin Cancer";
const description =
  "Learn about current melanoma treatment options—from surgery to immunotherapy—and what to expect at each step.";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Melanoma Treatment Options",
  "description": description,
  "author": { "@type": "Organization", "name": "Beating Cancers" },
  "publisher": { "@type": "Organization", "name": "Beating Cancers" },
  "mainEntityOfPage": canonical,
};

const breadcrumbsJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beatingskincancer.com/" },
    { "@type": "ListItem", "position": 2, "name": "Melanoma", "item": "https://www.beatingskincancer.com/melanoma" },
    { "@type": "ListItem", "position": 3, "name": "Melanoma Treatment Options", "item": canonical }
  ],
};

export default function MelanomaTreatmentOptions() {
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
      </Helmet>

      <div className="bg-gradient-to-br from-navy to-slate py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/melanoma"
            className="text-teal hover:text-teal/80 transition-colors mb-4 inline-block"
          >
            ← Back to Melanoma
          </Link>
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-4">Melanoma Treatment Options</h1>
          <p className="text-xl text-white/80">The main treatments, who they fit best, and what to ask your doctor</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Facing Melanoma with Clarity and Hope</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Hearing the words <em>"You have melanoma"</em> can be overwhelming. You may feel anxious,
            uncertain, or even fearful. But here's the good news: treatment for melanoma has advanced
            dramatically in recent years. Many people diagnosed today go on to live long, healthy
            lives—especially when melanoma is found and treated early.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Melanoma is the most serious form of skin cancer, but it is also one of the most studied.
            Scientists and clinicians around the world have developed new ways to treat it, from highly
            precise surgery to breakthrough immunotherapies that harness your own immune system to fight
            cancer cells. Understanding your treatment options can help you feel informed and empowered
            as you make decisions with your care team.
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy to-slate rounded-2xl shadow-lg p-8 text-center mb-8">
          <h3 className="text-2xl font-serif text-white mb-4">Have Questions?</h3>
          <p className="text-white/80 mb-6">Ask questions and get clear, trusted answers — instantly</p>
          <a
            href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal text-white px-8 py-3 rounded-full hover:bg-teal/90 transition-all shadow-md hover:shadow-lg font-medium"
          >
            Chat with the Navigator
          </a>
        </div>

        <div className="bg-sky/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Stethoscope className="text-sky flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Surgery: The First Step for Most People</h2>
              <p className="text-slate/80 text-lg leading-relaxed mb-4">
                For most patients, <strong>surgery</strong> is the cornerstone of melanoma treatment. The goal
                is to remove the tumor completely, along with a small amount of normal skin around it (called
                the <em>margin</em>) to make sure no cancer cells remain.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Wide Local Excision</h3>
              <p className="text-slate/80 mb-4">
                If the melanoma is confined to the skin (known as <em>localized melanoma</em>), your dermatologist
                or surgical oncologist will perform a <strong>wide local excision</strong>. The margin of normal
                skin removed depends on the thickness of the melanoma—thin melanomas may require as little as
                0.5 cm, while thicker ones may need up to 2 cm.
              </p>
              <p className="text-slate/80 mb-4">
                This procedure is typically done under local anesthesia in an outpatient setting, and most
                people recover quickly.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Sentinel Lymph Node Biopsy</h3>
              <p className="text-slate/80 mb-4">
                For melanomas deeper than about 1 millimeter, your doctor may recommend a{" "}
                <strong>sentinel lymph node biopsy</strong>. This helps determine whether cancer has spread to
                nearby lymph nodes. A dye and tracer identify the "sentinel" node—the first draining lymph node.
                If cancer cells are found there, additional treatment or closer monitoring may be needed.
              </p>
              <p className="text-slate/80">
                Removing lymph nodes helps guide the next steps and provides valuable staging information.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-teal/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Zap className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Immunotherapy: Training the Immune System to Fight Cancer</h2>
              <p className="text-slate/80 text-lg leading-relaxed mb-4">
                Over the past decade, <strong>immunotherapy</strong> has revolutionized melanoma care—especially
                for people whose melanoma has spread beyond the skin (called <em>advanced</em> or{" "}
                <em>metastatic</em> melanoma). These treatments strengthen your body's natural defenses to
                recognize and destroy melanoma cells.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Checkpoint Inhibitors</h3>
              <p className="text-slate/80 mb-4">
                Drugs known as <strong>checkpoint inhibitors</strong>—such as pembrolizumab (Keytruda®),
                nivolumab (Opdivo®), and ipilimumab (Yervoy®)—work by "releasing the brakes" on the immune
                system. This allows immune cells to attack melanoma cells more effectively. These medicines are
                given through an IV every few weeks and can be used alone or in combination.
              </p>
              <p className="text-slate/80 mb-4">
                Side effects can occur when the immune system becomes overactive, such as fatigue, rash, or
                inflammation of organs. Most are manageable with prompt medical attention.
              </p>

              <h3 className="text-xl font-semibold text-navy mb-3 mt-6">Adjuvant and Neoadjuvant Therapy</h3>
              <p className="text-slate/80">
                Immunotherapy may be given <strong>after surgery (adjuvant therapy)</strong> to reduce recurrence
                risk or <strong>before surgery (neoadjuvant therapy)</strong> to shrink the tumor. These approaches
                improve long-term outcomes for some patients with high-risk melanoma.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-coral/5 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <Pill className="text-coral flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Targeted Therapy: Attacking Specific Gene Mutations</h2>
              <p className="text-slate/80 text-lg leading-relaxed mb-4">
                About half of all melanomas have mutations in a gene called <strong>BRAF</strong>. If your tumor
                has this mutation, you may benefit from <strong>targeted therapy</strong>—medications that block
                this overactive signal.
              </p>

              <ul className="space-y-2 text-slate/80 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Dabrafenib + Trametinib</strong> (Tafinlar® + Mekinist®)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Vemurafenib + Cobimetinib</strong> (Zelboraf® + Cotellic®)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-coral mt-1">•</span>
                  <span><strong>Encorafenib + Binimetinib</strong> (Braftovi® + Mektovi®)</span>
                </li>
              </ul>

              <p className="text-slate/80">
                These oral medications are usually taken daily and can shrink tumors rapidly. They are often used
                when melanoma has spread or when immunotherapy isn't effective. Genetic testing identifies if
                targeted therapy is appropriate.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Radiation and Other Local Treatments</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            While surgery and systemic therapies are the main treatments for melanoma,{" "}
            <strong>radiation therapy</strong> can play an important role. It is sometimes used to treat lymph
            node areas after surgery, relieve symptoms, or control small metastatic spots.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Side effects depend on the area treated and may include temporary redness, fatigue, or skin
            irritation. In rare cases where surgery isn't possible, localized options such as{" "}
            <strong>isolated limb infusion</strong> or <strong>laser ablation</strong> may be considered.
          </p>
        </div>

        <div className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <FlaskConical className="text-teal flex-shrink-0 mt-1" size={32} />
            <div>
              <h2 className="text-3xl font-serif text-navy mb-4">Clinical Trials: The Future of Melanoma Care</h2>
              <p className="text-slate/80 text-lg leading-relaxed mb-4">
                According to the <strong>National Comprehensive Cancer Network (NCCN)</strong>, clinical trials
                are an essential part of melanoma treatment. Many advances today—especially immunotherapies and
                targeted drugs—came from trial participants.
              </p>
              <p className="text-slate/80 text-lg leading-relaxed">
                If your melanoma is advanced or has returned after treatment, your doctor may recommend a clinical
                trial. Learn more at{" "}
                <a
                  href="https://www.nccn.org/patients"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline hover:text-teal/80"
                >
                  nccn.org/patients
                </a>{" "}
                or{" "}
                <a
                  href="https://clinicaltrials.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal underline hover:text-teal/80"
                >
                  clinicaltrials.gov
                </a>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Emerging Therapies and Combination Approaches</h2>
          <ul className="space-y-3 text-slate/80 text-lg">
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1.5">•</span>
              <span><strong>Personalized vaccines</strong> that teach the immune system to recognize melanoma proteins.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1.5">•</span>
              <span><strong>Cell-based therapies</strong>, including TIL therapy that multiplies immune cells to attack melanoma.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal mt-1.5">•</span>
              <span><strong>Combination therapies</strong> that use both immunotherapy and targeted therapy to improve outcomes.</span>
            </li>
          </ul>
          <p className="text-slate/80 text-lg leading-relaxed mt-6 bg-teal/5 p-4 rounded-lg">
            These advances are transforming melanoma into a disease that can often be managed long-term—even in
            advanced stages.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Living Well During and After Treatment</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Treatment is not just about removing cancer—it's also about healing physically and emotionally.
            Fatigue, skin changes, anxiety, and fear of recurrence are common. Building a support network,
            maintaining regular follow-ups, and protecting your skin from UV exposure are vital parts of recovery.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
            Most survivors need full skin exams every 3–12 months. Practice monthly self-checks and use
            broad-spectrum sunscreen daily to help prevent new cancers.
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
                  <span>What stage is my melanoma, and how does it affect my treatment options?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Should I have a sentinel lymph node biopsy?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Is my tumor being tested for BRAF or other mutations?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Would immunotherapy or targeted therapy benefit me?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>What are the possible side effects, and how can they be managed?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>Are there any clinical trials I might qualify for?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">•</span>
                  <span>How often should I return for follow-up visits and skin checks?</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-serif text-navy mb-6">Conclusion: Moving Forward with Confidence</h2>
          <p className="text-slate/80 text-lg leading-relaxed mb-4">
            Melanoma treatment today offers more hope than ever before. From precision surgery to
            life-extending immunotherapies, the options are expanding rapidly—and outcomes continue to
            improve. Understanding your choices allows you to take an active role in your care and move forward
            confidently with your expert team.
          </p>
          <p className="text-slate/80 text-lg leading-relaxed">
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
          <p className="text-white/80 mb-6">Chat with our AI guide for personalized information about melanoma treatment</p>
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

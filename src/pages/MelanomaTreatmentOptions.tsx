
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function MelanomaTreatmentOptions() {
  const canonical = "https://www.beatingskincancer.com/melanoma/melanoma-treatment-options";
  const title = "Melanoma Treatment Options | Beating Skin Cancer";
  const description =
    "Learn about current melanoma treatment options—from surgery to immunotherapy—and what to expect at each step.";

  return (
    <div className="space-y-12">
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
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Melanoma Treatment Options",
            "description": "${description}",
            "mainEntityOfPage": "${canonical}",
            "author": {
              "@type": "Organization",
              "name": "Beating Cancers"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Beating Cancers"
            }
          }
        `}</script>
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beatingskincancer.com/" },
              { "@type": "ListItem", "position": 2, "name": "Melanoma", "item": "https://www.beatingskincancer.com/melanoma" },
              { "@type": "ListItem", "position": 3, "name": "Melanoma Treatment Options", "item": "${canonical}" }
            ]
          }
        `}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-2xl shadow-lg p-10">
        <Link to="/melanoma" className="text-sm text-white/80 hover:text-white">
          ← Back to Melanoma
        </Link>
        <h1 className="text-4xl font-bold mt-2">Melanoma Treatment Options</h1>
        <p className="text-lg mt-4">
          The main treatments, who they fit best, and what to ask your doctor.
        </p>
      </section>

      {/* Introduction */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Facing Melanoma with Clarity and Hope</h2>
        <p>
          Hearing the words <em>“You have melanoma”</em> can be overwhelming. You may feel anxious,
          uncertain, or even fearful. But here’s the good news: treatment for melanoma has advanced
          dramatically in recent years. Many people diagnosed today go on to live long, healthy
          lives—especially when melanoma is found and treated early.
        </p>
        <p>
          Melanoma is the most serious form of skin cancer, but it is also one of the most studied.
          Scientists and clinicians around the world have developed new ways to treat it, from highly
          precise surgery to breakthrough immunotherapies that harness your own immune system to fight
          cancer cells. Understanding your treatment options can help you feel informed and empowered
          as you make decisions with your care team.
        </p>
      </section>

      {/* Surgery */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Surgery: The First Step for Most People</h2>
        <p>
          For most patients, <strong>surgery</strong> is the cornerstone of melanoma treatment. The goal
          is to remove the tumor completely, along with a small amount of normal skin around it (called
          the <em>margin</em>) to make sure no cancer cells remain.
        </p>
        <h3 className="text-xl font-semibold">Wide Local Excision</h3>
        <p>
          If the melanoma is confined to the skin (known as <em>localized melanoma</em>), your dermatologist
          or surgical oncologist will perform a <strong>wide local excision</strong>. The margin of normal
          skin removed depends on the thickness of the melanoma—thin melanomas may require as little as
          0.5 cm, while thicker ones may need up to 2 cm.
        </p>
        <p>
          This procedure is typically done under local anesthesia in an outpatient setting, and most
          people recover quickly.
        </p>
        <h3 className="text-xl font-semibold">Sentinel Lymph Node Biopsy</h3>
        <p>
          For melanomas deeper than about 1 millimeter, your doctor may recommend a{" "}
          <strong>sentinel lymph node biopsy</strong>. This helps determine whether cancer has spread to
          nearby lymph nodes. A dye and tracer identify the “sentinel” node—the first draining lymph node.
          If cancer cells are found there, additional treatment or closer monitoring may be needed.
        </p>
        <p>
          Removing lymph nodes helps guide the next steps and provides valuable staging information.
        </p>
      </section>

      {/* Immunotherapy */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Immunotherapy: Training the Immune System to Fight Cancer</h2>
        <p>
          Over the past decade, <strong>immunotherapy</strong> has revolutionized melanoma care—especially
          for people whose melanoma has spread beyond the skin (called <em>advanced</em> or{" "}
          <em>metastatic</em> melanoma). These treatments strengthen your body’s natural defenses to
          recognize and destroy melanoma cells.
        </p>
        <h3 className="text-xl font-semibold">Checkpoint Inhibitors</h3>
        <p>
          Drugs known as <strong>checkpoint inhibitors</strong>—such as pembrolizumab (Keytruda®),
          nivolumab (Opdivo®), and ipilimumab (Yervoy®)—work by “releasing the brakes” on the immune
          system. This allows immune cells to attack melanoma cells more effectively. These medicines are
          given through an IV every few weeks and can be used alone or in combination.
        </p>
        <p>
          Side effects can occur when the immune system becomes overactive, such as fatigue, rash, or
          inflammation of organs. Most are manageable with prompt medical attention.
        </p>
        <h3 className="text-xl font-semibold">Adjuvant and Neoadjuvant Therapy</h3>
        <p>
          Immunotherapy may be given <strong>after surgery (adjuvant therapy)</strong> to reduce recurrence
          risk or <strong>before surgery (neoadjuvant therapy)</strong> to shrink the tumor. These approaches
          improve long-term outcomes for some patients with high-risk melanoma.
        </p>
      </section>

      {/* Targeted Therapy */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Targeted Therapy: Attacking Specific Gene Mutations</h2>
        <p>
          About half of all melanomas have mutations in a gene called <strong>BRAF</strong>. If your tumor
          has this mutation, you may benefit from <strong>targeted therapy</strong>—medications that block
          this overactive signal.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Dabrafenib + Trametinib</strong> (Tafinlar® + Mekinist®)
          </li>
          <li>
            <strong>Vemurafenib + Cobimetinib</strong> (Zelboraf® + Cotellic®)
          </li>
          <li>
            <strong>Encorafenib + Binimetinib</strong> (Braftovi® + Mektovi®)
          </li>
        </ul>
        <p>
          These oral medications are usually taken daily and can shrink tumors rapidly. They are often used
          when melanoma has spread or when immunotherapy isn’t effective. Genetic testing identifies if
          targeted therapy is appropriate.
        </p>
      </section>

      {/* Radiation and Local Treatments */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Radiation and Other Local Treatments</h2>
        <p>
          While surgery and systemic therapies are the main treatments for melanoma,{" "}
          <strong>radiation therapy</strong> can play an important role. It is sometimes used to treat lymph
          node areas after surgery, relieve symptoms, or control small metastatic spots.
        </p>
        <p>
          Side effects depend on the area treated and may include temporary redness, fatigue, or skin
          irritation. In rare cases where surgery isn’t possible, localized options such as{" "}
          <strong>isolated limb infusion</strong> or <strong>laser ablation</strong> may be considered.
        </p>
      </section>

      {/* Clinical Trials */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Clinical Trials: The Future of Melanoma Care</h2>
        <p>
          According to the <strong>National Comprehensive Cancer Network (NCCN)</strong>, clinical trials
          are an essential part of melanoma treatment. Many advances today—especially immunotherapies and
          targeted drugs—came from trial participants.
        </p>
        <p>
          If your melanoma is advanced or has returned after treatment, your doctor may recommend a clinical
          trial. Learn more at{" "}
          <a
            href="https://www.nccn.org/patients"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline"
          >
            nccn.org/patients
          </a>{" "}
          or{" "}
          <a
            href="https://clinicaltrials.gov"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 underline"
          >
            clinicaltrials.gov
          </a>
          .
        </p>
      </section>

      {/* Emerging Therapies */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Emerging Therapies and Combination Approaches</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personalized vaccines</strong> that teach the immune system to recognize melanoma proteins.
          </li>
          <li>
            <strong>Cell-based therapies</strong>, including TIL therapy that multiplies immune cells to attack
            melanoma.
          </li>
          <li>
            <strong>Combination therapies</strong> that use both immunotherapy and targeted therapy to improve
            outcomes.
          </li>
        </ul>
        <p>
          These advances are transforming melanoma into a disease that can often be managed long-term—even in
          advanced stages.
        </p>
      </section>

      {/* Living Well */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Living Well During and After Treatment</h2>
        <p>
          Treatment is not just about removing cancer—it’s also about healing physically and emotionally.
          Fatigue, skin changes, anxiety, and fear of recurrence are common. Building a support network,
          maintaining regular follow-ups, and protecting your skin from UV exposure are vital parts of recovery.
        </p>
        <p>
          Most survivors need full skin exams every 3–12 months. Practice monthly self-checks and use
          broad-spectrum sunscreen daily to help prevent new cancers.
        </p>
      </section>

      {/* Questions */}
      <section className="bg-teal-50 rounded-2xl shadow-lg p-8 space-y-2">
        <h2 className="text-2xl font-semibold">What to Ask Your Doctor</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>What stage is my melanoma, and how does it affect my treatment options?</li>
          <li>Should I have a sentinel lymph node biopsy?</li>
          <li>Is my tumor being tested for BRAF or other mutations?</li>
          <li>Would immunotherapy or targeted therapy benefit me?</li>
          <li>What are the possible side effects, and how can they be managed?</li>
          <li>Are there any clinical trials I might qualify for?</li>
          <li>How often should I return for follow-up visits and skin checks?</li>
        </ul>
      </section>

      {/* Conclusion */}
      <section className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
        <h2 className="text-2xl font-semibold">Conclusion: Moving Forward with Confidence</h2>
        <p>
          Melanoma treatment today offers more hope than ever before. From precision surgery to
          life-extending immunotherapies, the options are expanding rapidly—and outcomes continue to
          improve. Understanding your choices allows you to take an active role in your care and move forward
          confidently with your expert team.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-600 text-white rounded-2xl shadow-lg p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold">Still Have Questions?</h2>
        <p className="text-lg">
          Chat with the <strong>Beating Skin Cancer GPT</strong> for personalized learning and guidance.
        </p>
        <a
          href="https://chatgpt.com/g/g-68e67f2c3a3881918f3602dcdb559742-beating-skin-cancer-gpt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-50"
        >
          Chat Now
        </a>
      </section>

      {/* Disclaimer */}
      <section className="text-sm text-gray-500 text-center">
        <p>Educational only. Not a substitute for professional medical advice.</p>
      </section>
    </div>
  );
}

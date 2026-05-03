export default function Home() {
  const faqs = [
    {
      q: "How does the revenue impact prediction work?",
      a: "Our AI analyzes feedback sentiment, issue frequency, and customer value (MRR/ARR) to estimate the revenue at risk or gain for each issue. It surfaces which fixes will move the needle most."
    },
    {
      q: "What feedback sources are supported?",
      a: "You can import feedback from CSV, paste raw text, or connect via API. Support for Intercom, Zendesk, and Typeform integrations is included in the plan."
    },
    {
      q: "Is my customer data secure?",
      a: "Yes. All data is encrypted in transit and at rest. We never train models on your data and you can delete everything at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI-Powered Feedback Analysis
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict the Revenue Impact of{" "}
          <span className="text-[#58a6ff]">Customer Feedback</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing which issues to fix first. FeedbackROI uses AI to analyze sentiment, extract issues, and calculate the exact revenue at stake — so your team always works on what matters most.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial — $35/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for trial. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$35</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited feedback imports",
              "AI sentiment & issue extraction",
              "Revenue impact scoring per issue",
              "ROI prioritization dashboard",
              "CSV, API & Zapier integrations",
              "Email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

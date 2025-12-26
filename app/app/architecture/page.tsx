export default function ArchitecturePage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold">System Architecture</h1>

      <p className="mt-2 text-gray-600">
        Kasparro analyzes brand presence in AI-first search systems through a
        modular audit pipeline.
      </p>

      {/* INPUTS */}
      <section className="mt-8">
        <h2 className="font-semibold">1. Input Layer</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>Brand website content</li>
          <li>SERP & AI answer references</li>
          <li>Entity & authority signals</li>
          <li>Content metadata</li>
        </ul>
      </section>

      {/* CONTEXT */}
      <section className="mt-8">
        <h2 className="font-semibold">2. Context Pack</h2>
        <p className="mt-2 text-sm text-gray-600">
          All input signals are normalized into a structured context that can be
          consumed consistently by audit modules.
        </p>
      </section>

      {/* MODULES */}
      <section className="mt-8">
        <h2 className="font-semibold">3. Audit Modules</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>AI Visibility</li>
          <li>Brand Trust / EEAT</li>
          <li>Non-Branded Coverage</li>
          <li>Content Clarity</li>
          <li>Authority Signals</li>
          <li>Content Freshness</li>
          <li>Technical Signals</li>
        </ul>
      </section>

      {/* OUTPUTS */}
      <section className="mt-8">
        <h2 className="font-semibold">4. Output Surfaces</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>Module-level scores</li>
          <li>Detected issues & gaps</li>
          <li>Actionable recommendations</li>
          <li>High-level brand visibility snapshot</li>
        </ul>
      </section>
    </div>
  );
}

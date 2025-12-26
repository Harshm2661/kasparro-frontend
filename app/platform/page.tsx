export default function PlatformPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Kasparro Platform</h1>

      <p className="mt-4 text-gray-600">
        Kasparro helps brands understand how they appear inside AI-generated
        answers across modern search systems.
      </p>

      {/* PIPELINE */}
      <section className="mt-10">
        <h2 className="font-semibold">Audit Pipeline</h2>
        <p className="mt-2 text-sm text-gray-600">
          Input → Context Pack → Modular Audits → Actionable Outputs
        </p>
      </section>

      {/* INPUTS */}
      <section className="mt-8">
        <h3 className="font-semibold">Inputs</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>Website content</li>
          <li>AI answer references</li>
          <li>Search intent & entity signals</li>
        </ul>
      </section>

      {/* OUTPUTS */}
      <section className="mt-8">
        <h3 className="font-semibold">Outputs</h3>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>AI visibility & trust scores</li>
          <li>Detected gaps and risks</li>
          <li>Clear optimization recommendations</li>
        </ul>
      </section>

      {/* DIFFERENCE */}
      <section className="mt-8">
        <h3 className="font-semibold">How this differs from traditional SEO</h3>
        <p className="mt-2 text-sm text-gray-600">
          Traditional SEO focuses on rankings. Kasparro focuses on how AI systems
          understand, trust, and reference your brand.
        </p>
      </section>
    </main>
  );
}

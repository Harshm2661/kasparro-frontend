import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-4xl font-bold">
        AI-Native SEO for the AI-First Search Era
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Kasparro helps brands understand and improve how they appear in AI-driven
        search systems like ChatGPT, Gemini, and Perplexity.
      </p>

      <div className="mt-8 flex gap-4">
        {/* Primary CTA → Dashboard */}
        <Link
          href="/app/dashboard"
          className="rounded bg-black px-6 py-3 text-white"
        >
          Go to Dashboard
        </Link>

        {/* Secondary CTA → Platform */}
        <Link
          href="/platform"
          className="rounded border px-6 py-3"
        >
          Learn How It Works
        </Link>
      </div>
    </main>
  );
}

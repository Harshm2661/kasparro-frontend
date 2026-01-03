export default function ArchitecturePage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-2xl font-bold">System Architecture</h1>

      <p className="text-gray-600">
        Kasparro’s frontend mirrors the internal AI audit pipeline rather than
        presenting disconnected pages.
      </p>

      <h2 className="text-lg font-semibold">System Flow</h2>

      <ul className="space-y-2 text-sm text-gray-600">
        <li>
          <strong>Input Layer:</strong> Brand content, SERP references, AI prompts
        </li>
        <li>
          <strong>Context Pack:</strong> Normalized representation of the brand
          for AI evaluation
        </li>
        <li>
          <strong>Audit Modules:</strong> Independent evaluators (Trust, Coverage,
          EEAT, Visibility)
        </li>
        <li>
          <strong>Output Layer:</strong> Scores, issues, and actionable
          recommendations
        </li>
      </ul>
    </div>
  );
}

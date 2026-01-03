"use client";

import { useState } from "react";
import auditModules from "@/data/mock/audit-modules.json";
import Section from "@/components/ui/Section";

export default function AuditPage() {
  const [selectedModule, setSelectedModule] = useState(auditModules[0]);

  return (
    <div className="flex gap-6">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 rounded-lg border bg-white p-4">
        <h2 className="mb-4 font-semibold">Audit Modules</h2>

        <ul className="space-y-2">
          {auditModules.map((module) => (
            <li
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className={`cursor-pointer rounded px-3 py-2 text-sm transition ${
                selectedModule.id === module.id
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {module.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <section className="flex-1 space-y-6">
        <div>
          <h1 className="text-2xl font-bold">{selectedModule.name}</h1>
          <p className="mt-1 text-gray-600">{selectedModule.summary}</p>
        </div>

        {/* SCORE */}
        <div className="rounded-lg border bg-gray-50 p-6">
          <div className="text-xs uppercase tracking-wide text-gray-500">
            Module Score
          </div>
          <div className="mt-2 text-5xl font-bold">
            {selectedModule.score}
          </div>
        </div>

        {/* ISSUES */}
        <Section>
          <h3 className="font-semibold">Issues</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            {selectedModule.issues.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>
        </Section>

        {/* RECOMMENDATIONS */}
        <Section>
          <h3 className="font-semibold">Recommendations</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600">
            {selectedModule.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </Section>
      </section>
    </div>
  );
}

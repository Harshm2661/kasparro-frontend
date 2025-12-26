"use client";

import { useEffect } from "react";
import auditModules from "@/data/mock/audit-modules.json";
import { useAppStore } from "@/store/useAppStore";

export default function AuditPage() {
  const { selectedModule, setSelectedModule } = useAppStore();

  // Set default module on first load
  useEffect(() => {
    if (!selectedModule) {
      setSelectedModule(auditModules[0]);
    }
  }, [selectedModule, setSelectedModule]);

  // Prevent render before state is ready
  if (!selectedModule) return null;

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
              className={`cursor-pointer rounded px-3 py-2 text-sm ${
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

      {/* MAIN PANEL */}
      <section className="flex-1 rounded-lg border bg-white p-6">
        <h1 className="text-2xl font-bold">{selectedModule.name}</h1>

        <p className="mt-2 text-gray-600">
          {selectedModule.summary}
        </p>

        <div className="mt-6 text-4xl font-semibold">
          Score: {selectedModule.score}
        </div>

        {/* ISSUES */}
        <div className="mt-8">
          <h3 className="font-semibold">Issues</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {selectedModule.issues.map((issue, idx) => (
              <li key={idx}>{issue}</li>
            ))}
          </ul>
        </div>

        {/* RECOMMENDATIONS */}
        <div className="mt-6">
          <h3 className="font-semibold">Recommendations</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600">
            {selectedModule.recommendations.map((rec, idx) => (
              <li key={idx}>{rec}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

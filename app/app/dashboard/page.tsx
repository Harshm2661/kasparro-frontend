import dashboardData from "@/data/mock/dashboard.json";
import StatCard from "@/components/ui/StatCard";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Brand Overview</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="AI Visibility Score"
          value={dashboardData.aiVisibilityScore}
        />
        <StatCard
          title="Trust / EEAT Score"
          value={dashboardData.trustScore}
        />
        <StatCard
          title="Non-Branded Coverage"
          value={dashboardData.nonBrandedCoverage}
        />
        <StatCard
          title="Last Audit"
          value={dashboardData.lastAudit}
        />
      </div>
    </div>
  );
}

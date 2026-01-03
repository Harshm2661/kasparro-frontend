import Card from "@/components/ui/Card";
import Metric from "@/components/ui/Metric";
import rawAuditData from "@/data/mock/audit-data.json";
import { DashboardMetrics } from "@/lib/types";

const auditData = rawAuditData as DashboardMetrics;

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Brand Overview</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="AI Visibility"
          description="How often your brand appears in AI answers"
        >
          <Metric value={auditData.aiVisibilityScore} label="Score" />
        </Card>

        <Card
          title="Trust & EEAT"
          description="Authority & credibility signals"
        >
          <Metric value={auditData.trustScore} label="Score" />
        </Card>

        <Card
          title="Keyword Coverage"
          description="Coverage across important queries"
        >
          <Metric value={auditData.keywordCoverage} label="Score" />
        </Card>

        <Card
          title="Last Audit"
          description="Most recent evaluation"
        >
          <Metric value={auditData.lastAuditDate} label="Date" />
        </Card>
      </div>
    </div>
  );
}

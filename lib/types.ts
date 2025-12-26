export interface Brand {
  id: string;
  name: string;
  domain: string;
  industry: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'critical';
  insights: string[];
  issues: Issue[];
  recommendations: string[];
}

export interface Issue {
  id: string;
  severity: 'high' | 'medium' | 'low';
  title: string;
  description: string;
}

export interface AuditData {
  brandId: string;
  timestamp: string;
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  modules: AuditModule[];
}

export interface DashboardMetrics {
  aiVisibilityScore: number;
  trustScore: number;
  keywordCoverage: number;
  lastAuditDate: string;
}
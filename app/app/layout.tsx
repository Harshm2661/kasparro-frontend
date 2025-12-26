import DashboardSidebar from "@/components/layout/DashboardSidebar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}

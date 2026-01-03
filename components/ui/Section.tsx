import { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return <section className="space-y-3">{children}</section>;
}

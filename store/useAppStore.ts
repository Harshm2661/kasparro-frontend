import { create } from "zustand";

interface AuditModule {
  id: string;
  name: string;
  score: number;
  summary: string;
  issues: string[];
  recommendations: string[];
}

interface AppState {
  selectedModule: AuditModule | null;
  setSelectedModule: (module: AuditModule) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedModule: null,
  setSelectedModule: (module) => set({ selectedModule: module }),
}));

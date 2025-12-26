import { create } from 'zustand';
import { Brand, AuditModule } from '@/lib/types';

interface AppState {
  selectedBrand: Brand | null;
  setSelectedBrand: (brand: Brand | null) => void;
  selectedModule: string | null;
  setSelectedModule: (moduleId: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedBrand: null,
  setSelectedBrand: (brand) => set({ selectedBrand: brand }),
  selectedModule: null,
  setSelectedModule: (moduleId) => set({ selectedModule: moduleId }),
}));
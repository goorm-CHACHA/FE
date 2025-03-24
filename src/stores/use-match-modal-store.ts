// stores/use-modal-store.ts
import { create } from 'zustand';

type ModalType =
  | null
  | 'profile'
  | 'request-sent'
  | 'request-confirm'
  | 'request-cancel';

interface ModalStore {
  currentModal: ModalType;
  openModal: (modal: ModalType) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  currentModal: null,
  openModal: (modal) => set({ currentModal: modal }),
  closeModal: () => set({ currentModal: null }),
}));

export type MatchModalType =
  | 'profile'
  | 'request-sent'
  | 'request-confirm'
  | null;

export interface MatchModalData {
  isNotificationOn?: boolean;
  id?: number;
}

interface MatchModalState {
  currentModal: MatchModalType;
  modalData: MatchModalData | null;
  openModal: (modal: MatchModalType, data?: MatchModalData | null) => void;
  closeModal: () => void;
}

export const useMatchModalStore = create<MatchModalState>((set) => ({
  currentModal: null,
  modalData: null,
  openModal: (modal, data = null) =>
    set({ currentModal: modal, modalData: data }),
  closeModal: () => set({ currentModal: null, modalData: null }),
}));

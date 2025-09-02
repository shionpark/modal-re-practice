import type { ReactNode } from 'react';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
}

function Modal({ isModalOpen, closeModal, title, children }: ModalProps) {
  if (!isModalOpen) return;

  return (
    <div className="relative flex flex-col gap-4 rounded-xl border border-black p-6">
      <button
        className="absolute top-2 right-2 h-[1.8rem] w-[1.8rem] cursor-pointer rounded-full bg-black text-sm text-white hover:opacity-70"
        onClick={closeModal}
      >
        X
      </button>
      <h2 className="text-xl font-bold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default Modal;

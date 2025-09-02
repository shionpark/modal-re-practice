import { useRef, type ReactNode } from 'react';
import Button from './Button';
import { useOutsideClick } from '@hooks/useOutsideClick';

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
}

function Modal({ isModalOpen, closeModal, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(modalRef, () => {
    if (isModalOpen) closeModal();
  });

  if (!isModalOpen) return;

  return (
    <>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50" />
      <div className="modal-container fixed inset-0 z-20 flex items-center justify-center">
        <div
          ref={modalRef}
          className="modal-body relative flex flex-col gap-4 rounded-xl bg-white p-6"
        >
          <Button className="absolute top-4 right-4" onClick={closeModal}>
            X
          </Button>
          <h2 className="text-xl font-bold">{title}</h2>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;

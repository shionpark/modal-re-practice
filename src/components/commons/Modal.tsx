import { useRef, type ReactNode } from 'react';
import Button from './Button';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { useFocusModal } from '@hooks/useFocusModal';
import { keyPress } from '@utils/keyPress';

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

  const { focusRef } = useFocusModal(isModalOpen);

  if (!isModalOpen) return;

  return (
    <>
      <div className="modal-overlay fixed inset-0 bg-black opacity-50" />
      <div
        ref={focusRef}
        tabIndex={-1}
        className="modal-container fixed inset-0 z-20 flex items-center justify-center"
        onKeyDown={keyPress({
          onEnter: () => {
            alert('확인되었습니다.');
            closeModal();
          },
          onEscape: closeModal,
        })}
      >
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

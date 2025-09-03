import { useEffect, useRef, type ReactNode } from 'react';
import Button from './Button';

interface ModalLayerProps {
  isModalOpen: boolean;
  closeModal: () => void;
  title: string;
  children: ReactNode;
}

function ModalLayer({
  isModalOpen,
  closeModal,
  title,
  children,
}: ModalLayerProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [closeModal]);

  if (!isModalOpen) return;

  return (
    <>
      <div className="modal-background fixed inset-0 bg-black opacity-50" />
      <div className="modal-content fixed inset-0 z-20 flex items-center justify-center">
        <section
          ref={modalRef}
          className="relative flex flex-col gap-4 rounded-xl bg-white p-6"
        >
          <Button className="absolute top-4 right-4" onClick={closeModal}>
            X
          </Button>
          <h2 className="text-xl font-bold">{title}</h2>
          <div>{children}</div>
        </section>
      </div>
    </>
  );
}

export default ModalLayer;

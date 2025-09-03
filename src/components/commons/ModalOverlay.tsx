import { useEffect, useRef, type ReactNode } from 'react';
import Button from './Button';

interface ModalLayerProps {
  title: string;
  children: ReactNode;
  isModalOpen: boolean;
  closeHandler: () => void;
  keyboardHandler: (e: React.KeyboardEvent) => void;
}

function ModalLayer({
  title,
  children,
  isModalOpen,
  closeHandler,
  keyboardHandler,
}: ModalLayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const id = requestAnimationFrame(() => containerRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isModalOpen, containerRef]);

  const bodyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (bodyRef.current && !bodyRef.current?.contains(e.target as Node)) {
        closeHandler();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isModalOpen, closeHandler]);

  if (!isModalOpen) return;

  return (
    <>
      <div className="modal-background fixed inset-0 bg-black opacity-50" />
      <div
        ref={containerRef}
        tabIndex={-1}
        className="modal-container fixed inset-0 z-20 flex items-center justify-center"
        onKeyDown={keyboardHandler}
      >
        <section
          ref={bodyRef}
          className="modal-body relative flex flex-col gap-4 rounded-xl bg-white p-6"
        >
          <Button className="absolute top-4 right-4" onClick={closeHandler}>
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

import Portal from '@components/common/Portal';
import { useModalActions, useModalState } from '@hooks/useModal';

function ModalLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const { close } = useModalActions();
  const { isOpen } = useModalState();
  if (!isOpen) return null;

  return (
    <Portal title={title}>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog"
        aria-modal="true"
      >
        <div className="absolute inset-0 bg-black/50" onClick={close} />
        <div
          className="relative rounded-xl bg-white p-6 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default ModalLayout;

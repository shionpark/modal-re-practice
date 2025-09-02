interface ModalProps {
  isModalOpen: boolean;
}

function Modal({ isModalOpen }: ModalProps) {
  if (!isModalOpen) return;

  return <div className="border bg-black p-2 text-amber-300">Modal</div>;
}

export default Modal;

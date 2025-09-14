import { useModal } from '@hooks/useModal';

function ModalLayout() {
  const { open, close } = useModal();

  return (
    <div className="flex gap-2">
      <button
        className="rounded-sm bg-gray-300 px-4 py-2 hover:bg-gray-200"
        onClick={open}
      >
        열기
      </button>
      <button
        className="rounded-sm bg-gray-300 px-4 py-2 hover:bg-gray-200"
        onClick={close}
      >
        닫기
      </button>
    </div>
  );
}

export default ModalLayout;

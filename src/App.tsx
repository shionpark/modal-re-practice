import Modal from '@components/Modal';
import { useToggle } from '@hooks/useToggle';

function App() {
  const [isOpen, , openModal, closeModal] = useToggle(false);

  return (
    <>
      <button
        className="cursor-pointer rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 text-black hover:border-blue-500"
        onClick={openModal}
      >
        모달 열기
      </button>
      <button
        className="cursor-pointer rounded-xl border border-gray-300 bg-gray-200 px-4 py-3 text-black hover:border-blue-500"
        onClick={closeModal}
      >
        모달 닫기
      </button>

      <Modal isModalOpen={isOpen} closeModal={closeModal} title="Alerts!">
        <div className="relative">
          <p className="mb-4">정보 제공에 동의하십니까?</p>
          <div className="flex justify-between">
            <button
              className="cursor-pointer rounded-xl border border-gray-300 bg-gray-200 px-2 py-1 text-black hover:border-blue-500"
              onClick={() => {
                confirm('동의하였습니다.');
                closeModal();
              }}
            >
              예
            </button>
            <button
              className="cursor-pointer rounded-xl border border-gray-300 bg-gray-200 px-2 py-1 text-black hover:border-blue-500"
              onClick={() => {
                confirm('거부하였습니다.');
                closeModal();
              }}
            >
              아니오
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;

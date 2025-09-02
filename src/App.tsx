import Button from '@components/Button';
import Modal from '@components/Modal';
import { useToggle } from '@hooks/useToggle';

function App() {
  const [isOpen, , openModal, closeModal] = useToggle(false);

  return (
    <>
      <Button onClick={openModal}>모달 열기</Button>
      <Button onClick={closeModal}>모달 닫기</Button>

      <Modal isModalOpen={isOpen} closeModal={closeModal} title="Alerts!">
        <p className="mb-4">정보 제공에 동의하십니까?</p>
        <div className="flex justify-between">
          <Button
            onClick={() => {
              confirm('동의하였습니다.');
              closeModal();
            }}
          >
            예
          </Button>
          <Button
            onClick={() => {
              confirm('거부하였습니다.');
              closeModal();
            }}
          >
            아니오
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default App;

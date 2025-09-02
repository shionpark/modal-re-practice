import { Button, Modal } from '@components/commons';

function Alerts({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <>
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

export default Alerts;

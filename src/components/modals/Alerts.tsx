import { Button, ModalOverlay } from '@components/commons';

interface AlertsProps {
  isOpen: boolean;
  closeModal: () => void;
  onConfirm: () => void;
  onCancel: () => void;
}

function Alerts({ isOpen, closeModal, onConfirm, onCancel }: AlertsProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
        onConfirm();
        break;
      case 'Escape':
        onCancel();
        break;
    }
  };

  return (
    <ModalOverlay
      title="Alerts!"
      isModalOpen={isOpen}
      closeHandler={closeModal}
      keyboardHandler={handleKeyPress}
    >
      <p className="mb-4">정보 제공에 동의하십니까?</p>
      <div className="flex justify-between">
        <Button onClick={onConfirm}>예</Button>
        <Button onClick={onCancel}>아니오</Button>
      </div>
    </ModalOverlay>
  );
}

export default Alerts;

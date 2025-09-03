import { Button, ModalOverlay } from '@components/commons';

interface AlertsProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

function Alerts({ isOpen, onConfirm, onCancel }: AlertsProps) {
  return (
    <ModalOverlay isModalOpen={isOpen} closeModal={onCancel} title="Alerts!">
      <p className="mb-4">정보 제공에 동의하십니까?</p>
      <div className="flex justify-between">
        <Button onClick={onConfirm}>예</Button>
        <Button onClick={onCancel}>아니오</Button>
      </div>
    </ModalOverlay>
  );
}

export default Alerts;

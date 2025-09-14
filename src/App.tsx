import ReviewModal from '@components/modals/ReviewModal';
import ModalLayout from '@components/modals/ModalLayout';
import Portal from '@components/common/Portal';
import { useModal } from '@hooks/useModal';

function App() {
  const { isOpen } = useModal();

  return (
    <>
      <ModalLayout />
      {isOpen && (
        <Portal title="review-modal">
          <ReviewModal />
        </Portal>
      )}
    </>
  );
}

export default App;

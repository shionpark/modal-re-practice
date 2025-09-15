import ReviewModal from '@components/modals/ReviewModal';
import ModalLayout from '@components/modals/ModalLayout';

import { useModalActions, useModalState } from '@hooks/useModal';

function App() {
  const { open, close } = useModalActions();
  const { isOpen } = useModalState();

  return (
    <>
      <button onClick={open}>리뷰 모달 열기</button>

      <ModalLayout title="review-modal">
        {isOpen && <ReviewModal onClose={close} />}
      </ModalLayout>
    </>
  );
}

export default App;

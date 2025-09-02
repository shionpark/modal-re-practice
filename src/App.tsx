import Modal from '@components/Modal';
import { useToggle } from '@hooks/useToggle';

function App() {
  const [isOpen, , openModal, closeModal] = useToggle(false);

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      <button onClick={closeModal}>모달 닫기</button>
      <Modal isModalOpen={isOpen} />
    </>
  );
}

export default App;

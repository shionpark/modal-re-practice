import { Button } from '@components/commons';
import { Alerts } from '@components/modals';
import { useToggle } from '@hooks/useToggle';

function App() {
  const [isOpen, , openModal, closeModal] = useToggle(false);

  return (
    <>
      <Button onClick={openModal}>모달 열기</Button>
      <Button onClick={closeModal}>모달 닫기</Button>

      <Alerts
        isOpen={isOpen}
        onConfirm={() => {
          confirm('동의하였습니다.');
          closeModal();
        }}
        onCancel={() => {
          confirm('거부하였습니다.');
          closeModal();
        }}
      />
    </>
  );
}

export default App;

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
        closeModal={closeModal}
        onConfirm={() => {
          confirm('동의하였습니다.');
          closeModal();
        }}
        onCancel={() => {
          confirm('창을 닫으시겠습니까?');
          closeModal();
        }}
      />
    </>
  );
}

export default App;

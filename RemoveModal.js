import Card from "./Card";
import Button from "./Button";
import styles from "./RemoveModal.module.css";

const RemoveModal = ({ remove, removeLists}) => {

  const closeRemoveModal = () => {
    remove()
  };

  const removeModal = () => {
    removeLists()
  };

  return(
    <div className={styles.wrap} onClick={() => closeRemoveModal()} >
      <Card >
        <form onSubmit={(e) => e.preventDefault()} onClick={(e) => e.stopPropagation()}>
          <h2>Удалить выбранные элементы?</h2>
          <div className={styles.elButton}>
            <Button onClick={() => {removeModal(); closeRemoveModal()}}>Удалить</Button>
            <Button onClick={() => closeRemoveModal()}>Отмена</Button>
          </div>
        </form>
      </Card>
    </div>
  )
};

export default RemoveModal;


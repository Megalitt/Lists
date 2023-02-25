import Card from './components/Card';
import styles from './App.module.css';
import Button from './components/Button';
import { useDispatch, useSelector } from "react-redux";
import { removeListAction } from './store/listReduser';
import { fetchList } from './asyngAction/list';
import AddModal from './components/AddModal';
import { useState } from 'react';
import RemoveModal from './components/RemoveModal';
import LiElement from './components/LiElement';

function App() {

  const dispatch = useDispatch();
  const lists = useSelector(state => state.listReduser);
  const [remove, setRemove] = useState(false);
  const [modal, setModal] = useState(false);
  
  const removeList = () => {
    setRemove(state => !state)
  };

  const addModal = () => {
    setModal(state => !state) 
  };

  const removeLists = () => 
    lists.ar.forEach(element => 
      dispatch(removeListAction(element.id))
    );

  return (
    <div className={styles.App}>
      {modal && <AddModal 
        modal={addModal}
        dispatch={dispatch}
      />}
      {remove && <RemoveModal 
        remove={removeList}
        removeLists={removeLists}
      />}
      <Card>
        <Card>
          <Button onClick={() => addModal()}>Добавить</Button>
          <Button onClick={() => removeList()}>Удалить</Button>
          <Button onClick={() => dispatch(fetchList())}>Загрузка с API</Button>
        </Card>
        <Card>
          {lists.lists.length > 0 ? 
          <ul className={styles.ul}>
            {lists.lists.map((list, index) =>
              <LiElement
                dispatch={dispatch}
                list={list}
                index={index}
                key={list.id}
                name={list.name} 
              >
                {list.name}
              </LiElement>
            )}
          </ul>
          : 
          <div className={styles.text}>
            Список клиентов пуст!
          </div>
          } 
        </Card>
      </Card>
    </div>
  );
}

export default App;

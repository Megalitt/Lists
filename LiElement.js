import cls from 'classnames';
import { addArAction } from '../store/listReduser';
import { useState, useRef } from 'react';
import styles from "./LiElement.module.css";
import { addListAction } from '../store/listReduser';

const LiElement = (props) => {

  const [clickList, setClickList] = useState(false);
  const nameInputRef = useRef();
  console.log(nameInputRef);

  const clicksList = (list) => {
    props.dispatch(addArAction(list))
    };

  const cikeList = () => {
    setClickList(state => !state); 
  };

  const classLi = cls(styles.li,{
  [styles["li-back"]]: clickList 
  });

  const [tuClicke, setTuClicke] = useState(false);
  const tuClick = () => {
    setTuClicke(state => !state);
  };

  const inputClick = () => {
    if(nameInputRef.current.value.trim().length > 0){
      props.dispatch(addListAction({
        name:nameInputRef.current.value,
        id: props.list.id,
      }))};
      console.log("ref", nameInputRef.current.value);
      setTuClicke(state => !state);
    }

  return (
    (tuClicke ? 
      <div>
        <input 
          ref={nameInputRef}
          onKeyDown={(e) => {e.key === 'Enter' && inputClick()}}
          className={styles.input}
          onDoubleClick={() => tuClick()}
        />
      </div>
       :
      <li
        key={props.index}
        className={classLi}
        onClick={() => {clicksList(props.list); cikeList()}}
        onDoubleClick={() => tuClick()}
        >
        {props.children}
      </li>
    )
  )
};

export default LiElement;
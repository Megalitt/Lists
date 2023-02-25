import Card from "./Card";
import Button from "./Button";
import styles from "./AddModal.module.css";
import { addListAction } from "../store/listReduser";
import { useState } from "react";

const AddModal = ({dispatch, modal}) => {

  const [input, setInput] = useState('');
  const [inputState, setInputState] = useState(false);
  const [inputError, setInputError] = useState("Поле не может быть пустым");

  const closeModal = () => {
    modal()
  };

  const re = /^(([a-zA-Z' -]{1,80})|([а-яА-ЯЁёІіЇїҐґЄє' -]{1,80}))$/u;

  const nameChange = (e) => {
    setInput(e.target.value)
    if(!re.test(String(e.target.value).toLowerCase())){
      setInputError('Некорректное имя')
    }else{
      setInputError('')
    }
  };

 

  const addList = (name) =>{
    const list = {
      name,
      id: Date.now(),
    }
    if(name.trim().length > 0 && (inputState && inputError === '')){
      console.log(list)
      dispatch(addListAction(list))
    }
  };

   const blurHandler =() => {
      setInputState(true)
  };

  return(
    <div className={styles.wrap} onClick={() => closeModal()} >
      <Card >
          <form className={styles.form} onClick={(e) => e.stopPropagation()}>
            <label htmlFor="m2" className={styles.label}>Введите имя</label>
            {(inputState && inputError) && <div className={styles.error}>{inputError}</div>}
            <input
              value={input}
              name="name"
              onBlur={(e) => blurHandler(e)}
              // onFocus={(e) => blurHandler(e)}
              id ='m2'
              className={styles.input}
              type="text"
              onChange={(e) => nameChange(e)}
            />
            <div className={styles.elButton}>
              <Button onClick={() => {addList(input); (inputState && inputError === '')  && closeModal()}}>Ок</Button>
              <Button onClick={() => closeModal()}>Отмена</Button>
            </div>
          </form>
      </Card>
    </div>
  )
};

export default AddModal;
import { addTestListAction } from "../store/listReduser";

export const fetchList = () => {
  return (dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(addTestListAction(json)));
  }           
};
const defaultList = {
  lists: [],
  ar: [],
};

const ADD_LIST = "ADD_LIST";
const REMOVE_LIST = "REMOVE_LIST";
const ADD_TEST = "ADD_TEST";
const ADD_ARR_LIST = "ADD_ARR_LIST";

export const listReduser = (state = defaultList, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {...state, lists: [...state.lists, action.payload]}
    case REMOVE_LIST:
      return {...state, lists: state.lists.filter(list => list.id !== action.payload), ar: []}
    case ADD_TEST:
      return {...state, lists: [...state.lists, ...action.payload]}
      case ADD_ARR_LIST:
        return {...state, ar: [...state.ar, action.payload]}
    default:
      return state;   
  }
};

export const addListAction = (payload) => ({type: ADD_LIST, payload});
export const removeListAction = (payload) => ({type: REMOVE_LIST, payload});
export const addTestListAction = (payload) => ({type: ADD_TEST, payload});
export const addArAction = (payload) => ({type: ADD_ARR_LIST, payload});
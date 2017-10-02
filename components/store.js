/// redux for store
import { createStore } from 'redux';


/////

export const counter = (state = 0, action) => {
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      return state;
    }
  }

export const user = {myname:'name'}
  
let store = createStore(counter,user);

export default store;

  
/////
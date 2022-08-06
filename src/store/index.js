import { act } from 'react-dom/test-utils';
import { createStore } from 'redux'
const initstate={counter:0,showtoggle:false};
const counterReducer = (state = initstate, action) => {

    if (action.type === "decrease")
    {
        return{...state,counter:state.counter - action.payload}
    }
    if (action.type === "increase") 
    
     {
       return { ...state, counter: state.counter + action.payload };
     }
     if (action.type === "ShowToggle") {
       return { ...state, showtoggle: !state.showtoggle };
     }
      return state;
};
//app init ->run store->action(null) ->counter reducer  
 const store = createStore(counterReducer);
//to read store from any where inside react 
 export default store
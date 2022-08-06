import logo from "./logo.svg";
import "./App.css";
//hook to get state from store
import { useSelector, useDispatch } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

function App() {
  // to use  dispatch function
  const dispatch = useDispatch();
  const globalState = useSelector((state)=>state)
  //to get all counter state from global state
//   const state = useSelector((state) => {
//     if (state.counter < 1) {
//       return "no number";
//     } else {
//       return state.counter;
//     }
//   });
// // get state to show/hide counter that nemed showtoggle
//   const toggleState = useSelector((state) => state.showtoggle);
//=====================================================================================
//create function to handel if counter less than 0 return no number 
const handelcounter=(value)=>{
      if (value< 1) {
      return "no number";
    } else {
      return value;
    }
}
//==================================================================
    //create function to dispatch action to increase number
    let  increase = () => {
      const action = { type: "increase", payload: 4 };
      dispatch(action);
    };
    //create function to decrease counter
    const decrease = () => {
      const action = { type: "decrease", payload: 2 };
      dispatch(action);
    };
    //create function to dispatch show/hide counter
    const toggle=()=>
    {
      dispatch({type:"ShowToggle"})
    }

  
  return (
    <>
      {globalState.showtoggle && (
        <>
          <h1>counter: { handelcounter( globalState.counter)}</h1>
          <button id="increase" onClick={increase}>
            increase
          </button>
          <button id="decreas" onClick={decrease}>
            decreas
          </button>
        </>
      )}
      <button id="show" onClick={toggle}>
        hide/show
      </button>
    </>
  );
}

export default App;

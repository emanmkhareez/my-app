import logo from "./logo.svg";

import "./App.css";
//hook to get state from store
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function App() {

  // to use  dispatch function
  const dispatch = useDispatch();
  const globalState = useSelector((state)=>state)

  //============================useEffect=============================
useEffect(() => {  dispatch({ type: "increase", payload:10})},[]);


  //===============================another way to use useselector====================================================
 
  //to get all counter state from global state
//   const state = useSelector((state) => {
//     if (state.counter < 1) {
//       return "no number";
//     } else {
//       return state.counter;
//     }
//   });
//=================================before using global state=========================================================
// // get state to show/hide counter that nemed showtoggle
//   const toggleState = useSelector((state) => state.showtoggle);

//=======================================handelCounter==============================================
//create function to handel if counter less than 0 return no number 
const handelcounter=(value)=>{
      if (value< 1) {
      return "no number";
    } else {
      return value;
    }
}
//==========================global function to increase && decrease ========================================
let counterOperation = (type, payload) => {
  dispatch({ type, payload });
};
//===================================================================
    //create function to dispatch action to increase number
    // let  increase = () => {
    //   const action = { type: "increase", payload: 4 };
    //   dispatch(action);
    // };
    //create function to decrease counter
    // const decrease = () => {
    //   const action = { type: "decrease", payload: 2 };
    //   dispatch(action);
    // };
    //======================================================
    //create function to dispatch show/hide counter
    const toggle=()=>
    {
      dispatch({type:"ShowToggle"})
    }

  
  return (
    <>
      {globalState.showtoggle && (
        <>
          <h1>counter: {handelcounter(globalState.counter)}</h1>
          <button id="increase" onClick={() => counterOperation("increase", 4)}>
            increase
          </button>
          <button id="decreas" onClick={() => counterOperation("decrease",2)}>
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

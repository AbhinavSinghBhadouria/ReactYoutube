import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // now we are going to use hooks
  // data type= let bcoz we need to change the val eevry time
  // counter= the value after the updation
  // setCounter = it is a function that will update the value of counter
  // val= initial value of the counter
  const val=0;
  let [counter,setCounter]=useState(val);
  //let counter=5. kyu issse to koe sync nhi tha state or ui ka
  const addValue=()=>{
    if(counter<20){
    counter=counter+1;
    }
    else{
      console.log("Limit reached, cannot add more than 20");
    }
    setCounter(counter);
    // this will not work as it will not update the value of counter in the UI
    // we need to use setCounter to update the value of counter in the UI
    //console.log("Clicked",counter);
    
  }

  const removeValue=()=>{
    if(counter>0){
    counter=counter-1;
  }
  else{
    console.log("Limit reached, cannot remove less than 0");
  }
    setCounter(counter);
  }
  return (
    <>
    <h1>learning hooks form doing mistakes</h1>
    <h2>counter values:{counter}</h2>

    <button
    onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button     
    onClick={removeValue}>
      Remove Value {counter}</button>
    </>
  )
}

export default App

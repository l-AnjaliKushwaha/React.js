import { useState } from "react";


function App() {
  //let counter = 15;

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("Clicked : ", counter);
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }else{
      console.log("can not increase the value after 20");
    }
     
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)

    }
    
  }

  return (
    <>
       <h1>Hello I am Anjali</h1>
       <h1>Counter value : {counter}</h1>
       <button 
        onClick={addValue}>Add value {counter}</button>
       <br/>
       <button
       onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App

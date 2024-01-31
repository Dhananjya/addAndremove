import { useState } from "react";


function App() {

 let [counter, setCounter ]= useState(15)
//let counter= 5
const addValue= () => {
    if(counter<20)
   setCounter(counter+1)
  else
   <h1>Not valid </h1>
}
const removeValue = () => {
   if(counter>0)
  setCounter(counter -1 )

}

  return (
       <>
     <h1> First project | Dipesh kafle </h1> 
     <h2> Counter value: {counter}</h2>
     <button
     onClick={addValue}
     > Add value {counter} </button>
     <br />
     <button
      onClick={removeValue}>remove value {counter} </button>
     </>
  )
}

export default App

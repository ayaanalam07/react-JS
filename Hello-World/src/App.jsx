import { useState } from 'react'

function App() {

const [num , setNum] = useState(0);

function addBtn(){
  setNum(num + 1);
}

function lessBtn(){
  if(num === 0){
    alert("You can't go below 0");
  }else{
    setNum(num - 1);
  }
}

function resetBtn(){
  if(num === 0){
    alert("Already Num Value is 0")
  }else{
    setNum(0);
  }
}

  return (
    <>
  <h1>{num}</h1>
  <button onClick={addBtn}>Add Num</button>
  <button onClick={lessBtn}>Less Num</button>
  <button onClick={resetBtn}>Reset</button>


    </>
  )
}

export default App

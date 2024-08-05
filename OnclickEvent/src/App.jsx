import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor]= useState("black")
  return (
    <div className='main'
    style={{backgroundColor : color}}
    >
      <div className='btn-list'>
        <button
        onClick={()=>  setColor("red")}
        style={{backgroundColor: "red"}}
        >
          red
        </button>
        <button
        onClick={()=>{  setColor("blue")}}
        style={{backgroundColor: "blue"}}
        >
          blue
        </button>
        <button
        onClick={()=>{  setColor("yellow")}}
        style={{backgroundColor: "yellow"}}
        >
          yellow
        </button>
        <button
        onClick={()=>{  setColor("olive")}}
        style={{backgroundColor: "olive"}}
        >
          olive
        </button>
        <button
        onClick={()=>{  setColor("green")}}
        style={{backgroundColor: "green"}}
        >
          green
        </button>
        <button
        onClick={()=>{  setColor("lightblue")}}
        style={{backgroundColor: "lightblue"}}
        >
          lightblue
        </button>
        <button
        onClick={()=> setColor("gray")}
        style={{backgroundColor: "gray"}}
        >
          gray
        </button>
      </div>
    </div>
  )
}

export default App

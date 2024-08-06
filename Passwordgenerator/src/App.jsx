import React, { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [character , setCharacter] = useState(false)
  const [number , setNumber] = useState(false)
  const [password, setPassword] = useState("")

  const passwordgenerator = useCallback(()=> {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if(character){
      characters += "!@#$%^&*()_+~"
    }
    if(number){
      characters += "0123456789"
    }
    for (let i = 0; i <= length; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length + 1));
    }
    setPassword(pass)
    
  }, [length, character, number, setPassword]);

  useEffect(() => {
    passwordgenerator();
  }, [length , character, number])
  
  return (
    <>
      <div className='w-full h-screen bg-black text-white flex justify-center pt-8'>
        <div className='text-center text-black bg-gray-700 px-6 py-5 rounded-xl h-fit'>
          <h1 className='text-2xl text-white'>Password Generator</h1>
          <div>
            <input type='text'
            readOnly
            placeholder='Password'
            value={password}
            className='outline-none my-4 py-3 rounded-2xl rounded-r-none px-2 w-[350px]'
            />
            <button 
            className='bg-orange-500 py-3 px-2 rounded-2xl rounded-l-none'
            onClick={()=>{
              navigator.clipboard.writeText(password);
              alert("Password copied to clipboard")
            }}
            >
            Copy
            </button>
          </div>
          <div className='flex items-center gap-5'>
          <input 
          type='range'
            min='8'
            max='30'
            value={length}
            className='w-[100px] mx-auto my-4'
            onChange={(e)=> setLength(e.target.value)}
          />
          <span className='text-white'>Length: {length}</span>
          <div>
            <input
              type='checkbox'
              onChange={() => setNumber(!number)}
            />
            <span
            className='ml-2 text-white'
            >
              Number
            </span>
          </div>
          <div>
            <input
              type='checkbox'
              onChange={() => setCharacter(!character)}
            />
            <span
            className='ml-2 text-white'
            >
              Character
            </span>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
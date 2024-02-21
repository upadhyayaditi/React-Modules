import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()[]{}"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    //this is for select the whole password
    passwordRef.current?.select();
    //this is for select the range of the password
    passwordRef.current?.setSelectionRange(0, 990);

    //this is for copy the password 
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-lg justify-center  mx-auto text-orange-500 shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef} />
        <button onClick={copyPasswordToClipboard}
          className="ontline-none text-white bg-blue-700 px-3 py-0.5 shrink-0">Copy</button>

      </div>
      <div className="flex text-sm gap-x-1">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer ml-5"
          onChange={(e) => { setLength(e.target.value) }} />
        <label className="mr-5">Length: {length}</label>



        <input
          type="checkbox"
          defaultChecked={numberAllowed}
          className="cursor-pointer"
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }} />
        <label className="mr-5">Numbers</label>



        <input
          type="checkbox"
          defaultChecked={charAllowed}
          className="cursor-pointer"
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} />
        <label>characters</label>
      </div>
    </div >
  )
}

export default App

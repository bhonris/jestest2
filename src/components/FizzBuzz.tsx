import React, { useState } from 'react';


export const generateFizzBuzz = (value: string): string[] => {
  throw "Function not implemented"
}

export enum Result {
  yes = "Yes",
  no = "Nope"
}

function FizzBuzz() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState<string>("")
  
  const displayResult = async (event: React.MouseEvent): Promise<void> => {
    const result = generateFizzBuzz(inputValue);
    setResultValue(result.join(" "))

  }  

  return (
    <div className="App">
      <header className="App-header">
        <h1> Fizz Buzz Generator </h1>
        <input type="text" id="name" name="name" value={inputValue} 
          onChange={e => setInputValue(e.target.value)} required/>
        <input onClick={displayResult} type="button" value="Submit"/>
        <h3>{resultValue}</h3>
      </header>
    </div>
  )
  
}

export default FizzBuzz
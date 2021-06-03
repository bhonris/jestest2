import React, {  useState } from 'react';


export const isPalindrome = (value: string): boolean => {
  return value.split("").reverse().join("") === value
}

export enum Result {
  yes = "Yes",
  no = "Nope"
}


const sleep = async (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('')
  const [resultValue, setResultValue] = useState('')
  
  const displayResult = async (event: React.MouseEvent): Promise<void> => {
    setResultValue('calculating...')
    const result = isPalindrome(inputValue) ? Result.yes : Result.no
    setResultValue(result)

  }  

  return (
    <div className="App">
      <header className="App-header">
        <h1> Is it a palindrome? </h1>
        <input type="text" id="name" name="name" value={inputValue} 
          onChange={e => setInputValue(e.target.value)} required/>
        <input onClick={displayResult} type="button" value="Submit"/>
        <h3>{resultValue}</h3>
      </header>
    </div>
  )
  
}

export default PalindromeChecker
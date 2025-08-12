import { useState } from 'react'
import './App.css'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const [name, setName] = useState("Daniel");

  const changeName = () => {
    setName("Estudiante")
  }

  return (
    <>
        <Button label={`Count is ${count}`} parentMethod={countMore} />
        <p>{name}</p>
        <Button label={`Change Name`} parentMethod={changeName} />
    </>
  )
}

export default App

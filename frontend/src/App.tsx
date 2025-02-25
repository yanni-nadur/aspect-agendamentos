import { useState } from 'react'
import { TestAPI } from "./components/TestAPI";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Teste de API</h1>
      <TestAPI />
    </div>
  )
}

export default App

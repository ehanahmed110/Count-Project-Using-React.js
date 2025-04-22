import React from 'react'
import { useState } from 'react'
import { Count } from './components/count'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Count/>
    </>
  )
}

export default App

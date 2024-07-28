import { useState } from 'react'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[rgba(230,173,92,0.65)]'>
      <Container />
    </div>
  )
}

export default App

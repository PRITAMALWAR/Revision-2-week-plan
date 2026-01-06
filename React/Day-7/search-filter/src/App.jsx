import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LiveSearchFilter from './LiveSearchFilter'
import NumberAnalyzer from './NumberAnalyzer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      {/* <LiveSearchFilter/> */}
      <NumberAnalyzer/>
      </>
  )
}

export default App

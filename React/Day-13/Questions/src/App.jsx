import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from './CountdownTimer'
import StockTicker from './StockTicker'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <CountdownTimer/>
   {/* <StockTicker/> */}
   </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormBuilder from './components/FormBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <FormBuilder/>
   </>
  )
}

export default App

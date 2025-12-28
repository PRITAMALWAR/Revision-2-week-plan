import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AutoSaveNotes from './AutoSaveNotes'

function App() {
  const [count, setCount] = useState(0)

  return (
      <AutoSaveNotes/>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RenderRouter, { routesConfig } from '@/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <RenderRouter />
    </BrowserRouter>
  )
}

export default App

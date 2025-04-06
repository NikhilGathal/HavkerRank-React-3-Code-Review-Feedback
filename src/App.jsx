import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CodeReviewFeedback from '../Component/CodeReviewFeedback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CodeReviewFeedback/>
    </>
  )
}

export default App

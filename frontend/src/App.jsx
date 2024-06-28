import { useState } from 'react'
import './App.css'

const URL = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [result, setResult] = useState('')

  return (
    <>
      <div className="app">
        <h1>MERN Render</h1>
        <button onClick={async() => {
          const res = await fetch(`${URL}/ping`)
          const data = await res.json()
          console.log(data)
          setResult(data)
          }}>
            Users
          </button>

          <pre>
            {JSON.stringify(result, null, 2)}
          </pre>

      </div>
    </>
  )
}

export default App

import React from 'react'

const App = () => {
  const getHealth = async () => {
    const response = await fetch('http://localhost:8000/health')
    const data = await response.json()

    console.log(data)
  }

  return (
    <div>
      <p className="bg-green-600 text-white p-4">
        Hello world
      </p>

      <button
        onClick={getHealth}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Check Backend
      </button>
    </div>
  )
}

export default App
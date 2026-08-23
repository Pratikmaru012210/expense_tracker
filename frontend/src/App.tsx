import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from '@clerk/clerk-react'
import { useEffect, useState } from 'react'

const App = () => {
  const { getToken } = useAuth()
  const [healthStatus, setHealthStatus] = useState<{
    status?: string
    message?: string
    error?: string
  } | null>(null)
  const [initialMsg, setInitialMsg] = useState<string>('')

  const getHealth = async () => {
    try {
      const token = await getToken()

      const response = await fetch(`${import.meta.env.VITE_API_URL}/health`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await response.json()
      setHealthStatus(data)
      console.log(data)
    } catch (err) {
      console.error(err)
      setHealthStatus({ error: 'Failed to fetch health status' })
    }
  }

  useEffect(() => {
    const getInitialReq = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/`)
        const data = await response.json()
        setInitialMsg(data.message || '')
        console.log(data)
      } catch (err) {
        console.error(err)
        setHealthStatus({ error: 'Failed to fetch initial request' })
      }
    }

    getInitialReq()
  }, [])

  return (
    <div className="p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Networth Calculator</h1>
        <div>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      <p className="bg-green-600 text-white p-4 rounded mb-4">{initialMsg}</p>

      <button
        onClick={getHealth}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Check Backend (/health)
      </button>

      {healthStatus && (
        <pre className="mt-4 p-4 bg-gray-100 rounded">
          {JSON.stringify(healthStatus, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default App

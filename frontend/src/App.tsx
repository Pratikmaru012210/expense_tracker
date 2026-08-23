import { useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'

import { FeaturesSection } from './components/home/FeaturesSection'
import { HeroSection } from './components/home/HeroSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'

const App = () => {
  useAuth()

  // Keep the backend check logic for debugging purposes, but remove it from the main UI
  useEffect(() => {
    const getInitialReq = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/`)
        const data = await response.json()
        console.log('Backend Initial Check:', data)
      } catch (err) {
        console.error('Failed to fetch initial request', err)
      }
    }

    getInitialReq()
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}

export default App

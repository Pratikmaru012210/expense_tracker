import { ClerkProvider } from '@clerk/clerk-react'
import { jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'

import App from './App'

jest.mock('@clerk/clerk-react', () => ({
  useAuth: () => ({
    getToken: jest.fn(() => Promise.resolve('mock-token')),
    isLoaded: true,
    isSignedIn: true,
  }),
  SignInButton: () => <div>Sign In</div>,
  SignOutButton: () => <div>Sign Out</div>,
  SignedIn: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  SignedOut: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  UserButton: () => <div>User</div>,
}))

test('renders Networth Calculator text', () => {
  render(
    <ClerkProvider publishableKey="pk_test_ZHVtbXktdmFsdWUuY2xlcmsuYWNjb3VudHMuZGV2JA">
      <App />
    </ClerkProvider>
  )
  const headerElement = screen.getByText(/Networth Calculator/i)
  expect(headerElement).toBeInTheDocument()
})

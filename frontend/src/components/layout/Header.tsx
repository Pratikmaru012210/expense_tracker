import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'
import { Wallet } from 'lucide-react'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
            <Wallet size={20} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Networth
          </span>
        </div>

        <nav className="flex items-center gap-4">
          <SignedOut>
            <div className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20">
              <SignInButton mode="modal" />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: 'h-8 w-8',
                },
              }}
            />
          </SignedIn>
        </nav>
      </div>
    </header>
  )
}

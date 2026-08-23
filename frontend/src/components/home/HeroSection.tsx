import { SignInButton } from '@clerk/clerk-react'
import { ArrowRight } from 'lucide-react'

import { HERO_CONTENT } from '../../constants/home.constants'

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-48">
      {/* Background Gradients */}
      <div
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="relative rounded-full bg-primary/10 px-4 py-1.5 text-sm leading-6 text-primary ring-1 ring-inset ring-primary/20">
              {HERO_CONTENT.badge}
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {HERO_CONTENT.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {HERO_CONTENT.subtitle}
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <SignInButton mode="modal">
              <button className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:scale-105 hover:shadow-primary/25">
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </SignInButton>

            <a
              href="#features"
              className="text-sm font-semibold leading-6 text-white transition-colors hover:text-slate-300"
            >
              {HERO_CONTENT.secondaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

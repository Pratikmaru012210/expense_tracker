import { FEATURES } from '../../constants/home.constants'

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Powerful features for your finances
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            We provide all the tools necessary to gain absolute clarity over
            where your money goes and how your wealth is growing.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.id}
                className="group relative flex flex-col items-start rounded-2xl bg-surface p-8 ring-1 ring-surface-border transition-all hover:bg-surface-hover hover:shadow-xl hover:-translate-y-1"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-semibold leading-7 text-white">
                  {feature.title}
                </h3>
                <p className="text-base leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

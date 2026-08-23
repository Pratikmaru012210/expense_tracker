import { FOOTER_CONTENT } from '../../constants/home.constants'

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-slate-400">{FOOTER_CONTENT.copyright}</p>

        <div className="flex gap-6">
          {FOOTER_CONTENT.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

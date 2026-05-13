import { useState, useEffect, useRef, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Quiénes Somos', href: '/quienes-somos',
    dropdown: [
      { label: 'Sanar Perú',       href: '/quienes-somos', hash: 'sanar-peru' },
      { label: 'Misión y Visión',  href: '/quienes-somos', hash: 'mision-vision' },
      { label: 'Nuestros Valores', href: '/quienes-somos', hash: 'valores' },
      { label: 'Nuestro Método',   href: '/quienes-somos', hash: 'metodo' },
    ],
  },
  {
    label: 'Servicios', href: '/servicios/medicina-alternativa',
    dropdown: [
      { label: 'Medicina Alternativa',   href: '/servicios/medicina-alternativa', hash: '' },
      { label: 'Prácticas Ancestrales',  href: '/servicios/practicas-ancestrales', hash: '' },
    ],
  },
  {
    label: 'Productos', href: '/productos',
    dropdown: [
      { label: 'Productos Alternativos', href: '/productos', hash: 'alternativos' },
      { label: 'Productos Ancestrales',  href: '/productos', hash: 'ancestrales' },
    ],
  },
  { label: 'Contáctanos', href: '/contactanos' },
]

const LogoSVG = ({ light }: { light: boolean }) => (
  <svg width="32" height="36" viewBox="0 0 32 38" fill="none">
    <path d="M16 2 C7 10, 4 16, 4 23 A12 12 0 0 0 28 23 C28 16, 25 10, 16 2Z"
      fill="none" stroke="#C9A227" strokeWidth="1.8"/>
    <path d="M16 8 C10 14, 9 18, 9 23 A7 7 0 0 0 23 23 C23 18, 22 14, 16 8Z"
      fill={light ? '#1E6B42' : '#2E9E62'} opacity="0.95"/>
    <line x1="16" y1="8" x2="16" y2="32" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M16 16 C14 18,10 20,9 23" stroke={light ? '#1E6B42' : '#4DBF80'} strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
    <path d="M16 16 C18 18,22 20,23 23" stroke={light ? '#1E6B42' : '#4DBF80'} strokeWidth="0.9" strokeLinecap="round" opacity="0.7"/>
  </svg>
)

const Logo = ({ light }: { light: boolean }) => (
  <div className="cursor-pointer select-none">
    {/* Mobile: icon only */}
    <div className="flex sm:hidden">
      <LogoSVG light={light} />
    </div>
    {/* sm and up: icon + text */}
    <div className="hidden sm:flex items-center gap-2.5">
      <LogoSVG light={light} />
      <div>
        <div className={`font-extrabold text-[16px] tracking-[0.2em] leading-none ${light ? 'text-s-900' : 'text-white'}`}>
          SANAR
        </div>
        <div className={`text-[6.5px] tracking-[0.16em] uppercase font-semibold leading-none mt-[3px] ${light ? 'text-s-600' : 'text-s-300'}`}>
          Medicina Ancestral · Perú
        </div>
      </div>
    </div>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [mobileDD, setMobileDD]     = useState<string|null>(null)
  const [desktopDD, setDesktopDD]   = useState<string|null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout>|null>(null)
  const location   = useLocation()
  const navigate   = useNavigate()
  const isHome     = location.pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setMenuOpen(false); setMobileDD(null); setDesktopDD(null) }, [location.pathname])

  const openDD  = useCallback((l: string) => { if(closeTimer.current) clearTimeout(closeTimer.current); setDesktopDD(l) }, [])
  const startClose = useCallback(() => { closeTimer.current = setTimeout(() => setDesktopDD(null), 130) }, [])

  const go = (href: string, hash?: string) => {
    setMenuOpen(false); setDesktopDD(null)
    if (hash) {
      if (location.pathname === href) {
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior:'smooth', block:'start' }), 50)
      } else {
        navigate(href)
        setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior:'smooth', block:'start' }), 380)
      }
    } else {
      navigate(href); window.scrollTo({ top:0, behavior:'smooth' })
    }
  }

  // pill state class
  const pillState = isHome && !scrolled ? 'hero-top' : scrolled ? 'scrolled' : 'at-top'
  const isLight   = !isHome || scrolled

  return (
    <nav className={`nav-pill ${pillState}`}>
      <div className="flex items-center justify-between px-5 sm:px-6 py-3">

        {/* Logo */}
        <button onClick={() => go('/')}><Logo light={isLight} /></button>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map(item => item.dropdown ? (
            <div key={item.label} className="dd-wrap relative"
              onMouseEnter={() => openDD(item.label)} onMouseLeave={startClose}>
              <button
                onClick={() => go(item.href)}
                className={`nav-link flex items-center gap-1 px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${isLight ? 'hover:bg-s-100' : 'hover:bg-white/10'}`}
              >
                {item.label}
                <ChevronDown size={13} className={`transition-transform duration-200 ${desktopDD===item.label?'rotate-180':''}`}/>
              </button>
              {desktopDD === item.label && (
                <div className="dd-panel" onMouseEnter={() => openDD(item.label)} onMouseLeave={startClose}
                  style={{opacity:1,visibility:'visible',transform:'translateY(0)'}}>
                  {item.dropdown.map(sub => (
                    <button key={sub.label} onClick={() => go(sub.href, sub.hash||undefined)}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium text-s-700 hover:bg-s-100 hover:text-s-600 transition-colors">
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <button key={item.label} onClick={() => go(item.href)}
              className={`nav-link px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${isLight ? 'hover:bg-s-100' : 'hover:bg-white/10'}`}>
              {item.label}
            </button>
          ))}
        </div>

        {/* CTA + burger */}
        <div className="flex items-center gap-2">
          <button onClick={() => go('/contactanos')}
            className="hidden lg:block btn-primary text-sm py-2.5 px-5">
            Agendar Cita
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${isLight ? 'text-s-800 hover:bg-s-100' : 'text-white hover:bg-white/10'}`}
            aria-label="Menú">
            {menuOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden mx-3 mb-3 bg-white border border-s-border rounded-[24px] overflow-hidden shadow-xl">
          {navItems.map(item => (
            <div key={item.label}>
              <button
                onClick={() => item.dropdown ? setMobileDD(mobileDD===item.label?null:item.label) : go(item.href)}
                className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-semibold text-s-800 hover:bg-s-50 transition-colors">
                {item.label}
                {item.dropdown && <ChevronDown size={14} className={`text-s-400 transition-transform ${mobileDD===item.label?'rotate-180':''}`}/>}
              </button>
              {item.dropdown && mobileDD===item.label && (
                <div className="border-t border-s-50 bg-s-50">
                  {item.dropdown.map(sub => (
                    <button key={sub.label} onClick={() => go(sub.href, sub.hash||undefined)}
                      className="w-full text-left pl-8 pr-5 py-3 text-sm text-s-600 hover:text-s-600 hover:bg-s-100 transition-colors font-medium">
                      {sub.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="flex gap-2 p-4 border-t border-s-50">
            <button onClick={() => go('/contactanos')} className="flex-1 btn-primary justify-center text-sm py-2.5">
              Agendar Cita
            </button>
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer"
              className="flex-1 btn-outline justify-center text-sm py-2.5">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

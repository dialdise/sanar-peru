import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown, Leaf } from 'lucide-react'

const navItems = [
  { label: 'Inicio', href: '/' },
  {
    label: 'Quiénes Somos',
    href: '/quienes-somos',
    dropdown: [
      { label: 'Sanar Perú', href: '/quienes-somos', hash: 'sanar-peru' },
      { label: 'Misión y Visión', href: '/quienes-somos', hash: 'mision-vision' },
      { label: 'Nuestros Valores', href: '/quienes-somos', hash: 'valores' },
      { label: 'Nuestro Método', href: '/quienes-somos', hash: 'metodo' },
    ],
  },
  {
    label: 'Servicios',
    href: '/servicios/medicina-alternativa',
    dropdown: [
      { label: 'Medicina Alternativa', href: '/servicios/medicina-alternativa', hash: '' },
      { label: 'Prácticas Ancestrales', href: '/servicios/practicas-ancestrales', hash: '' },
    ],
  },
  {
    label: 'Productos',
    href: '/productos',
    dropdown: [
      { label: 'Productos Alternativos', href: '/productos', hash: 'alternativos' },
      { label: 'Productos Ancestrales', href: '/productos', hash: 'ancestrales' },
    ],
  },
  { label: 'Contáctanos', href: '/contactanos' },
]

const SanarLogo = ({ dark }: { dark: boolean }) => (
  <div className="flex items-center gap-2.5">
    <div className="w-8 h-9">
      <svg viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M16 2 C7 10, 4 16, 4 23 A12 12 0 0 0 28 23 C28 16, 25 10, 16 2Z"
          fill="none" stroke="#C9A227" strokeWidth="1.8" />
        <path d="M16 8 C10 14, 9 18, 9 23 A7 7 0 0 0 23 23 C23 18, 22 14, 16 8Z"
          fill="#2E7D32" opacity="0.9" />
        <path d="M16 8 L16 32" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 16 C14 18, 10 20, 9 23" stroke="#4CAF50" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
        <path d="M16 16 C18 18, 22 20, 23 23" stroke="#4CAF50" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
      </svg>
    </div>
    <div>
      <div className={`font-bold text-[17px] tracking-[0.18em] leading-none ${dark ? 'text-forest-800' : 'text-white'}`}>SANAR</div>
      <div className={`text-[7px] tracking-widest uppercase leading-none mt-0.5 font-medium ${dark ? 'text-gold-700' : 'text-gold-400'}`}>
        Medicina Alternativa · Perú
      </div>
    </div>
  </div>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileOpen(null)
    setActiveDropdown(null)
  }, [location.pathname])

  const openDD = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }
  const closeDD = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  const handleNavClick = (href: string, hash?: string) => {
    setMenuOpen(false)
    setActiveDropdown(null)
    if (hash) {
      if (location.pathname === href) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        navigate(href)
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 350)
      }
    } else {
      navigate(href)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isDark = isHome && !scrolled
  const navBg = isDark
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm'

  const linkCls = isDark
    ? 'text-white/85 hover:text-white hover:bg-white/10'
    : 'text-gray-600 hover:text-forest-700 hover:bg-green-50'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button onClick={() => handleNavClick('/')} className="cursor-pointer">
            <SanarLogo dark={!isDark} />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDD(item.label)}
                  onMouseLeave={closeDD}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${linkCls}`}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => openDD(item.label)}
                      onMouseLeave={closeDD}
                      className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-black/8 py-1.5 z-50 overflow-hidden"
                    >
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={() => handleNavClick(sub.href, sub.hash || undefined)}
                          className="w-full text-left block px-4 py-2.5 text-sm text-gray-600 hover:text-forest-700 hover:bg-green-50 transition-colors"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${linkCls}`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('/contactanos')}
              className="hidden sm:flex items-center gap-1.5 bg-forest-600 hover:bg-forest-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer shadow-sm"
            >
              <Leaf size={13} />
              Agendar Cita
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl">
          <div className="px-4 py-3 space-y-0.5">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileOpen(mobileOpen === item.label ? null : item.label)
                    } else {
                      handleNavClick(item.href)
                    }
                  }}
                  className="flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-forest-700 hover:bg-green-50 transition-colors text-left"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown size={14} className={`text-gray-400 transition-transform ${mobileOpen === item.label ? 'rotate-180' : ''}`} />
                  )}
                </button>
                {item.dropdown && mobileOpen === item.label && (
                  <div className="ml-3 mb-1 border-l-2 border-green-100 pl-3 space-y-0.5">
                    {item.dropdown.map((sub) => (
                      <button
                        key={sub.label}
                        onClick={() => handleNavClick(sub.href, sub.hash || undefined)}
                        className="w-full text-left px-3 py-2.5 text-sm text-gray-500 hover:text-forest-700 hover:bg-green-50 transition-colors rounded-lg"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-2 pt-3 pb-1 border-t border-gray-100 mt-2">
              <button
                onClick={() => handleNavClick('/contactanos')}
                className="flex-1 text-center bg-forest-600 hover:bg-forest-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
              >
                Agendar Cita
              </button>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center border border-forest-600 text-forest-700 text-sm font-medium px-4 py-2.5 rounded-full hover:bg-green-50 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

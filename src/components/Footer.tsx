import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-forest-950 border-t border-forest-800/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-10">
                <svg viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M16 2 C7 10, 4 16, 4 23 A12 12 0 0 0 28 23 C28 16, 25 10, 16 2Z"
                    fill="none" stroke="#D4AF37" strokeWidth="1.8" />
                  <path d="M16 8 C10 14, 9 18, 9 23 A7 7 0 0 0 23 23 C23 18, 22 14, 16 8Z"
                    fill="#2E7D32" opacity="0.9" />
                  <path d="M16 8 L16 32" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-lg tracking-[0.15em]">SANAR</div>
                <div className="text-gold-600 text-[7px] tracking-widest uppercase font-medium">Centro de Medicina Ancestral</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Bienestar natural, medicina alternativa y prácticas ancestrales con acompañamiento personalizado.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: InstagramIcon, href: '#', label: 'Instagram' },
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
                { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-forest-700/60 flex items-center justify-center text-white/50 hover:text-gold-500 hover:border-gold-700/50 transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', href: '/' },
                { label: 'Quiénes Somos', href: '/quienes-somos' },
                { label: 'Medicina Alternativa', href: '/servicios/medicina-alternativa' },
                { label: 'Prácticas Ancestrales', href: '/servicios/practicas-ancestrales' },
                { label: 'Productos', href: '/productos' },
                { label: 'Contáctanos', href: '/contactanos' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-5">Servicios</h4>
            <ul className="space-y-3">
              {[
                'Evaluación Integral de Bienestar',
                'Analizador Cuántico BIOPLASM',
                'Orientación Digestiva Natural',
                'Desintoxicación Natural',
                'Apoyo al Sistema Inmune',
                'Terapias Complementarias',
                'Nutrición Funcional',
                'Sanación con Ayahuasca',
              ].map((s) => (
                <li key={s}>
                  <span className="text-white/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-600 text-xs font-semibold tracking-widest uppercase mb-5">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-gold-700 mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">Lima, Perú<br />Consultar dirección exacta</span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-gold-700 mt-0.5 flex-shrink-0" />
                <a href="tel:+51999999999" className="text-white/50 hover:text-white text-sm transition-colors">
                  +51 999 999 999
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-gold-700 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sanarperu.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  info@sanarperu.com
                </a>
              </li>
            </ul>
            <a
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/20 text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Sanar Perú. Todos los derechos reservados.
          </p>
          <p className="text-white/30 text-xs text-center">
            Sanar Perú no reemplaza la atención médica convencional. Nuestro enfoque es complementario y orientativo.
          </p>
        </div>
      </div>
    </footer>
  )
}

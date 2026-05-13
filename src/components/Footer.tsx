import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons'

export default function Footer() {
  return (
    <footer className="bg-s-900 text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="30" height="34" viewBox="0 0 32 38" fill="none">
                <path d="M16 2 C7 10,4 16,4 23 A12 12 0 0 0 28 23 C28 16,25 10,16 2Z" fill="none" stroke="#C9A227" strokeWidth="1.8"/>
                <path d="M16 8 C10 14,9 18,9 23 A7 7 0 0 0 23 23 C23 18,22 14,16 8Z" fill="#4DBF80" opacity="0.85"/>
                <line x1="16" y1="8" x2="16" y2="32" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              <div>
                <div className="font-extrabold text-[15px] tracking-[0.2em]">SANAR</div>
                <div className="text-s-300 text-[6.5px] tracking-[0.16em] uppercase font-semibold mt-0.5">Medicina Ancestral · Perú</div>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-5">Bienestar natural, medicina alternativa y prácticas ancestrales con acompañamiento personalizado.</p>
            <div className="flex gap-3">
              {[
                { I:InstagramIcon, href:'#', l:'Instagram' },
                { I:FacebookIcon,  href:'#', l:'Facebook' },
                { I:YoutubeIcon,   href:'#', l:'YouTube' },
              ].map(({ I, href, l }) => (
                <a key={l} href={href} aria-label={l}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 transition-colors">
                  <I size={14}/>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-5">Navegación</h4>
            <ul className="space-y-3">
              {[
                { l:'Inicio', h:'/' },
                { l:'Quiénes Somos', h:'/quienes-somos' },
                { l:'Medicina Alternativa', h:'/servicios/medicina-alternativa' },
                { l:'Prácticas Ancestrales', h:'/servicios/practicas-ancestrales' },
                { l:'Productos', h:'/productos' },
                { l:'Contáctanos', h:'/contactanos' },
              ].map(({ l, h }) => (
                <li key={l}><Link to={h} className="text-white/45 hover:text-white text-sm transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-5">Servicios</h4>
            <ul className="space-y-3">
              {['Evaluación Integral','Analizador BIOPLASM','Orientación Digestiva','Desintoxicación Natural','Sistema Inmune','Terapias Energéticas','Nutrición Funcional','Ceremonias Ancestrales'].map(s => (
                <li key={s}><span className="text-white/40 text-sm">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-5">Contacto</h4>
            <ul className="space-y-4">
              {[
                { I:MapPin, v:'Lima, Perú', h:null },
                { I:Phone,  v:'+51 999 999 999', h:'tel:+51999999999' },
                { I:Mail,   v:'info@sanarperu.com', h:'mailto:info@sanarperu.com' },
              ].map(({ I, v, h }) => (
                <li key={v} className="flex gap-3">
                  <I size={14} className="text-s-400 mt-0.5 flex-shrink-0"/>
                  {h ? <a href={h} className="text-white/45 hover:text-white text-sm transition-colors">{v}</a>
                     : <span className="text-white/45 text-sm">{v}</span>}
                </li>
              ))}
            </ul>
            <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Sanar Perú. Todos los derechos reservados.</p>
          <p className="text-white/20 text-xs">Nuestro enfoque es complementario y orientativo. No reemplaza la atención médica convencional.</p>
        </div>
      </div>
    </footer>
  )
}

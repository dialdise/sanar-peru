import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = ['Evaluación Integral de Bienestar','Evaluación con BIOPLASM','Orientación Digestiva Natural','Desintoxicación Natural','Apoyo Intestinal','Sistema Inmune Natural','Terapias Complementarias','Nutrición Funcional','Prácticas Ancestrales / Ayahuasca','Consulta sobre Productos','Otra consulta']

export default function Contactanos() {
  useScrollAnimation()
  const [sent, setSent] = useState(false)
  const [f, setF] = useState({ nombre:'', email:'', telefono:'', servicio:'', mensaje:'' })
  const handle = (e: FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <main className="pt-20">

      {/* ── HERO ── */}
      <section className="py-20 sm:py-28 bg-s-bg-alt">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="section-label reveal">Contáctanos</span>
          <h1 className="reveal d1 text-5xl sm:text-6xl font-extrabold text-s-900 leading-tight mb-5">
            Hablemos de<br/><span className="text-s-600">tu bienestar</span>
          </h1>
          <p className="reveal d2 text-s-muted text-xl leading-relaxed">
            Estamos aquí para escucharte. Agenda tu consulta o escríbenos por WhatsApp — respondemos a la brevedad.
          </p>
        </div>
      </section>

      <div className="divider"/>

      {/* ── FORM + INFO ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">

            {/* Form */}
            <div className="reveal-l">
              <h2 className="text-3xl font-extrabold text-s-900 mb-8">Envíanos un mensaje</h2>
              {sent ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-s-100 flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-s-600"/>
                  </div>
                  <h3 className="text-s-900 text-xl font-bold mb-3">¡Mensaje enviado!</h3>
                  <p className="text-s-muted">Gracias por contactarnos. Te responderemos a la brevedad.</p>
                </div>
              ) : (
                <form onSubmit={handle} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { key:'nombre',   label:'Nombre completo *',     type:'text',  ph:'Tu nombre', req:true  },
                      { key:'email',    label:'Correo electrónico *',  type:'email', ph:'tu@correo.com', req:true },
                    ].map(fd => (
                      <div key={fd.key}>
                        <label className="block text-xs font-bold text-s-700 uppercase tracking-wider mb-2">{fd.label}</label>
                        <input type={fd.type} required={fd.req} placeholder={fd.ph}
                          value={(f as Record<string,string>)[fd.key]}
                          onChange={e => setF({...f, [fd.key]: e.target.value})}
                          className="w-full border border-s-border rounded-xl px-4 py-3 text-s-900 text-sm placeholder-s-subtle focus:outline-none focus:border-s-600 focus:ring-2 focus:ring-s-600/15 transition-all bg-white"/>
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-s-700 uppercase tracking-wider mb-2">Teléfono / WhatsApp</label>
                      <input type="tel" placeholder="+51 999 999 999"
                        value={f.telefono} onChange={e => setF({...f, telefono:e.target.value})}
                        className="w-full border border-s-border rounded-xl px-4 py-3 text-s-900 text-sm placeholder-s-subtle focus:outline-none focus:border-s-600 focus:ring-2 focus:ring-s-600/15 transition-all bg-white"/>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-s-700 uppercase tracking-wider mb-2">Servicio de interés</label>
                      <select value={f.servicio} onChange={e => setF({...f, servicio:e.target.value})}
                        className="w-full border border-s-border rounded-xl px-4 py-3 text-sm text-s-700 focus:outline-none focus:border-s-600 focus:ring-2 focus:ring-s-600/15 transition-all bg-white appearance-none">
                        <option value="">Seleccionar...</option>
                        {SERVICES.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-s-700 uppercase tracking-wider mb-2">Tu mensaje *</label>
                    <textarea required rows={5} placeholder="Cuéntanos brevemente sobre tu situación y qué estás buscando..."
                      value={f.mensaje} onChange={e => setF({...f, mensaje:e.target.value})}
                      className="w-full border border-s-border rounded-xl px-4 py-3 text-s-900 text-sm placeholder-s-subtle focus:outline-none focus:border-s-600 focus:ring-2 focus:ring-s-600/15 transition-all bg-white resize-none"/>
                  </div>
                  <p className="text-s-subtle text-xs leading-relaxed">
                    Al enviar este formulario aceptas que Sanar Perú se ponga en contacto contigo. Tu información es confidencial.
                  </p>
                  <button type="submit" className="btn-primary w-full justify-center py-3.5">
                    <Send size={16}/> Enviar mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="reveal-r space-y-6">
              <h2 className="text-3xl font-extrabold text-s-900">Información</h2>

              {/* WhatsApp */}
              <a href="https://wa.me/51999999999?text=Hola%20Sanar%20Per%C3%BA" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#f0fbf4] border border-[#a0e0b8] rounded-2xl p-5 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#1a6b35] font-bold text-sm mb-0.5">WhatsApp — Respuesta rápida</div>
                  <div className="text-s-muted text-sm">+51 999 999 999</div>
                </div>
              </a>

              <div className="card p-6 space-y-5">
                {[
                  { Icon:Phone, label:'Teléfono',  val:'+51 999 999 999',     href:'tel:+51999999999' },
                  { Icon:Mail,  label:'Correo',    val:'info@sanarperu.com',  href:'mailto:info@sanarperu.com' },
                  { Icon:MapPin,label:'Ubicación', val:'Lima, Perú',          href:null },
                  { Icon:Clock, label:'Atención',  val:'Lun–Vie 9am–7pm · Sáb 9am–2pm', href:null },
                ].map(({ Icon, label, val, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-s-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-s-600"/>
                    </div>
                    <div>
                      <div className="text-s-subtle text-xs uppercase tracking-wider font-semibold mb-0.5">{label}</div>
                      {href
                        ? <a href={href} className="text-s-800 text-sm font-medium hover:text-s-600 transition-colors">{val}</a>
                        : <span className="text-s-800 text-sm font-medium">{val}</span>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-5">
                <p className="text-s-subtle text-xs uppercase tracking-wider font-semibold mb-4">Síguenos</p>
                <div className="flex gap-3">
                  {[
                    { Icon:InstagramIcon, label:'Instagram', href:'#' },
                    { Icon:FacebookIcon,  label:'Facebook',  href:'#' },
                    { Icon:YoutubeIcon,   label:'YouTube',   href:'#' },
                  ].map(({ Icon, label, href }) => (
                    <a key={label} href={href} aria-label={label}
                      className="flex items-center gap-2 bg-s-50 border border-s-border rounded-xl px-3 py-2 text-s-600 hover:bg-s-100 transition-colors text-xs font-semibold">
                      <Icon size={14}/>{label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

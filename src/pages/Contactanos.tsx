import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { InstagramIcon, FacebookIcon, YoutubeIcon } from '../components/SocialIcons'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  'Evaluación Integral de Bienestar',
  'Evaluación con BIOPLASM',
  'Orientación Digestiva Natural',
  'Desintoxicación Natural',
  'Apoyo Intestinal',
  'Sistema Inmune Natural',
  'Terapias Complementarias',
  'Nutrición Funcional',
  'Prácticas Ancestrales / Ayahuasca',
  'Consulta sobre Productos',
  'Otra consulta',
]

export default function Contactanos() {
  useScrollAnimation()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production, connect to your backend/email service
    setSubmitted(true)
  }

  return (
    <main className="pt-16">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,125,50,0.1)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-5 block">Contáctanos</span>
          <h1 className="reveal delay-100 text-forest-900 text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Hablemos de<br /><span className="gold-shimmer">Tu Bienestar</span>
          </h1>
          <p className="reveal delay-200 text-gray-600 leading-relaxed max-w-xl mx-auto">
            Estamos aquí para escucharte. Agenda tu consulta o escríbenos por WhatsApp —
            responderemos a la brevedad.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CONTACT GRID ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <div className="reveal-left">
              <h2 className="text-forest-900 text-2xl font-medium mb-8">Envíanos un Mensaje</h2>
              {submitted ? (
                <div className="bg-white border border-gray-100 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-700/20 flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-gold-500" />
                  </div>
                  <h3 className="text-forest-900 text-xl font-semibold mb-3">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Gracias por contactarnos. Nos comunicaremos contigo a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.nombre}
                        onChange={e => setForm({ ...form, nombre: e.target.value })}
                        placeholder="Tu nombre completo"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@correo.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                        Teléfono / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={e => setForm({ ...form, telefono: e.target.value })}
                        placeholder="+51 999 999 999"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        value={form.servicio}
                        onChange={e => setForm({ ...form, servicio: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-700/60 transition-colors appearance-none text-gray-700"
                      >
                        <option value="" className="bg-green-50">Seleccionar servicio...</option>
                        {services.map(s => (
                          <option key={s} value={s} className="bg-green-50">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">
                      Tu Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={e => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Cuéntanos brevemente sobre tu situación, cómo te sientes y qué estás buscando..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:border-forest-500 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                    <p className="text-gray-400 text-xs leading-relaxed">
                      Al enviar este formulario, aceptas que Sanar Perú se ponga en contacto contigo para orientarte.
                      Tu información es confidencial y no será compartida con terceros.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <Send size={16} />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="reveal-right space-y-6">
              <h2 className="text-forest-900 text-2xl font-medium mb-2">Información de Contacto</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Puedes escribirnos directamente por WhatsApp para una respuesta más rápida,
                o dejarnos un mensaje y te contactamos a la brevedad.
              </p>

              {/* WhatsApp */}
              <a
                href="https://wa.me/51999999999?text=Hola%20Sanar%20Per%C3%BA%2C%20quisiera%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#25D366]/8 border border-[#25D366]/25 rounded-2xl p-5 hover:bg-[#25D366]/12 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-[#25D366] font-semibold text-sm mb-0.5">WhatsApp — Respuesta Rápida</div>
                  <div className="text-gray-500 text-sm">+51 999 999 999</div>
                </div>
              </a>

              {/* Contact details */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-5">
                {[
                  { icon: Phone, label: 'Teléfono', value: '+51 999 999 999', href: 'tel:+51999999999' },
                  { icon: Mail, label: 'Correo', value: 'info@sanarperu.com', href: 'mailto:info@sanarperu.com' },
                  { icon: MapPin, label: 'Ubicación', value: 'Lima, Perú', href: null },
                  { icon: Clock, label: 'Atención', value: 'Lun–Vie 9am–7pm · Sáb 9am–2pm', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gold-700/15 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-gold-600" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-gray-700 hover:text-forest-700 text-sm transition-colors">{value}</a>
                      ) : (
                        <span className="text-gray-700 text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="bg-white border border-gray-100 rounded-2xl p-5">
                <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">Síguenos</p>
                <div className="flex gap-3">
                  {[
                    { Icon: InstagramIcon, label: 'Instagram', href: '#' },
                    { Icon: FacebookIcon, label: 'Facebook', href: '#' },
                    { Icon: YoutubeIcon, label: 'YouTube', href: '#' },
                  ].map(({ Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex items-center gap-2 bg-forest-700/30 border border-forest-600/30 rounded-xl px-3 py-2 text-gray-500 hover:text-gold-400 hover:border-gold-700/40 transition-colors text-xs"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <div className="h-40 flex items-center justify-center bg-gradient-to-br from-forest-800/50 to-forest-950/80">
                  <div className="text-center">
                    <MapPin size={24} className="text-gold-600 mx-auto mb-2" />
                    <p className="text-gray-400 text-xs">Lima, Perú</p>
                    <p className="text-white/25 text-[10px] mt-1">Consultar dirección exacta por WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

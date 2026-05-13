import { Link } from 'react-router-dom'
import { Heart, Eye, Shield, Lightbulb, Leaf, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const valores = [
  {
    icon: Heart,
    title: 'Respeto',
    desc: 'Cada persona tiene su historia, su ritmo y sus necesidades. Nos adaptamos a ti, no al contrario.',
  },
  {
    icon: Shield,
    title: 'Responsabilidad',
    desc: 'No prometemos curas milagrosas ni reemplazamos tratamientos médicos. Trabajamos con honestidad.',
  },
  {
    icon: Lightbulb,
    title: 'Claridad',
    desc: 'Explicamos las cosas de forma sencilla y entendible, sin tecnicismos innecesarios.',
  },
  {
    icon: Leaf,
    title: 'Prevención',
    desc: 'Creemos que cuidar la salud antes de enfermar es una decisión inteligente y responsable.',
  },
  {
    icon: Eye,
    title: 'Tradición y Modernidad',
    desc: 'Valoramos el conocimiento alternativo y ancestral complementándolo con herramientas actuales de evaluación.',
  },
]

const metodo = [
  {
    step: '01',
    title: 'Te Escuchamos',
    desc: 'Conversamos contigo sobre tus molestias, antecedentes, estilo de vida, alimentación, descanso, estrés, digestión, energía y objetivos de salud. Muchas veces la clave está en detalles que parecen pequeños.',
  },
  {
    step: '02',
    title: 'Evaluamos Tu Estado General',
    desc: 'Podemos realizar una evaluación orientativa con herramientas como BIOPLASM, que nos permite observar posibles desequilibrios energéticos, funcionales o de órganos y sistemas. No reemplaza análisis clínicos ni consulta médica.',
  },
  {
    step: '03',
    title: 'Organizamos Tus Prioridades',
    desc: 'No todo se trabaja al mismo tiempo. Identificamos qué áreas necesitan más atención: digestión, hígado, intestinos, riñones, sistema inmune, energía, sueño, estrés, inflamación, peso, nutrición o hábitos.',
  },
  {
    step: '04',
    title: 'Diseñamos un Plan de Bienestar',
    desc: 'El plan puede incluir recomendaciones de alimentación, hidratación, descanso, apoyo natural, suplementación, protocolos suaves, terapias complementarias o cambios de hábitos. Todo se explica de manera clara y práctica.',
  },
  {
    step: '05',
    title: 'Te Acompañamos',
    desc: 'La salud no cambia de un día para otro. Por eso hacemos seguimiento, resolvemos dudas y ajustamos el plan según tu evolución. Estamos contigo en cada paso del proceso.',
  },
]

export default function QuienesSomos() {
  useScrollAnimation()

  return (
    <main className="pt-16">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,125,50,0.12)_0%,transparent_65%)]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-5 block">Quiénes Somos</span>
          <h1 className="reveal delay-100 text-forest-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Una medicina más<br /><span className="gold-shimmer">humana e integrativa</span>
          </h1>
          <p className="reveal delay-200 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
            Sanar Perú nace con el propósito de acercar a las personas a una forma más consciente, natural
            y preventiva de cuidar su salud.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SANAR PERÚ ─── */}
      <section id="sanar-peru" className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Nuestra Historia</span>
              <h2 className="text-forest-900 text-3xl sm:text-4xl font-medium leading-tight mb-6">
                Sanar Perú
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Sanar Perú nace con el propósito de acercar a las personas a una forma más consciente, natural
                  y preventiva de cuidar su salud.
                </p>
                <p>
                  Creemos en una medicina más humana, donde la persona no sea vista solo como un diagnóstico,
                  sino como un ser integral: cuerpo, mente, emociones, hábitos, alimentación, entorno y energía vital.
                </p>
                <p>
                  Nuestro trabajo combina conocimientos de medicina alternativa, medicina ancestral, nutrición
                  funcional, terapias complementarias y tecnologías de evaluación orientativa como BIOPLASM.
                </p>
              </div>
              <div className="mt-8 gold-glass rounded-2xl p-5">
                <p className="text-gold-300 text-sm leading-relaxed italic">
                  "Tu salud merece ser escuchada con calma, evaluada con responsabilidad y acompañada con respeto"
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="aspect-square rounded-2xl bg-white border border-gray-100 flex flex-col items-center justify-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-700/20 to-forest-950/80" />
                <div className="relative z-10 text-center px-8">
                  <div className="w-20 h-20 mx-auto mb-6">
                    <svg viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <path d="M16 2 C7 10, 4 16, 4 23 A12 12 0 0 0 28 23 C28 16, 25 10, 16 2Z"
                        fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                      <path d="M16 8 C10 14, 9 18, 9 23 A7 7 0 0 0 23 23 C23 18, 22 14, 16 8Z"
                        fill="#2E7D32" opacity="0.9" />
                      <path d="M16 8 L16 32" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" />
                      <path d="M16 16 C14 18, 10 20, 9 23" stroke="#4CAF50" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                      <path d="M16 16 C18 18, 22 20, 23 23" stroke="#4CAF50" strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
                    </svg>
                  </div>
                  <div className="text-white font-bold text-2xl tracking-[0.2em] mb-1">SANAR</div>
                  <div className="text-gold-600 text-[9px] tracking-widest uppercase font-medium">
                    Centro de Medicina Alternativa y Ancestral
                  </div>
                  <p className="text-gray-400 text-xs mt-4">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── MISIÓN & VISIÓN ─── */}
      <section id="mision-vision" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="reveal-left bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 card-lift">
              <div className="w-12 h-12 rounded-xl bg-gold-700/20 flex items-center justify-center mb-6">
                <Heart size={20} className="text-gold-500" />
              </div>
              <h2 className="text-gold-700 text-sm font-semibold tracking-widest uppercase mb-3">Misión</h2>
              <h3 className="text-forest-900 text-2xl font-medium leading-tight mb-5">Acompañar con propósito</h3>
              <p className="text-gray-600 leading-relaxed">
                Acompañar a las personas en el cuidado de su salud mediante orientación natural, evaluación
                personalizada y prácticas complementarias que promuevan equilibrio, prevención y bienestar.
              </p>
            </div>
            <div className="reveal-right bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 card-lift">
              <div className="w-12 h-12 rounded-xl bg-gold-700/20 flex items-center justify-center mb-6">
                <Eye size={20} className="text-gold-500" />
              </div>
              <h2 className="text-gold-700 text-sm font-semibold tracking-widest uppercase mb-3">Visión</h2>
              <h3 className="text-forest-900 text-2xl font-medium leading-tight mb-5">Centro referente en Perú</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser un centro referente en Perú en medicina alternativa, ancestral e integrativa, reconocido
                por su trato humano, orientación responsable y compromiso con el bienestar de las personas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── VALORES ─── */}
      <section id="valores" className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Lo Que Nos Guía</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-medium leading-tight">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v, i) => (
              <div
                key={v.title}
                className={`reveal delay-${(i + 1) * 100} bg-white border border-gray-100 rounded-2xl p-6 card-lift ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="w-11 h-11 rounded-xl bg-gold-700/20 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-gold-500" />
                </div>
                <h3 className="text-forest-900 font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── MÉTODO ─── */}
      <section id="metodo" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Cómo Trabajamos</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-medium leading-tight mb-5">
              El Método Sanar
            </h2>
            <p className="reveal delay-200 text-gray-600 text-sm leading-relaxed">
              Una ruta de acompañamiento personalizado. No es una receta única — es un proceso diseñado para ti.
            </p>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-forest-700/60 to-transparent" />
            <div className="space-y-8">
              {metodo.map((m, i) => (
                <div
                  key={m.step}
                  className={`reveal delay-${(i + 1) * 100} grid lg:grid-cols-2 gap-6 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={`${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'} ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 1 ? 'lg:justify-end' : ''}`}>
                      <div className="w-10 h-10 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center">
                        <span className="text-gold-700 text-sm font-bold">{m.step}</span>
                      </div>
                      <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase">Paso {m.step}</span>
                    </div>
                    <h3 className="text-forest-900 text-xl font-semibold mb-3">{m.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                  <div className={`${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'} bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-center min-h-[100px]`}>
                    <div className="text-6xl font-bold text-forest-700/50">{m.step}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CTA ─── */}
      <section className="py-20 bg-green-50 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="reveal">
            <h2 className="text-forest-900 text-3xl font-medium mb-5">¿Listo para comenzar?</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Agenda tu primera consulta y comienza tu camino hacia el bienestar natural.
            </p>
            <Link
              to="/contactanos"
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Agendar Consulta <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

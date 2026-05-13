import { Link } from 'react-router-dom'
import { ChevronDown, Leaf, Heart, Shield, Users, Zap, Compass, Star, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

const services = [
  {
    icon: Heart,
    title: 'Evaluación Integral',
    desc: 'Sesión personalizada para revisar tu estado general, molestias principales y hábitos diarios.',
    href: '/servicios/medicina-alternativa',
  },
  {
    icon: Zap,
    title: 'Analizador Cuántico BIOPLASM',
    desc: 'Evaluación orientativa de posibles desequilibrios en órganos, sistemas y patrones funcionales.',
    href: '/servicios/medicina-alternativa',
  },
  {
    icon: Leaf,
    title: 'Desintoxicación Natural',
    desc: 'Programa suave y progresivo para apoyar la salud intestinal y los órganos de limpieza.',
    href: '/servicios/medicina-alternativa',
  },
  {
    icon: Compass,
    title: 'Prácticas Ancestrales',
    desc: 'Sesiones ceremoniales de Ayahuasca con preparación, acompañamiento e integración posterior.',
    href: '/servicios/practicas-ancestrales',
  },
]

const pillars = [
  {
    number: '01',
    title: 'Escuchar el Cuerpo',
    desc: 'Identificamos señales, molestias, hábitos y antecedentes. La clave está en los detalles: cómo duermes, qué comes, cómo digieres.',
  },
  {
    number: '02',
    title: 'Recuperar Equilibrio',
    desc: 'Apoyamos digestión, energía, descanso, defensas y bienestar general con un enfoque natural e integrativo.',
  },
  {
    number: '03',
    title: 'Acompañar el Proceso',
    desc: 'Orientación clara, seguimiento y educación para que participes activamente en el cuidado de tu salud.',
  },
]

const symptoms = [
  'Cansancio frecuente', 'Mala digestión', 'Inflamación', 'Dolor crónico',
  'Estrés acumulado', 'Insomnio', 'Baja energía', 'Defensas débiles',
]

export default function Home() {
  useScrollAnimation()

  const scrollToContent = () => {
    document.getElementById('intro')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
          src={BG_VIDEO}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Hero Content — bottom left */}
        <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-10 sm:pb-16 max-w-2xl">
          <div className="liquid-glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-gold-400 font-medium mb-5">
            <Leaf size={11} />
            Centro de Medicina Alternativa y Ancestral · Lima, Perú
          </div>
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
            Bienestar Natural,<br />
            <span className="gold-shimmer">Medicina Ancestral</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed mb-7 max-w-md">
            En Sanar Perú acompañamos a las personas que desean cuidar mejor su salud,
            recuperar equilibrio y fortalecer su bienestar con un enfoque natural, preventivo e integrativo.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contactanos"
              className="bg-gold-600 hover:bg-gold-500 text-forest-950 text-sm sm:text-base font-semibold px-6 sm:px-7 py-3 rounded-full transition-colors"
            >
              Agendar Consulta
            </Link>
            <Link
              to="/quienes-somos"
              className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
            >
              Conoce Más
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 right-8 sm:right-12 z-20 liquid-glass p-3 rounded-full text-white/60 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll hacia abajo"
        >
          <ChevronDown size={18} />
        </button>
      </section>

      {/* ─── INTRO ─── */}
      <section id="intro" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Sanar Perú</span>
              <h2 className="text-forest-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Bienestar Natural,<br />Medicina Alternativa,<br />
                <span className="text-forest-600">Acompañamiento Personalizado</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                En Sanar Perú acompañamos a las personas que desean cuidar mejor su salud,
                recuperar equilibrio y fortalecer su bienestar con un enfoque natural, preventivo e integrativo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Unimos conocimientos de medicina alternativa, prácticas ancestrales, evaluación energética,
                orientación nutricional y hábitos saludables para ayudarte a entender mejor lo que ocurre en tu cuerpo.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed italic font-medium">
                  "Tu salud merece ser escuchada con calma, evaluada con responsabilidad y acompañada con respeto"
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Conocer tu estado general', icon: Star },
                  { label: 'Identificar desequilibrios', icon: Compass },
                  { label: 'Fortalecer de forma natural', icon: Shield },
                  { label: 'Mejorar hábitos diarios', icon: Leaf },
                  { label: 'Acompañamiento personalizado', icon: Users },
                  { label: 'Complementar tu cuidado médico', icon: Heart },
                ].map(({ label, icon: Icon }, i) => (
                  <div
                    key={label}
                    className={`reveal delay-${(i + 1) * 100} bg-white border border-gray-100 rounded-xl p-4 flex items-start gap-3 shadow-sm card-lift`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-forest-600" />
                    </div>
                    <span className="text-gray-700 text-sm leading-snug font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SYMPTOMS AWARENESS ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Señales de Alerta</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              Nuestro Cuerpo Avisa<br />Antes de Enfermar
            </h2>
            <p className="reveal delay-200 text-gray-600 leading-relaxed">
              Cansancio frecuente, mala digestión, inflamación, dolor, estrés, insomnio, baja energía,
              defensas débiles o molestias repetitivas pueden ser señales de que algo necesita atención.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {symptoms.map((s, i) => (
              <div
                key={s}
                className={`reveal delay-${Math.min((i + 1) * 100, 600)} bg-white border border-green-200 rounded-full px-4 py-2 text-sm text-forest-700 font-medium shadow-sm`}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="reveal delay-300 max-w-3xl mx-auto bg-white border border-green-100 rounded-2xl p-6 sm:p-8 shadow-sm">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
              En Sanar Perú creemos que el bienestar empieza cuando la persona aprende a escuchar su cuerpo
              y recibe una orientación clara, cercana y personalizada. No se trata de automedicarse ni de ignorar
              los síntomas, sino de buscar equilibrio, prevenir complicaciones y adoptar hábitos que ayuden al
              organismo a funcionar mejor.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── THREE PILLARS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Nuestro Enfoque</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-semibold leading-tight">
              Natural, Integrativo<br />y Personalizado
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                className={`reveal delay-${(i + 1) * 200} relative bg-white border border-gray-100 rounded-2xl p-7 shadow-sm card-lift overflow-hidden`}
              >
                <div className="absolute top-4 right-5 text-6xl font-bold text-green-50 leading-none select-none">
                  {p.number}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-forest-600 flex items-center justify-center mb-5">
                    <span className="text-white font-bold text-sm">{p.number}</span>
                  </div>
                  <h3 className="text-forest-900 font-semibold text-lg mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="reveal delay-300 mt-10 text-center">
            <p className="text-gray-400 text-xs max-w-2xl mx-auto">
              En Sanar Perú no reemplazamos la atención médica convencional. Nuestro trabajo es complementario,
              preventivo y orientativo.
            </p>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Lo Que Ofrecemos</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Nuestros Servicios
            </h2>
            <p className="reveal delay-200 text-gray-600 text-sm leading-relaxed">
              Cada persona es diferente. Por eso no trabajamos con recetas iguales para todos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((svc, i) => (
              <Link
                key={svc.title}
                to={svc.href}
                className={`reveal delay-${(i + 1) * 100} group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm card-lift cursor-pointer`}
              >
                <div className="w-11 h-11 rounded-xl bg-forest-600 flex items-center justify-center group-hover:bg-forest-500 transition-colors">
                  <svc.icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-forest-900 font-semibold text-base mb-2">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-forest-600 text-xs font-semibold mt-auto group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
          <div className="reveal delay-300 text-center mt-10">
            <Link
              to="/servicios/medicina-alternativa"
              className="inline-flex items-center gap-2 border border-forest-600 text-forest-700 hover:bg-forest-600 hover:text-white text-sm font-semibold px-7 py-3 rounded-full transition-colors"
            >
              Ver todos los servicios <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── VIDEO + METHOD ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <div className="aspect-video rounded-2xl bg-forest-900 border border-forest-700/30 flex flex-col items-center justify-center gap-4 relative overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-700/30 to-forest-950/80" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-gold-600/25 border border-gold-500/40 flex items-center justify-center hover:bg-gold-600/40 transition-colors cursor-pointer">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-gold-400 ml-1">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="relative z-10 text-white/50 text-xs text-center px-6">
                  Agrega aquí tu video de Kling<br />para mostrar el centro
                </p>
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">El Método Sanar</span>
              <h2 className="text-forest-900 text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                Un proceso<br /><span className="text-forest-600">personalizado</span><br />para ti
              </h2>
              <p className="text-gray-600 leading-relaxed mb-7">
                El Método Sanar es una ruta de acompañamiento que busca ayudarte a comprender mejor tu estado
                general y fortalecer tu bienestar de manera natural. No es una receta única.
              </p>
              <div className="space-y-3.5">
                {[
                  { step: '1', text: 'Te escuchamos — conversamos sobre tu historia y objetivos' },
                  { step: '2', text: 'Evaluamos — usamos BIOPLASM para orientación energética' },
                  { step: '3', text: 'Organizamos — identificamos las áreas prioritarias' },
                  { step: '4', text: 'Diseñamos — plan de bienestar personalizado y claro' },
                  { step: '5', text: 'Acompañamos — seguimiento, ajustes y educación continua' },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-forest-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{step}</span>
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed pt-0.5">{text}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/quienes-somos"
                className="mt-8 inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-sm"
              >
                Conoce el Método <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CTA BAND ─── */}
      <section className="py-20 sm:py-24 bg-forest-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <div className="reveal">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <Leaf size={22} className="text-gold-400" />
            </div>
            <h2 className="text-white text-3xl sm:text-4xl font-semibold leading-tight mb-5">
              ¿Listo para comenzar<br />tu camino hacia el bienestar?
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Tu salud merece ser escuchada con calma, evaluada con responsabilidad y acompañada con respeto.
              Da el primer paso hoy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contactanos"
                className="bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base shadow-md"
              >
                Agendar mi Consulta
              </Link>
              <a
                href="https://wa.me/51999999999?text=Hola%20Sanar%20Per%C3%BA%2C%20quisiera%20informaci%C3%B3n"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Heart, Zap, Shield, Compass, Users, Star, Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BG_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

const services = [
  { icon: Heart,   num:'01', title:'Evaluación Integral',          desc:'Sesión personalizada que revisa tu estado general, molestias principales y hábitos de vida.' },
  { icon: Zap,     num:'02', title:'Analizador Cuántico BIOPLASM', desc:'Evaluación orientativa de posibles desequilibrios en órganos, sistemas y patrones funcionales.' },
  { icon: Leaf,    num:'03', title:'Desintoxicación Natural',       desc:'Programa suave y progresivo para apoyar la salud intestinal y los órganos de limpieza.' },
  { icon: Compass, num:'04', title:'Prácticas Ancestrales',         desc:'Ceremonias de Ayahuasca con preparación, acompañamiento e integración posterior responsable.' },
  { icon: Shield,  num:'05', title:'Apoyo al Sistema Inmune',       desc:'Fortalecimiento natural mediante nutrición, descanso, suplementación y cambios de hábitos.' },
  { icon: Users,   num:'06', title:'Nutrición Funcional',           desc:'Recomendaciones prácticas para mejorar digestión, energía, peso e inflamación.' },
]

const steps = [
  { n:'01', title:'Te Escuchamos',          desc:'Conversamos sobre tus molestias, estilo de vida, alimentación, descanso y objetivos de salud.' },
  { n:'02', title:'Evaluamos',              desc:'Usamos herramientas como BIOPLASM para obtener una visión orientativa de tu estado energético.' },
  { n:'03', title:'Diseñamos tu Plan',      desc:'Creamos un plan personalizado de alimentación, suplementación y hábitos pensado para ti.' },
  { n:'04', title:'Te Acompañamos',         desc:'Seguimiento continuo, ajustes y educación para que participes activamente en tu bienestar.' },
]

const symptoms = ['Cansancio crónico','Mala digestión','Inflamación','Estrés acumulado','Insomnio','Baja energía','Defensas débiles','Dolores repetitivos']

export default function Home() {
  useScrollAnimation()
  return (
    <main>

      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[620px] overflow-hidden">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline src={BG_VIDEO}/>
        <div className="absolute inset-0 hero-overlay"/>
        <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-14 pb-16 sm:pb-24 max-w-5xl">
          <h1 className="text-white font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tight mb-5 max-w-2xl">
            Salud natural.<br/>Equilibrio real.
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Acompañamos tu bienestar con medicina alternativa, prácticas ancestrales y orientación personalizada para que entiendas y cuides mejor tu cuerpo.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/contactanos"
              className="inline-flex items-center gap-2 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full transition-colors"
              style={{ background: '#C9A227', color: '#0C1A10' }}
              onMouseEnter={e => (e.currentTarget.style.background='#E6C84A')}
              onMouseLeave={e => (e.currentTarget.style.background='#C9A227')}>
              Agendar Consulta <ArrowRight size={16}/>
            </Link>
            <Link to="/quienes-somos"
              className="inline-flex items-center gap-2 font-bold text-sm sm:text-base px-7 py-3.5 rounded-full border-2 border-white/50 text-white hover:bg-white/10 transition-colors">
              Conoce Más
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-s-50 border-y border-s-border py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-10 gap-y-3">
          {['Enfoque natural e integrativo','Orientación personalizada','Evaluación con BIOPLASM','Medicina ancestral peruana','Complementario y preventivo'].map(t => (
            <span key={t} className="flex items-center gap-2 text-s-700 text-sm font-medium">
              <Check size={14} className="text-s-600 flex-shrink-0"/>
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── QUÉ HACEMOS ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-l">
              <span className="section-label">¿Qué hacemos?</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-s-900 leading-tight mb-6">
                Miramos tu salud<br/>de forma <span className="text-s-600">integral</span>
              </h2>
              <p className="text-s-muted text-lg leading-relaxed mb-6">
                No vemos solo un síntoma. Observamos tus hábitos, alimentación, energía, digestión, descanso y estado emocional — todo lo que tu cuerpo viene mostrando.
              </p>
              <p className="text-s-muted leading-relaxed mb-8">
                Unimos medicina alternativa, prácticas ancestrales, evaluación energética y orientación nutricional para ayudarte a tomar mejores decisiones para tu bienestar.
              </p>
              <blockquote className="border-l-4 border-s-600 pl-5">
                <p className="text-s-700 italic text-base leading-relaxed font-medium">
                  "Tu salud merece ser escuchada con calma, evaluada con responsabilidad y acompañada con respeto"
                </p>
              </blockquote>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/quienes-somos" className="btn-primary">Ver quiénes somos <ArrowRight size={15}/></Link>
                <Link to="/servicios/medicina-alternativa" className="btn-outline">Nuestros servicios</Link>
              </div>
            </div>
            <div className="reveal-r">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { i: Star,    t:'Conoce tu estado general' },
                  { i: Compass, t:'Identifica desequilibrios' },
                  { i: Shield,  t:'Fortalece de forma natural' },
                  { i: Leaf,    t:'Mejora tus hábitos diarios' },
                  { i: Users,   t:'Acompañamiento personalizado' },
                  { i: Heart,   t:'Complementa tu cuidado médico' },
                ].map(({ i:Icon, t }, idx) => (
                  <div key={t} className={`card p-4 flex items-start gap-3 d${idx+1}`}>
                    <div className="w-9 h-9 rounded-xl bg-s-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-s-600"/>
                    </div>
                    <span className="text-s-800 text-sm font-semibold leading-snug pt-0.5">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 sm:py-32 bg-s-bg-alt">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label reveal">Lo que ofrecemos</span>
            <h2 className="reveal d1 text-4xl sm:text-5xl font-extrabold text-s-900 leading-tight mb-4">Nuestros Servicios</h2>
            <p className="reveal d2 text-s-muted text-lg">Cada persona es diferente. Por eso no trabajamos con recetas iguales para todos.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Link key={s.num} to={i < 4 ? '/servicios/medicina-alternativa' : '/servicios/practicas-ancestrales'}
                className={`card reveal d${Math.min(i+1,6)} p-7 flex flex-col gap-4 group cursor-pointer`}>
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-s-100 flex items-center justify-center group-hover:bg-s-600 transition-colors">
                    <s.icon size={18} className="text-s-600 group-hover:text-white transition-colors"/>
                  </div>
                  <span className="text-s-200 font-bold text-2xl">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-s-900 font-bold text-base mb-2">{s.title}</h3>
                  <p className="text-s-muted text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="text-s-600 text-xs font-bold flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                  Ver más <ArrowRight size={12}/>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── SYMPTOMS ── */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-l">
              <span className="section-label">Señales de alerta</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-s-900 leading-tight mb-6">
                Tu cuerpo avisa<br/>antes de enfermar
              </h2>
              <p className="text-s-muted text-lg leading-relaxed mb-8">
                Cansancio frecuente, mala digestión, inflamación, estrés, insomnio o defensas bajas son señales de que algo necesita atención. El bienestar empieza cuando aprendes a escuchar tu cuerpo.
              </p>
              <Link to="/servicios/medicina-alternativa" className="btn-primary">
                Ver servicios <ArrowRight size={15}/>
              </Link>
            </div>
            <div className="reveal-r">
              <div className="flex flex-wrap gap-2.5">
                {symptoms.map((s, i) => (
                  <span key={s} className={`reveal d${Math.min(i+1,6)} inline-flex items-center gap-2 bg-s-50 border border-s-border rounded-full px-4 py-2 text-sm font-semibold text-s-700`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-s-600 flex-shrink-0"/>
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Importante:</strong> En Sanar Perú no reemplazamos la atención médica convencional. Nuestro trabajo es complementario, preventivo y orientativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── METHOD STEPS ── */}
      <section className="py-24 sm:py-32 bg-s-bg-alt">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label reveal">El Método Sanar</span>
              <h2 className="reveal d1 text-4xl sm:text-5xl font-extrabold text-s-900 leading-tight mb-5">
                Un proceso<br/>hecho para ti
              </h2>
              <p className="reveal d2 text-s-muted text-lg leading-relaxed mb-10">
                No trabajamos con recetas únicas. Primero escuchamos tu historia, luego diseñamos un camino personalizado hacia tu bienestar.
              </p>
              <div className="space-y-5">
                {steps.map((s, i) => (
                  <div key={s.n} className={`reveal d${i+2} flex gap-4 items-start`}>
                    <div className="w-10 h-10 rounded-2xl bg-s-600 text-white font-bold text-sm flex items-center justify-center flex-shrink-0">
                      {s.n}
                    </div>
                    <div>
                      <h4 className="text-s-900 font-bold text-base mb-1">{s.title}</h4>
                      <p className="text-s-muted text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/quienes-somos" className="btn-primary">Conoce el método completo <ArrowRight size={15}/></Link>
              </div>
            </div>
            <div className="reveal-r">
              {/* Video placeholder */}
              <div className="aspect-[4/3] rounded-3xl bg-s-800 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-s-700/50 to-s-900/80"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/15 border border-white/30 flex items-center justify-center hover:bg-white/25 transition-colors cursor-pointer">
                    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                  <p className="text-white/50 text-xs text-center px-8">Agrega tu video de Kling aquí</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── CTA ── */}
      <section className="py-24 sm:py-32 bg-s-700">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="reveal">
            <span className="inline-block text-s-300 text-xs font-bold tracking-widest uppercase mb-5">Da el primer paso</span>
            <h2 className="text-white font-extrabold text-4xl sm:text-5xl leading-tight mb-5">
              Tu bienestar<br/>empieza con una conversación
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Tu salud merece ser escuchada con calma, evaluada con responsabilidad y acompañada con respeto.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contactanos" className="bg-white text-s-800 font-bold px-8 py-3.5 rounded-full hover:bg-s-100 transition-colors shadow-lg">
                Agendar mi Consulta
              </Link>
              <a href="https://wa.me/51999999999?text=Hola%20Sanar%20Per%C3%BA" target="_blank" rel="noopener noreferrer"
                className="border-2 border-white/40 text-white font-bold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

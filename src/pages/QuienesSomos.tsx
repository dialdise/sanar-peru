import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Eye, Shield, Lightbulb, Leaf } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const valores = [
  { icon: Heart,     title: 'Respeto',              desc: 'Cada persona tiene su historia, su ritmo y sus necesidades. Nos adaptamos a ti.' },
  { icon: Shield,    title: 'Responsabilidad',      desc: 'No prometemos curas milagrosas ni reemplazamos tratamientos médicos convencionales.' },
  { icon: Lightbulb, title: 'Claridad',             desc: 'Explicamos todo de forma sencilla y entendible, sin tecnicismos innecesarios.' },
  { icon: Leaf,      title: 'Prevención',           desc: 'Creemos que cuidar la salud antes de enfermar es la decisión más inteligente.' },
  { icon: Eye,       title: 'Tradición y Modernidad', desc: 'Valoramos el conocimiento ancestral y lo complementamos con herramientas actuales.' },
]

const metodo = [
  { n:'01', title:'Te Escuchamos',        desc:'Conversamos sobre tus molestias, antecedentes, estilo de vida, alimentación, descanso, estrés, digestión y energía. La clave está en los detalles.' },
  { n:'02', title:'Evaluamos',            desc:'Realizamos una evaluación orientativa con BIOPLASM que nos permite observar posibles desequilibrios energéticos, funcionales o de órganos y sistemas.' },
  { n:'03', title:'Organizamos',          desc:'Identificamos qué áreas necesitan más atención: digestión, hígado, sistema inmune, energía, sueño, estrés, inflamación, nutrición o hábitos.' },
  { n:'04', title:'Diseñamos tu Plan',    desc:'Recomendaciones de alimentación, hidratación, descanso, apoyo natural, suplementación y cambios de hábitos. Todo claro y práctico.' },
  { n:'05', title:'Te Acompañamos',       desc:'La salud no cambia de un día para otro. Hacemos seguimiento, resolvemos dudas y ajustamos el plan según tu evolución.' },
]

export default function QuienesSomos() {
  useScrollAnimation()
  return (
    <main className="pt-20">

      {/* ── PAGE HERO ── */}
      <section className="py-20 sm:py-28 bg-s-bg-alt">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="section-label reveal">Quiénes Somos</span>
          <h1 className="reveal d1 text-5xl sm:text-6xl font-extrabold text-s-900 leading-tight mb-5">
            Medicina más humana.<br/><span className="text-s-600">Cuidado integral.</span>
          </h1>
          <p className="reveal d2 text-s-muted text-xl leading-relaxed max-w-2xl mx-auto">
            Sanar Perú nace con el propósito de acercar a las personas a una forma más consciente, natural y preventiva de cuidar su salud.
          </p>
        </div>
      </section>

      <div className="divider"/>

      {/* ── SANAR PERÚ STORY ── */}
      <section id="sanar-peru" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-l">
              <span className="section-label">Nuestra historia</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-s-900 leading-tight mb-6">Sanar Perú</h2>
              <div className="space-y-4 text-s-muted text-lg leading-relaxed">
                <p>Sanar Perú nace con el propósito de acercar a las personas a una forma más consciente, natural y preventiva de cuidar su salud.</p>
                <p>Creemos en una medicina más humana, donde la persona no sea vista solo como un diagnóstico, sino como un ser integral: cuerpo, mente, emociones, hábitos, alimentación, entorno y energía vital.</p>
                <p>Nuestro trabajo combina medicina alternativa, medicina ancestral, nutrición funcional, terapias complementarias y tecnologías de evaluación orientativa como BIOPLASM.</p>
              </div>
              <blockquote className="border-l-4 border-s-600 pl-5 mt-8">
                <p className="text-s-700 italic font-medium text-base leading-relaxed">
                  "Creemos en una medicina más humana, donde la persona no sea vista solo como un diagnóstico."
                </p>
              </blockquote>
            </div>
            <div className="reveal-r">
              <div className="bg-s-600 rounded-3xl p-10 text-center text-white">
                <div className="w-20 h-20 mx-auto mb-6">
                  <svg viewBox="0 0 32 38" fill="none" className="w-full h-full">
                    <path d="M16 2 C7 10,4 16,4 23 A12 12 0 0 0 28 23 C28 16,25 10,16 2Z" fill="none" stroke="#C9A227" strokeWidth="2"/>
                    <path d="M16 8 C10 14,9 18,9 23 A7 7 0 0 0 23 23 C23 18,22 14,16 8Z" fill="#4DBF80" opacity="0.85"/>
                    <line x1="16" y1="8" x2="16" y2="32" stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="text-3xl font-extrabold tracking-[0.25em] mb-1">SANAR</div>
                <div className="text-s-300 text-[9px] tracking-[0.18em] uppercase font-semibold">Centro de Medicina Alternativa y Ancestral</div>
                <div className="text-white/50 text-sm mt-4">Lima, Perú</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── MISIÓN & VISIÓN ── */}
      <section id="mision-vision" className="py-24 sm:py-32 bg-s-bg-alt">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal">Propósito</span>
            <h2 className="reveal d1 text-4xl sm:text-5xl font-extrabold text-s-900">Misión y Visión</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Heart, label:'Misión', title:'Acompañar con propósito', text:'Acompañar a las personas en el cuidado de su salud mediante orientación natural, evaluación personalizada y prácticas complementarias que promuevan equilibrio, prevención y bienestar.' },
              { icon: Eye,   label:'Visión', title:'Centro referente en Perú',  text:'Ser un centro referente en Perú en medicina alternativa, ancestral e integrativa, reconocido por su trato humano, orientación responsable y compromiso con el bienestar de las personas.' },
            ].map(({ icon: Icon, label, title, text }, i) => (
              <div key={label} className={`reveal d${i+1} card p-8 sm:p-10`}>
                <div className="w-12 h-12 rounded-2xl bg-s-600 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-white"/>
                </div>
                <span className="section-label" style={{marginBottom:'.5rem'}}>{label}</span>
                <h3 className="text-s-900 text-2xl font-bold mb-4">{title}</h3>
                <p className="text-s-muted leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── VALORES ── */}
      <section id="valores" className="py-24 sm:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal">Lo que nos guía</span>
            <h2 className="reveal d1 text-4xl sm:text-5xl font-extrabold text-s-900">Nuestros Valores</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valores.map((v, i) => (
              <div key={v.title} className={`reveal d${i+1} card p-7`}>
                <div className="w-11 h-11 rounded-2xl bg-s-100 flex items-center justify-center mb-4">
                  <v.icon size={18} className="text-s-600"/>
                </div>
                <h3 className="text-s-900 font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-s-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"/>

      {/* ── MÉTODO ── */}
      <section id="metodo" className="py-24 sm:py-32 bg-s-bg-alt">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="section-label reveal">Cómo trabajamos</span>
            <h2 className="reveal d1 text-4xl sm:text-5xl font-extrabold text-s-900 mb-4">El Método Sanar</h2>
            <p className="reveal d2 text-s-muted text-lg max-w-xl mx-auto">Una ruta de acompañamiento personalizado. No es una receta única — es un proceso diseñado para ti.</p>
          </div>
          <div className="space-y-4">
            {metodo.map((m, i) => (
              <div key={m.n} className={`reveal d${Math.min(i+1,5)} card p-6 sm:p-7 flex gap-6 items-start`}>
                <div className="w-12 h-12 rounded-2xl bg-s-600 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  {m.n}
                </div>
                <div>
                  <h3 className="text-s-900 font-bold text-lg mb-2">{m.title}</h3>
                  <p className="text-s-muted leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contactanos" className="btn-primary text-base">Agendar mi primera consulta <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

    </main>
  )
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Zap, Utensils, Wind, Shield, Sparkles, Leaf, ChevronDown, ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const services = [
  {
    icon: Heart,
    number: '01',
    title: 'Evaluación Integral de Bienestar',
    desc: 'Una sesión personalizada para revisar tu estado general, tus molestias principales y tus hábitos diarios.',
    ideal: 'Personas que sienten cansancio, inflamación, mala digestión, estrés, baja energía o molestias repetitivas.',
    includes: ['Entrevista inicial', 'Revisión de antecedentes', 'Evaluación general', 'Orientación personalizada', 'Recomendaciones prácticas'],
  },
  {
    icon: Zap,
    number: '02',
    title: 'Evaluación con Analizador Cuántico y BIOPLASM',
    desc: 'Herramientas de evaluación orientativa que permiten observar posibles desequilibrios en órganos, sistemas, microorganismos y patrones funcionales.',
    ideal: 'Personas que desean una evaluación energética orientativa como punto de partida.',
    includes: ['Análisis con BIOPLASM', 'Interpretación responsable', 'Explicación en lenguaje sencillo', 'Recomendaciones de seguimiento'],
    note: 'No reemplaza pruebas médicas convencionales ni confirma diagnósticos. Si aparece un hallazgo relevante, recomendamos confirmarlo con exámenes clínicos.',
  },
  {
    icon: Utensils,
    number: '03',
    title: 'Orientación Digestiva Natural',
    desc: 'La digestión es una de las bases del bienestar. Orientamos para mejorar hábitos digestivos, alimentación, hidratación y apoyo natural.',
    ideal: 'Personas con acidez, gastritis, estreñimiento, gases, pesadez, digestión lenta, inflamación abdominal o mala tolerancia a ciertos alimentos.',
    includes: ['Evaluación digestiva', 'Plan de alimentación', 'Recomendaciones de hidratación', 'Apoyo natural'],
  },
  {
    icon: Wind,
    number: '04',
    title: 'Programa de Limpieza y Desintoxicación Natural',
    desc: 'Programa para apoyar la salud intestinal y reducir cargas digestivas mediante alimentación, plantas, productos naturales y hábitos de cuidado.',
    ideal: 'Personas que desean apoyar sus órganos de limpieza de forma natural y progresiva.',
    includes: ['Protocolo de desintoxicación', 'Recomendaciones alimentarias', 'Suplementación natural', 'Seguimiento'],
    note: 'Cuando se sospecha una infección parasitaria real, se recomienda confirmación mediante examen de laboratorio.',
  },
  {
    icon: Leaf,
    number: '05',
    title: 'Programa de Apoyo Intestinal y Desparasitación Natural',
    desc: 'Desintoxicación suave, progresiva y responsable, basada en alimentación, hidratación, descanso, plantas, suplementos naturales y reducción de cargas innecesarias.',
    ideal: 'Personas que desean limpiar, ordenar y fortalecer su organismo sin extremos ni promesas mágicas.',
    includes: ['Plan de limpieza intestinal', 'Alimentación depurativa', 'Plantas medicinales', 'Hábitos de cuidado'],
  },
  {
    icon: Shield,
    number: '06',
    title: 'Apoyo Natural al Sistema Inmune',
    desc: 'El sistema inmune necesita descanso, buena alimentación, equilibrio intestinal, manejo del estrés, movimiento y nutrientes adecuados.',
    ideal: 'Personas con defensas bajas, cansancio frecuente, infecciones repetitivas o recuperación lenta.',
    includes: ['Evaluación del sistema inmune', 'Plan de nutrición', 'Suplementación', 'Cambios de hábitos'],
  },
  {
    icon: Sparkles,
    number: '07',
    title: 'Terapias Complementarias y Energéticas',
    desc: 'Acompañamiento con terapias complementarias orientadas a la armonización, relajación, equilibrio energético y bienestar general.',
    ideal: 'Personas que desean reducir tensión, mejorar sensación de calma y reconectarse con su cuerpo.',
    includes: ['Terapias de armonización', 'Equilibrio energético', 'Relajación profunda', 'Bienestar general'],
  },
  {
    icon: Utensils,
    number: '08',
    title: 'Orientación Nutricional Funcional',
    desc: 'No se trata solo de comer menos. Se trata de comer mejor, elegir alimentos que tu cuerpo tolere y construir una rutina sostenible.',
    ideal: 'Personas que desean mejorar digestión, energía, peso, inflamación y hábitos alimentarios.',
    includes: ['Evaluación nutricional', 'Plan de alimentación funcional', 'Lista de alimentos', 'Seguimiento mensual'],
  },
]

const faqs = [
  {
    q: '¿Sanar Perú reemplaza a mi médico?',
    a: 'No. Nuestro trabajo es complementario. Si tienes una enfermedad diagnosticada, debes continuar tus controles y tratamientos médicos convencionales.',
  },
  {
    q: '¿BIOPLASM da diagnósticos definitivos?',
    a: 'No. BIOPLASM es una herramienta orientativa. Sus hallazgos deben confirmarse con pruebas médicas convencionales cuando sea necesario.',
  },
  {
    q: '¿Puedo llevar mis análisis médicos?',
    a: 'Sí, es muy recomendable. Trae análisis de sangre, orina, ecografías, tomografías, resonancias, endoscopías o informes médicos previos. Esto ayuda a orientar mejor el acompañamiento.',
  },
  {
    q: '¿Trabajan con enfermedades complejas?',
    a: 'Sí, podemos brindar acompañamiento complementario para mejorar bienestar, hábitos, nutrición y calidad de vida en personas con condiciones complejas.',
  },
  {
    q: '¿Los productos naturales son seguros?',
    a: 'Pueden ser útiles, pero deben usarse con criterio. Algunas plantas o suplementos pueden interactuar con medicamentos o no ser adecuados para ciertas personas. Por eso siempre orientamos de forma responsable.',
  },
  {
    q: '¿Cuánto dura una evaluación?',
    a: 'Depende del servicio, pero normalmente se reserva un espacio suficiente para escuchar, evaluar y explicar con calma. Siempre priorizamos la calidad de la atención.',
  },
]

export default function MedicinaAlternativa() {
  useScrollAnimation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <main className="pt-16">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(46,125,50,0.1)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="reveal text-s-600 text-xs font-semibold tracking-widest uppercase mb-5 block">Servicios</span>
          <h1 className="reveal d1 text-s-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Medicina <span className="gold-shimmer">Alternativa</span>
          </h1>
          <p className="reveal d1 text-s-muted leading-relaxed max-w-2xl mx-auto">
            Te ayudamos a mirar tu salud de manera integral. No vemos solo un síntoma aislado: observamos
            tus hábitos, tu alimentación, tu energía, tu descanso, tu digestión, tu estado emocional y las
            señales que tu cuerpo viene mostrando.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ─── SERVICES GRID ─── */}
      <section className="py-20 sm:py-28 bg-s-bg-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((svc, i) => (
              <div
                key={svc.number}
                className={`reveal d1${Math.min((i + 1) * 100, 500)} bg-white border border-s-border rounded-2xl p-6 sm:p-7 card`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-gold-700/20 flex items-center justify-center flex-shrink-0">
                    <svc.icon size={18} className="text-gold-500" />
                  </div>
                  <div className="flex-1">
                    <div className="text-gold-700/70 text-xs font-mono mb-1">{svc.number}</div>
                    <h3 className="text-s-900 font-semibold text-base leading-snug">{svc.title}</h3>
                  </div>
                </div>
                <p className="text-s-muted text-sm leading-relaxed mb-4">{svc.desc}</p>

                {svc.ideal && (
                  <div className="bg-forest-700/20 rounded-xl p-3 mb-4">
                    <p className="text-s-muted text-xs leading-relaxed">
                      <span className="text-gold-600 font-medium">Ideal para: </span>
                      {svc.ideal}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setExpandedCard(expandedCard === i ? null : i)}
                  className="flex items-center gap-1 text-gold-500 text-xs font-medium hover:text-gold-400 transition-colors"
                >
                  {expandedCard === i ? 'Ver menos' : 'Ver qué incluye'}
                  <ChevronDown size={13} className={`transition-transform ${expandedCard === i ? 'rotate-180' : ''}`} />
                </button>

                <div className={`acc-body ${expandedCard === i ? 'open' : ''}`}>
                  <div className="pt-4 space-y-1.5">
                    {svc.includes.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-s-muted text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-700/60 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                    {svc.note && (
                      <p className="text-s-subtle text-xs mt-3 leading-relaxed italic border-t border-s-border pt-3">
                        {svc.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── DISCLAIMER ─── */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="reveal gold-glass rounded-2xl p-6 sm:p-8 text-center">
            <p className="text-gold-300/80 text-sm leading-relaxed">
              <strong className="text-gold-400">Importante:</strong> En Sanar Perú no reemplazamos la atención médica convencional.
              Nuestro trabajo es complementario, preventivo y orientativo. Si tienes una enfermedad diagnosticada o síntomas
              importantes, siempre recomendamos mantener el seguimiento con tu médico tratante.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── FAQ ─── */}
      <section className="py-20 sm:py-28 bg-s-bg-alt">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="reveal text-s-600 text-xs font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
            <h2 className="reveal d1 text-s-900 text-3xl sm:text-4xl font-medium leading-tight">
              Preguntas Frecuentes
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal d1${Math.min((i + 1) * 100, 500)} bg-white border border-s-border rounded-xl overflow-hidden card`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-gray-800 font-medium text-sm leading-snug pr-4">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gold-600 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <div className={`acc-body ${openFaq === i ? 'open' : ''}`}>
                  <p className="px-6 pb-5 text-s-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="reveal">
            <h2 className="text-s-900 text-3xl font-medium mb-5">¿Listo para tu primera evaluación?</h2>
            <p className="text-s-muted text-sm leading-relaxed mb-8">
              Agenda tu consulta y comienza tu camino hacia el bienestar natural con orientación personalizada.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contactanos"
                className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Agendar Consulta <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass text-gray-800 font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

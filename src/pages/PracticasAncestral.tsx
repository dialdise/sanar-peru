import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Flame, Eye, Shield, Star, ChevronDown, ArrowRight, AlertCircle } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const benefits = [
  'Mayor claridad emocional',
  'Alivio de cargas internas',
  'Conexión espiritual',
  'Comprensión de patrones personales',
  'Reconciliación con el pasado',
  'Fortalecimiento interior',
  'Sensación de renovación',
  'Apertura a nuevos hábitos',
  'Mayor conciencia corporal',
  'Reconexión con el propósito de vida',
]

const ceremony = [
  {
    step: '01',
    title: 'Preparación Previa',
    desc: 'Antes de la sesión conversamos contigo para conocer tus expectativas, estado de salud, antecedentes, medicamentos, situación emocional y motivación principal. También brindamos recomendaciones sobre alimentación, descanso y disposición mental antes de la ceremonia.',
    note: 'La preparación es importante porque ayuda a que la persona llegue más tranquila, consciente y receptiva.',
  },
  {
    step: '02',
    title: 'Sesión Ceremonial',
    desc: 'La sesión se realiza en un ambiente cuidado, sereno y respetuoso. Durante la ceremonia se acompaña al participante en su proceso interior, respetando su ritmo, su silencio, sus emociones y su experiencia personal.',
    note: 'El objetivo no es forzar respuestas, sino permitir que cada persona viva su proceso con contención, orientación y seguridad.',
  },
  {
    step: '03',
    title: 'Integración Posterior',
    desc: 'Después de la experiencia, es importante reflexionar sobre lo vivido. Acompañamos a la persona a ordenar sus sensaciones, emociones, imágenes, recuerdos o mensajes internos para que pueda aplicarlos de manera positiva en su vida cotidiana.',
    note: 'Una experiencia profunda necesita también una buena integración. La ceremonia puede abrir una puerta; la integración ayuda a caminar después de abrirla.',
  },
]

const contraindications = [
  'Embarazo',
  'Problemas cardíacos importantes',
  'Presión arterial no controlada',
  'Antecedentes de psicosis o esquizofrenia',
  'Trastornos psiquiátricos severos',
  'Uso de antidepresivos o ansiolíticos',
  'Consumo de alcohol o drogas recreativas',
  'Crisis emocional aguda',
  'Buscar la sesión como curiosidad recreativa',
]

const faqs = [
  {
    q: '¿La ayahuasca cura enfermedades?',
    a: 'No ofrecemos la ayahuasca como cura de enfermedades. La entendemos como una práctica ancestral de introspección, espiritualidad y acompañamiento emocional. Cualquier enfermedad debe ser evaluada y tratada por profesionales de salud.',
  },
  {
    q: '¿Todos pueden tomar ayahuasca?',
    a: 'No. Hay condiciones médicas, psiquiátricas y medicamentos que pueden hacer que la experiencia no sea recomendable. Por eso realizamos una entrevista previa exhaustiva.',
  },
  {
    q: '¿Es una experiencia fuerte?',
    a: 'Puede serlo. Algunas personas viven procesos emocionales o físicos intensos. Por eso es importante llegar preparado y contar con acompañamiento profesional.',
  },
  {
    q: '¿Puedo participar si tomo medicamentos?',
    a: 'Depende del medicamento. Algunos pueden ser incompatibles. Es indispensable informar todo lo que se consume: medicamentos, suplementos, plantas, alcohol u otras sustancias.',
  },
  {
    q: '¿Qué debo llevar?',
    a: 'Ropa cómoda, agua, una manta ligera si se indica, y sobre todo una actitud respetuosa, tranquila y consciente.',
  },
  {
    q: '¿Puedo participar solo por curiosidad?',
    a: 'No recomendamos participar por simple curiosidad o diversión. La ayahuasca requiere respeto, intención clara y responsabilidad personal.',
  },
  {
    q: '¿Qué es la integración?',
    a: 'La integración es el proceso posterior a la ceremonia. Consiste en comprender lo vivido y llevarlo a la vida diaria con serenidad. Acompañamos este proceso para que la experiencia se convierta en aprendizaje concreto.',
  },
]

export default function PracticasAncestral() {
  useScrollAnimation()
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="pt-16">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-5 block">Prácticas Ancestrales</span>
          <h1 className="reveal delay-100 text-forest-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Sanación con Ayahuasca:<br />
            <span className="gold-shimmer">Un Encuentro Profundo</span><br />
            Contigo Mismo
          </h1>
          <p className="reveal delay-200 text-gray-600 leading-relaxed max-w-2xl mx-auto">
            La ayahuasca es una medicina ancestral utilizada por pueblos amazónicos como parte de procesos
            espirituales, ceremoniales y de autoconocimiento.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── WHAT IS AYAHUASCA ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">La Medicina</span>
              <h2 className="text-forest-900 text-3xl sm:text-4xl font-medium leading-tight mb-6">
                ¿Qué es la Ayahuasca?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  La ayahuasca es una bebida ancestral amazónica preparada a partir de plantas sagradas.
                  Tradicionalmente se utiliza en ceremonias dirigidas por guías o facilitadores con experiencia,
                  con el propósito de abrir un espacio de introspección, limpieza emocional, conexión espiritual
                  y comprensión interior.
                </p>
                <p>
                  Muchas personas buscan esta experiencia para mirar aspectos profundos de su vida, liberar cargas
                  emocionales, reencontrarse consigo mismas o iniciar un camino de transformación personal.
                </p>
                <p>
                  En Sanar Perú entendemos la ayahuasca como una herramienta de acompañamiento espiritual y
                  ancestral, no como una solución mágica ni como reemplazo de tratamientos médicos o psicológicos.
                </p>
              </div>
              <div className="mt-6 gold-glass rounded-2xl p-5">
                <p className="text-gold-300 text-sm leading-relaxed italic font-medium text-center">
                  "La ayahuasca no se toma por curiosidad; se recibe con respeto."
                </p>
              </div>
            </div>
            <div className="reveal-right space-y-4">
              <h3 className="text-forest-900 font-semibold text-lg mb-5">¿Para quién puede ser esta experiencia?</h3>
              {[
                'Iniciar un proceso de introspección personal',
                'Comprender emociones o experiencias no resueltas',
                'Buscar mayor claridad en una etapa de cambio',
                'Reconectar con tu propósito de vida',
                'Trabajar procesos de perdón, duelo o cierre',
                'Fortalecer tu camino espiritual',
                'Liberar cargas emocionales acumuladas',
                'Vivir una experiencia ancestral con respeto y guía',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold-700/20 border border-gold-700/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star size={10} className="text-gold-500" />
                  </div>
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
              <p className="text-gray-400 text-xs mt-4 pt-4 border-t border-gray-100">
                Cada persona llega con una historia distinta. Por eso, antes de participar, realizamos
                una conversación previa para conocer el estado físico, emocional y personal del participante.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── CEREMONY PROCESS ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">El Proceso</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-medium leading-tight">
              Ceremonia, Respeto<br />y Acompañamiento
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {ceremony.map((c, i) => (
              <div
                key={c.step}
                className={`reveal delay-${(i + 1) * 200} bg-white border border-gray-100 rounded-2xl p-7 card-lift`}
              >
                <div className="w-12 h-12 rounded-full bg-gold-700/20 border border-gold-700/30 flex items-center justify-center mb-5">
                  <span className="text-gold-700 text-sm font-bold">{c.step}</span>
                </div>
                <h3 className="text-forest-900 font-semibold text-base mb-3">{c.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{c.desc}</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gold-600/70 text-xs leading-relaxed italic">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── WHAT YOU MAY EXPERIENCE ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-left">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">La Experiencia</span>
              <h2 className="text-forest-900 text-3xl font-medium leading-tight mb-6">
                ¿Qué Puede Experimentar una Persona?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Cada experiencia es diferente. Algunas personas viven momentos de claridad, calma, emoción,
                  llanto, recuerdos, imágenes simbólicas o sensación de conexión espiritual. Otras pueden
                  atravesar momentos intensos de limpieza física o emocional.
                </p>
                <p>
                  Pueden presentarse náuseas, vómitos, sudoración, temblores, sensibilidad emocional o necesidad
                  de silencio. En la tradición amazónica, algunos de estos procesos son entendidos como parte
                  de una limpieza o liberación.
                </p>
                <p>
                  Lo importante es vivirlo en un ambiente adecuado, con acompañamiento y sin expectativas rígidas.
                </p>
              </div>
            </div>
            <div className="reveal-right">
              <h3 className="text-forest-900 font-semibold text-lg mb-5">Beneficios que Muchas Personas Buscan</h3>
              <div className="flex flex-wrap gap-2">
                {benefits.map((b) => (
                  <div
                    key={b}
                    className="bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-gray-600 text-xs"
                  >
                    {b}
                  </div>
                ))}
              </div>
              <div className="mt-6 gold-glass rounded-2xl p-5">
                <p className="text-gold-300/80 text-sm leading-relaxed italic text-center">
                  "Una ceremonia puede abrir una puerta interior. La integración ayuda a caminar después de abrirla."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── SAFETY ─── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="reveal-left">
              <span className="text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">Seguridad</span>
              <h2 className="text-forest-900 text-3xl font-medium leading-tight mb-6">
                Seguridad y Responsabilidad
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                La ayahuasca no es adecuada para todas las personas. Por eso, antes de participar, es
                indispensable una evaluación previa. La seguridad del participante es prioridad absoluta.
              </p>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="text-gray-600 text-sm font-medium mb-4 flex items-center gap-2">
                  <AlertCircle size={16} className="text-gold-600" />
                  No recomendamos participar si:
                </p>
                <div className="space-y-2">
                  {contraindications.map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-500 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-700/50 flex-shrink-0" />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="reveal-right space-y-5">
              <div>
                <h3 className="text-forest-900 font-semibold text-lg mb-4">¿Cómo Prepararse?</h3>
                <div className="space-y-3">
                  {[
                    'Mantener alimentación ligera y evitar alcohol',
                    'Reducir comidas pesadas, grasas o condimentadas',
                    'Descansar adecuadamente',
                    'Llegar con una intención clara',
                    'Evitar expectativas rígidas',
                    'Informar todos los medicamentos que consumes',
                    'Comunicar antecedentes médicos o emocionales',
                    'Acudir con actitud de respeto y responsabilidad',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                      <div className="w-5 h-5 rounded-full bg-gold-700/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold-600 text-[10px] font-bold">{i + 1}</span>
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                  Las indicaciones finales se entregan después de la entrevista previa, ya que varían según cada caso.
                </p>
              </div>

              {/* Important disclaimer */}
              <div className="bg-gold-950/30 border border-gold-800/30 rounded-2xl p-5">
                <h4 className="text-gold-400 font-semibold text-sm mb-3 flex items-center gap-2">
                  <Shield size={14} />
                  Importante
                </h4>
                <ul className="space-y-2 text-gray-500 text-xs leading-relaxed">
                  <li>• La ayahuasca no reemplaza atención médica, psicológica o psiquiátrica</li>
                  <li>• No debe suspender medicamentos sin indicación de su médico</li>
                  <li>• No ofrecemos promesas de curación</li>
                  <li>• La participación requiere consentimiento informado y entrevista previa</li>
                  <li>• Nuestro enfoque es complementario, ancestral, espiritual y de acompañamiento humano</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── FAQ ─── */}
      <section className="py-20 sm:py-28 bg-green-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-14">
            <span className="reveal text-forest-600 text-xs font-semibold tracking-widest uppercase mb-4 block">FAQ</span>
            <h2 className="reveal delay-100 text-forest-900 text-3xl sm:text-4xl font-medium">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`reveal delay-${Math.min((i + 1) * 100, 500)} bg-white border border-gray-100 rounded-xl overflow-hidden card-lift`}
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
                <div className={`accordion-content ${openFaq === i ? 'open' : ''}`}>
                  <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ─── LEGAL & CTA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="reveal bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10">
            <h4 className="text-gray-600 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
              <Flame size={12} className="text-gold-700" /> Texto Legal
            </h4>
            <p className="text-gray-400 text-xs leading-relaxed">
              Las sesiones de ayahuasca ofrecidas por Sanar Perú tienen un enfoque espiritual, ancestral y complementario.
              No constituyen diagnóstico, tratamiento médico, psicológico o psiquiátrico. Los resultados pueden variar de
              una persona a otra. La participación está sujeta a entrevista previa, declaración de antecedentes,
              consentimiento informado y evaluación de condiciones de seguridad. No suspenda tratamientos ni medicamentos
              indicados por profesionales de salud sin autorización médica.
            </p>
          </div>
          <div className="reveal delay-200 text-center">
            <h2 className="text-forest-900 text-2xl sm:text-3xl font-medium mb-5">
              Agenda una Entrevista Previa
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
              Antes de participar en una sesión de ayahuasca, conversa con nosotros. Te explicaremos el proceso,
              revisaremos si eres apto para la experiencia y resolveremos tus dudas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contactanos"
                className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Solicitar Entrevista Previa <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/51999999999?text=Hola%2C%20quisiera%20información%20sobre%20las%20ceremonias%20de%20ayahuasca"
                target="_blank"
                rel="noopener noreferrer"
                className="liquid-glass text-gray-800 font-medium px-8 py-3.5 rounded-full hover:bg-white/5 transition-colors"
              >
                Escribir por WhatsApp
              </a>
            </div>
            <p className="text-gray-400 text-xs mt-6">
              <Eye size={10} className="inline mr-1" />
              Escucha tu interior. Honra tu proceso. Camina con conciencia.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

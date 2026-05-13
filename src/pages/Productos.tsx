import { Link } from 'react-router-dom'
import { Leaf, Flame, ArrowRight, ShoppingBag } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const alternativosProducts = [
  {
    name: 'Complejo Digestivo Natural',
    desc: 'Formulación a base de hierbas para apoyar la digestión, reducir gases e inflamación abdominal.',
    category: 'Digestión',
  },
  {
    name: 'Defensa Inmune Plus',
    desc: 'Suplemento natural para fortalecer el sistema inmunológico con adaptógenos y vitaminas esenciales.',
    category: 'Sistema Inmune',
  },
  {
    name: 'Detox Hepático',
    desc: 'Apoyo natural para la función del hígado y la vesícula. Ideal para protocolos de desintoxicación.',
    category: 'Desintoxicación',
  },
  {
    name: 'Antiparasitario Natural',
    desc: 'Formulación a base de plantas con propiedades antiparasitarias para apoyar la salud intestinal.',
    category: 'Salud Intestinal',
  },
  {
    name: 'Equilibrio Energético',
    desc: 'Suplemento adaptogénico para combatir el cansancio, mejorar el enfoque y equilibrar el estrés.',
    category: 'Energía',
  },
  {
    name: 'Sueño Reparador',
    desc: 'Mezcla natural de plantas relajantes para mejorar la calidad del sueño sin efectos secundarios.',
    category: 'Descanso',
  },
]

const ancestralesProducts = [
  {
    name: 'Sangre de Grado',
    desc: 'Resina amazónica con propiedades cicatrizantes, antiinflamatorias y antimicrobianas. Uso interno y externo.',
    category: 'Amazónico',
  },
  {
    name: 'Uña de Gato',
    desc: 'Corteza de Uncaria tomentosa. Ampliamente usada para apoyar el sistema inmune y procesos inflamatorios.',
    category: 'Amazónico',
  },
  {
    name: 'Maca Orgánica Andina',
    desc: 'Raíz andina adaptogénica para energía, vitalidad, equilibrio hormonal y rendimiento general.',
    category: 'Andino',
  },
  {
    name: 'Camu Camu Premium',
    desc: 'Fruto amazónico con la mayor concentración natural de vitamina C. Antioxidante y antiinflamatorio.',
    category: 'Amazónico',
  },
  {
    name: 'Aceite de Sacha Inchi',
    desc: 'Rico en ácidos grasos omega 3, 6 y 9. Apoyo cardiovascular, cerebral y antiinflamatorio.',
    category: 'Amazónico',
  },
  {
    name: 'Té Ceremonial de Plantas',
    desc: 'Mezcla de plantas sagradas amazónicas y andinas para uso ceremonial, meditación o bienestar diario.',
    category: 'Ceremonial',
  },
]

type Product = {
  name: string
  desc: string
  category: string
}

function ProductCard({ product, delay }: { product: Product; delay: number }) {
  return (
    <div className={`reveal d1${delay} bg-white border border-s-border rounded-2xl p-6 card flex flex-col gap-3`}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-s-900 font-semibold text-base leading-snug">{product.name}</h3>
        <span className="flex-shrink-0 bg-gold-700/15 border border-gold-700/30 text-gold-600 text-[10px] font-medium px-2 py-0.5 rounded-full">
          {product.category}
        </span>
      </div>
      <p className="text-s-muted text-sm leading-relaxed flex-1">{product.desc}</p>
      <button className="flex items-center gap-1.5 text-gold-500 text-xs font-medium hover:text-gold-400 transition-colors mt-auto">
        <ShoppingBag size={12} />
        Consultar disponibilidad
      </button>
    </div>
  )
}

export default function Productos() {
  useScrollAnimation()

  return (
    <main className="pt-16">
      {/* ─── PAGE HERO ─── */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(46,125,50,0.1)_0%,transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="reveal text-s-600 text-xs font-semibold tracking-widest uppercase mb-5 block">Productos</span>
          <h1 className="reveal d1 text-s-900 text-4xl sm:text-5xl font-semibold leading-tight mb-6">
            Productos <span className="gold-shimmer">Naturales</span>
          </h1>
          <p className="reveal d1 text-s-muted leading-relaxed max-w-2xl mx-auto">
            Selección de productos alternativos y ancestrales, cuidadosamente elegidos para complementar
            tu plan de bienestar natural.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ─── ALTERNATIVOS ─── */}
      <section id="alternativos" className="py-20 sm:py-28 bg-s-bg-alt">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gold-700/20 flex items-center justify-center">
              <Leaf size={20} className="text-gold-500" />
            </div>
            <div>
              <span className="reveal text-s-600 text-xs font-semibold tracking-widest uppercase block mb-1">Categoría 01</span>
              <h2 className="reveal text-s-900 text-2xl sm:text-3xl font-medium">Productos Alternativos</h2>
            </div>
          </div>
          <p className="reveal text-s-muted text-sm leading-relaxed mb-10 max-w-2xl">
            Suplementos y formulaciones naturales desarrollados con un enfoque de medicina alternativa.
            Cada producto es seleccionado por su eficacia y seguridad, siempre complementando el
            acompañamiento personalizado.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {alternativosProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} delay={Math.min((i + 1) * 100, 500)} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── ANCESTRALES ─── */}
      <section id="ancestrales" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-gold-700/20 flex items-center justify-center">
              <Flame size={20} className="text-gold-500" />
            </div>
            <div>
              <span className="reveal text-s-600 text-xs font-semibold tracking-widest uppercase block mb-1">Categoría 02</span>
              <h2 className="reveal text-s-900 text-2xl sm:text-3xl font-medium">Productos Ancestrales</h2>
            </div>
          </div>
          <p className="reveal text-s-muted text-sm leading-relaxed mb-10 max-w-2xl">
            Plantas, resinas y extractos sagrados de la Amazonía y los Andes peruanos. Productos con
            miles de años de uso tradicional, presentados con calidad y pureza verificada.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ancestralesProducts.map((product, i) => (
              <ProductCard key={product.name} product={product} delay={Math.min((i + 1) * 100, 500)} />
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── DISCLAIMER ─── */}
      <section className="py-10 bg-s-bg-alt">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="reveal gold-glass rounded-2xl p-5 sm:p-6 text-center">
            <p className="text-gold-300/70 text-xs leading-relaxed">
              Los productos naturales pueden ser útiles, pero deben usarse con criterio. Algunas plantas o suplementos
              pueden interactuar con medicamentos o no ser adecuados para ciertas personas. Siempre recomendamos
              su uso dentro de un plan de acompañamiento personalizado. Consulta con nuestro equipo antes de iniciar
              cualquier suplementación.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="reveal">
            <h2 className="text-s-900 text-3xl font-medium mb-5">¿Quieres saber qué productos te convienen?</h2>
            <p className="text-s-muted text-sm leading-relaxed mb-8">
              Agenda una consulta y nuestro equipo te orientará sobre los productos más adecuados para tu
              situación particular dentro de un plan de bienestar personalizado.
            </p>
            <Link
              to="/contactanos"
              className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-forest-950 font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Consultar con el Equipo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

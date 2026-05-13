import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import MedicinaAlternativa from './pages/MedicinaAlternativa'
import PracticasAncestral from './pages/PracticasAncestral'
import Productos from './pages/Productos'
import Contactanos from './pages/Contactanos'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/servicios/medicina-alternativa" element={<MedicinaAlternativa />} />
        <Route path="/servicios/practicas-ancestrales" element={<PracticasAncestral />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contactanos" element={<Contactanos />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </HashRouter>
  )
}

export default App

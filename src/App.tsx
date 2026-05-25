import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Platform from './components/Platform'
import Learning from './components/Learning'
import CCIO from './components/CCIO'
import Comics from './components/Comics'
import Tips from './components/Tips'
import Merch from './components/Merch'
import Sessions from './components/Sessions'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="platform" element={<Platform />} />
          <Route path="learning" element={<Learning />} />
          <Route path="ccio" element={<CCIO />} />
          <Route path="comics" element={<Comics />} />
          <Route path="tips" element={<Tips />} />
          <Route path="merch" element={<Merch />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

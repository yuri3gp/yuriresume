import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import StyledGlobal from './styles/globals'
import EnglishResume from './pages/EnglishResume'
import EspanishResume from './pages/EspanishResume'
import PortugueseResume from './pages/PortugueseResume'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="portugues" element={<PortugueseResume />} />
            <Route path="english" element={<EnglishResume />} />
            <Route path="espanish" element={<EspanishResume />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <StyledGlobal/>
    </>
  )
}

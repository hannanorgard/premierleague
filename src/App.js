import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PLSeasons from 'components/PLSeasons'
import SingleSeason from 'components/SingleSeason'

export const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<PLSeasons />} />
          <Route path="/season/:season" element={<SingleSeason />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

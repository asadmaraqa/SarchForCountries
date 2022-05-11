import React, { CSSProperties, useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { useTheme } from './context/theme/themeContext'
import SearchContext from './context/search/searchContext'

import Home from './pages/Home'
import Country from './pages/Country'

import './sass/_main.scss'

export default function App() {
  const { theme } = useTheme()
  const [input, setInput] = useState('')

  return (
    <SearchContext.Provider value={{ input, onChange: setInput }}>
      <div style={{ ...(theme as CSSProperties) }}>
        <BrowserRouter>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:countryName">
            <Country />
          </Route>
        </BrowserRouter>
      </div>
    </SearchContext.Provider>
  )
}

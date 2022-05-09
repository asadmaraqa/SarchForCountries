import React, { CSSProperties, useState } from 'react'

import Routes from './Routes'
import './sass/_main.scss'
import { useTheme } from './context/theme/themeContext'
import SearchContext from './context/search/searchContext'

export default function App() {
  const { theme } = useTheme()
  const [input, setInput] = useState('')

  return (
    <SearchContext.Provider value={{ input, onChange: setInput }}>
      <div style={{ ...(theme as CSSProperties) }}>
        <Routes />
      </div>
    </SearchContext.Provider>
  )
}

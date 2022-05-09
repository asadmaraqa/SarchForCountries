import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../../context/theme/themeContext'

const SwitchTheme = ({ onClick }: any) => {
  const { setCurrentTheme } = useTheme()

  return (
    <div className="header__menu">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faX} size="1x" />
      </button>
      <ul>
        <li>
          <button onClick={() => setCurrentTheme('blue')}>blue</button>
        </li>
        <li>
          <button onClick={() => setCurrentTheme('red')}>RED</button>
        </li>
        <li>
          <button onClick={() => setCurrentTheme('green')}>Green</button>
        </li>
        <li>
          <button onClick={() => setCurrentTheme('original')}>Original</button>
        </li>
      </ul>
    </div>
  )
}

export default SwitchTheme

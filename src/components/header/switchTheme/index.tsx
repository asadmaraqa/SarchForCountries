import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../../../context/theme/themeContext'

const SwitchTheme = ({ onClick }: { onClick: () => void }) => {
  console.log(typeof onClick)
  const { setCurrentTheme } = useTheme()

  return (
    <div className="header__toggle">
      <FontAwesomeIcon icon={faX} size="1x" onClick={onClick} />
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
          <button onClick={() => setCurrentTheme('original')}>Purple</button>
        </li>
      </ul>
    </div>
  )
}

export default SwitchTheme

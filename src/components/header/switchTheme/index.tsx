import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

const SwitchTheme = ({ onClick }: any) => {
  return (
    <div className="header__menu">
      <button onClick={onClick}>
        <FontAwesomeIcon icon={faX} size="1x" />
      </button>
      <ul>
        <li>
          <button>blue</button>
        </li>
        <li>
          <button>RED</button>
        </li>
        <li>
          <button>Green</button>
        </li>
        <li>
          <button>Original</button>
        </li>
      </ul>
    </div>
  )
}

export default SwitchTheme

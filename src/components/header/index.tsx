import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons'

import '../../sass/_main.scss'
import SearchBar from '../SearchBar'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false)

  return (
    <header className="header">
      <button onClick={() => setToggleMenu(!toggleMenu)}>
        <FontAwesomeIcon
          icon={faBars}
          size="1x"
          className="header__icon-menu"
        />
      </button>
      <h1>Discover a country</h1>
      <SearchBar />
      <FontAwesomeIcon
        icon={faHeart}
        size="1x"
        className="header__icon-heart"
      />
      {toggleMenu ? (
        <div className="header__menu">
          <ul>
            <a href="/">
              <li>Purple</li>
            </a>
            <a href="/">
              <li>Green</li>
            </a>
            <a href="/">
              <li>Yellow</li>
            </a>
            <a href="/">
              <li>Grey</li>
            </a>
          </ul>
        </div>
      ) : (
        ''
      )}
    </header>
  )
}

export default Header

import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../SearchBar'
import '../../sass/_main.scss'
import SwitchTheme from './switchTheme'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const menuHandler = (): void => setToggleMenu(!toggleMenu)
  return (
    <header className="header">
      <FontAwesomeIcon
        icon={faBars}
        size="1x"
        className="header__icon-menu"
        onClick={() => setToggleMenu(!toggleMenu)}
      />
      <h1 aria-label="logo">Discover a country</h1>
      <SearchBar aria-label="search for countires bar" />
      <FontAwesomeIcon
        icon={faHeart}
        size="1x"
        className="header__icon-heart"
      />
      {toggleMenu ? (
        <>
          <SwitchTheme onClick={menuHandler} />
        </>
      ) : (
        ''
      )}
    </header>
  )
}

export default Header

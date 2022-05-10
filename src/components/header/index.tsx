import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBars } from '@fortawesome/free-solid-svg-icons'

import SearchBar from '../SearchBar'
import '../../sass/_main.scss'
import SwitchTheme from './switchTheme'
import { AppState } from '../../globalTypes'
import Like from '../like/Like'

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [toggleLike, setToggleLike] = useState(false)
  const menuHandler = (): void => setToggleMenu(!toggleMenu)
  const likeHandler = (): void => setToggleLike(!toggleLike)
  const like = useSelector((state: AppState) => state.like.like)

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
      <span className="fa-layers fa-fw">
        <FontAwesomeIcon
          icon={faHeart}
          size="2x"
          className="header__icon-heart"
          onClick={() => setToggleLike(!toggleLike)}
        />
        <span className="fa-layers-counter header__badge">{like.length}</span>
        {toggleLike ? <Like onClick={likeHandler} /> : ''}
      </span>
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

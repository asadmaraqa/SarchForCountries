import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../../sass/_main.scss'

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="search countires" />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

export default SearchBar

import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../../sass/_main.scss'
import SearchContext from '../../context/search/searchContext'

const SearchBar = () => {
  const { onChange, input } = useContext(SearchContext)

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search countries"
        value={input}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

export default SearchBar

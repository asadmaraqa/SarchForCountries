import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../../sass/_main.scss'
import SearchContext from '../../context/search/searchContext'

const SearchBar = () => {
  const { onChange } = useContext(SearchContext)
  const [input, setInput] = useState('')
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="search countires"
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          onChange(e.target.value)
        }}
      />
      <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

export default SearchBar

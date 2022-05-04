import React from 'react'
import Button from '../Button'
import '../../sass/_main.scss'

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="text" placeholder="search countires" />
      <Button />
    </div>
  )
}

export default SearchBar

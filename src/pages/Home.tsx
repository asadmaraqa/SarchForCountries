import React, { useState } from 'react'

import Header from '../components/Header'
import CountriesCard from '../components/CountriesCard'
import CountriesTable from '../components/CountriesTable'

import '../sass/_main.scss'

const Home = () => {
  const [showContent, setShowContent] = useState('card')
  function handleSelectChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setShowContent(event.target.value)
  }

  return (
    <div className="page">
      <Header />
      <span>
        view:
        <select onChange={handleSelectChange} value={showContent}>
          <option value="card">Cards</option>
          <option value="table">Table</option>
        </select>
      </span>
      {showContent === 'card' ? <CountriesCard /> : <CountriesTable />}
    </div>
  )
}

export default Home

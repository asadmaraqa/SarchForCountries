import React, { useState } from 'react'

import Header from '../components/Header'
import CountriesCard from '../components/CountriesCard'
import '../sass/_main.scss'
import CountriesTable from '../components/CountriesTable'

const Home = () => {
  const [showContent, setShowContent] = useState('card')
  function handleSelectChange(event: {
    target: { value: React.SetStateAction<string> }
  }) {
    setShowContent(event.target.value)
  }
  console.log(showContent)
  return (
    <div className="page">
      <Header />
      <select onChange={handleSelectChange} value={showContent}>
        <option value="card">Cards</option>
        <option value="table">Table</option>
      </select>
      {showContent === 'card' ? <CountriesCard /> : <CountriesTable />}
    </div>
  )
}

export default Home

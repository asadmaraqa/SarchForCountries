import React from 'react'

import Header from '../components/header'
import CountriesCard from '../components/countriesCard'
import '../sass/_main.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CountriesCard />
    </div>
  )
}

export default Home

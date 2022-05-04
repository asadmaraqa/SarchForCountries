import React from 'react'

import Header from '../components/header'
import CountryCard from '../components/countryCard'
import '../sass/_main.scss'

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CountryCard />
    </div>
  )
}

export default Home

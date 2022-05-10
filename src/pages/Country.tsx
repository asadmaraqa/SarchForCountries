import React from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CountryInformation from '../components/countryInformation'

import Header from '../components/header'
import { AppState } from '../globalTypes'

import '../sass/_main.scss'

interface CountryParams {
  countryName: string
}
const Country = () => {
  let { countryName } = useParams<CountryParams>()

  const countries = useSelector((state: AppState) => state.country.countries)

  return (
    <div className="page">
      <Header />
      {countries.map((countriesAll: any) =>
        countriesAll.name.common.includes(countryName) ? (
          <CountryInformation {...countriesAll} />
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default Country

import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AppState } from '../globalTypes'
import { addCountry } from '../redux/actions'

import CountryInformation from '../components/CountryInformation'
import Header from '../components/Header'

import '../sass/_main.scss'

interface CountryParams {
  countryName: string
}
const Country = () => {
  let { countryName } = useParams<CountryParams>()

  const countries = useSelector((state: AppState) => state.country.countries)

  const likedCountry = useSelector((state: AppState) => state.like.like)
  const dispatch = useDispatch()

  return (
    <div className="page">
      <Header />
      {countries.map((countriesAll: any) =>
        countriesAll.name.common.includes(countryName) ? (
          <CountryInformation
            {...countriesAll}
            onClick={() => dispatch(addCountry(countriesAll))}
            buttonStatus={likedCountry.includes(countriesAll)}
            key={countriesAll.name.common}
          />
        ) : (
          ''
        )
      )}
    </div>
  )
}

export default Country

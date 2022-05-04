import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'

import { fetchCountriesApi } from '../../redux/actions'

const CountryCard = () => {
  const countries = useSelector((state: AppState) => state.country.countries)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCountriesApi())
  }, [dispatch])

  return (
    <div className="countryCard">
      {countries.map((country: any) => (
        <div className="countryCard__container">
          <img src={country.flags.png} alt="" className="countryCard__image" />
          <h2 className="countryCard__name">{country.name.common}</h2>
          <h2 className="countryCard__language">{'asia'}</h2>
          <button> I like it</button>
        </div>
      ))}
    </div>
  )
}

export default CountryCard

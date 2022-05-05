import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../types'

import { fetchCountriesApi } from '../../redux/actions'
import Card from './card'
import { numberWithSpaces } from '../../helper/numberWithSpaces'

const CountriesCard = () => {
  const loading = useSelector((state: AppState) => state.country.isLoading)
  const countries = useSelector((state: AppState) => state.country.countries)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchCountriesApi())
  }, [dispatch])

  return (
    <section className="countryCard">
      {loading && <h1>Loading please wait ....</h1>}
      {!loading &&
        countries.map((country: any) => (
          <Card
            name={country.name.common}
            flag={country.flags.png}
            region={country.region}
            languages={country.languages}
            population={numberWithSpaces(country.population)}
          />
        ))}
    </section>
  )
}

export default CountriesCard

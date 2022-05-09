import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchCountriesApi } from '../../redux/actions'
import Card from './card'
import SearchContext from '../../context/search/searchContext'
import { AppState, CardData } from '../../globalTypes'

const CountriesCard = () => {
  const loading = useSelector((state: AppState) => state.country.isLoading)
  const countries = useSelector((state: AppState) => state.country.countries)

  const [searchedCountries, setSearchedCountries] = useState(countries)
  const { input } = useContext(SearchContext)

  useEffect(() => {
    setSearchedCountries(countries)
  }, [countries])

  useEffect(() => {
    const search_resualt: [] = countries.filter((country: CardData) =>
      country.name.common.toLowerCase().includes(input?.toLowerCase())
    ) as []

    setSearchedCountries(search_resualt)
  }, [input, countries])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCountriesApi())
  }, [dispatch])

  return (
    <section className="countryCard">
      {loading && <h1>Loading please wait ....</h1>}
      {!loading &&
        searchedCountries.map((country: CardData) => (
          <Card {...country} key={country.name.common} />
        ))}
    </section>
  )
}

export default CountriesCard

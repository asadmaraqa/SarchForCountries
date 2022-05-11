import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchContext from '../../context/search/searchContext'
import { AppState, CardData } from '../../globalTypes'
import { numberWithSpaces } from '../../helper/numberWithSpaces'
import { addCountry, fetchCountriesApi } from '../../redux/actions'
import Button from '../button'

const CountriesTable = () => {
  const loading = useSelector((state: AppState) => state.country.isLoading)
  const countries = useSelector((state: AppState) => state.country.countries)
  const likedCountry = useSelector((state: AppState) => state.like.like)
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
  const test: any = likedCountry.map((country: any) => country.name.common)

  return (
    <table className="table">
      <tbody>
        <tr>
          <th>flag</th>
          <th>Name</th>
          <th>Languges</th>
          <th>Population</th>
          <th>Region</th>
        </tr>
        {!loading &&
          searchedCountries.map((country: CardData) => (
            <tr>
              <img
                src={country.flags.png}
                alt={country.name.common}
                className="table__image"
              />
              <td>{country.name.common}</td>
              <td>
                {country.languages &&
                  Object.values(country.languages).map((lang: any) => (
                    <ul key={lang}>
                      <li>{lang}</li>
                    </ul>
                  ))}
              </td>
              <td>{numberWithSpaces(country.population)}</td>
              <td>{country.region}</td>
              <td>
                {test.includes(country.name.common) ? (
                  <Button title={'LIKED'} disable={true} />
                ) : (
                  <Button
                    title={'LIKE'}
                    onClick={() => dispatch(addCountry(country))}
                  />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default CountriesTable

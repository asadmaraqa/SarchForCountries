import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppState, CardData, CountryInfoData } from '../../globalTypes'
import { numberWithSpaces } from '../../helper/numberWithSpaces'
import Button from '../Button'

const CountryInformation = ({
  name,
  flags,
  region,
  population,
  languages,
  capital,
  maps,
  onClick,
  buttonStatus,
}: CountryInfoData) => {
  const openMap = () => {
    const url = maps.googleMaps
    window.open(url, '_blank')
  }
  const history = useHistory()
  const likedCountry: any = useSelector((state: AppState) => state.like.like)

  const likedButton: string[] = likedCountry.map(
    (country: CardData) => country.name.common
  )
  const isDisabled = likedButton.includes(name.common)

  return (
    <section>
      <Button title="go back" onClick={() => history.goBack()} />
      <div className="CountryInformation" key={name.common}>
        <div>
          <img src={flags.png} alt={name.common} className="card__image" />
          <h2 className="card__name">{name.common}</h2>
        </div>
        <div className="card_content">
          <h3 className="card__language">Region: </h3>
          <p>{region}</p>
          <h3>Population:</h3>
          <p>{numberWithSpaces(population)}</p>
          <h3>Languages</h3>
          {languages &&
            Object.values(languages).map((lang: string) => (
              <ul key={lang}>
                <li>{lang}</li>
              </ul>
            ))}
          <h3>Capital:</h3>
          <p>{capital}</p>
          <Button
            title={isDisabled ? 'LIKED' : 'LIKE'}
            disable={isDisabled}
            onClick={isDisabled ? () => null : onClick}
          />
          <Button title="Google Map" onClick={() => openMap()} />
        </div>
      </div>
    </section>
  )
}

export default CountryInformation

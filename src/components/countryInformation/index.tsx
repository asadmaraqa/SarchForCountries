import React from 'react'
import { useHistory } from 'react-router-dom'

import { CountryInfoData } from '../../globalTypes'
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
}: CountryInfoData) => {
  const openMap = () => {
    const url = maps.googleMaps
    window.open(url, '_blank')
  }
  const history = useHistory()
  return (
    <>
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

            <Button title="Google Map" onClick={() => openMap()} />
          </div>
        </div>
      </section>
    </>
  )
}

export default CountryInformation

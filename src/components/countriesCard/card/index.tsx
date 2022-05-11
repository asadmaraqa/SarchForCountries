import React from 'react'

import { AppState, CardData } from '../../../globalTypes'
import Button from '../../button'
import { numberWithSpaces } from '../../../helper/numberWithSpaces'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Card = ({
  name,
  flags,
  region,
  population,
  languages,
  onClick,
  buttonStatus,
}: CardData) => {
  const history = useHistory()

  const likedCountry: any = useSelector((state: AppState) => state.like.like)

  const LikedButton: [{}] = likedCountry.map(
    (country: CardData) => country.name.common
  )

  return (
    <>
      <div className="card" key={name.common}>
        <div>
          <img src={flags.png} alt={name.common} className="card__image" />
          <h2 className="card__name">{name.common}</h2>
          {LikedButton.includes(name.common) ? (
            <Button title={'LIKED'} disable={true} />
          ) : (
            <Button title={'LIKE'} onClick={() => onClick()} />
          )}
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
          <Button
            title={'READ MORE'}
            onClick={() => history.push(`/country/${name.common}`)}
          />
        </div>
      </div>
    </>
  )
}

export default Card

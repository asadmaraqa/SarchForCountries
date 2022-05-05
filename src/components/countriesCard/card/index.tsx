import React from 'react'
import { CardData } from '../../../types'
import Button from '../../button'

const Card = ({ name, flag, region, population, languages }: CardData) => {
  return (
    <>
      <div className="card" key={name}>
        <div>
          <img src={flag} alt="" className="card__image" />
          <h2 className="card__name">{name}</h2>
          <Button title={'LIKE'} />
        </div>

        <div className="card_content">
          <p className="card__language">
            <h3>Region:</h3>
            {region}
          </p>
          <p>
            {' '}
            <h3>Population:</h3> {population}
          </p>
          <h3>Languages</h3>
          {languages &&
            Object.values(languages).map((lang: any) => (
              <ul key={lang}>
                <li>{lang}</li>
              </ul>
            ))}
        </div>
      </div>
    </>
  )
}

export default Card

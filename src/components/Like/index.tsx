import React from 'react'
import { faTrash, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useDispatch, useSelector } from 'react-redux'
import { AppState, LikedCountryProps, onClickType } from '../../globalTypes'
import { removeCountry } from '../../redux/actions'

import '../../sass/_main.scss'

const Like = ({ onClick }: onClickType) => {
  const likedCountry: any = useSelector((state: AppState) => state.like.like)
  const dispatch = useDispatch()
  return (
    <>
      <div className="like">
        <FontAwesomeIcon
          icon={faX}
          size="1x"
          onClick={onClick}
          className="like__icon-close"
        />
        <ul>
          {likedCountry.length !== 0 ? (
            likedCountry.map((liked: LikedCountryProps) => (
              <li className="like__item" key={liked.name.common}>
                <img
                  src={liked.flags.png}
                  alt={liked.name.common}
                  className="like__image"
                />
                <h3>{liked.name.common}</h3>
                <FontAwesomeIcon
                  icon={faTrash}
                  size="xs"
                  className="like__icon-trash"
                  onClick={() => dispatch(removeCountry(liked))}
                />
              </li>
            ))
          ) : (
            <li className="like__item">
              <h3 className="like__text">Please like a country</h3>
            </li>
          )}
        </ul>
      </div>
    </>
  )
}

export default Like

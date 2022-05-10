import {
  AddCountryAction,
  ADD_COUNTRY,
  LikeCountry,
  RemoveCountryAction,
  RREMOVE_COUNTRY,
} from '../../globalTypes'

export function addCountry(country: LikeCountry): AddCountryAction {
  return {
    type: ADD_COUNTRY,
    payload: country,
  }
}

export function removeCountry(country: LikeCountry): RemoveCountryAction {
  return {
    type: RREMOVE_COUNTRY,
    payload: country,
  }
}

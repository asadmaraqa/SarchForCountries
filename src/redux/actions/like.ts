//under work never midn here

import {
  AddCountryAction,
  ADD_COUNTRY,
  RemoveCountryAction,
  RREMOVE_COUNTRY,
} from '../../types'

export function addCountry(country: object): AddCountryAction {
  return {
    type: ADD_COUNTRY,
    payload: country,
  }
}

export function removeCountry(country: object): RemoveCountryAction {
  return {
    type: RREMOVE_COUNTRY,
    payload: country,
  }
}

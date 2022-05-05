//under work never midn here

import {
  AddCountryAction,
  ADD_COUNTRY,
  LikeinitState,
  RemoveCountryAction,
  RREMOVE_COUNTRY,
} from '../../types'
let initialLike: [] = []
const initState: LikeinitState = {
  like: initialLike,
}

export default function like(
  state = initState,
  action: AddCountryAction | RemoveCountryAction
) {
  switch (action.type) {
  case ADD_COUNTRY:
    const addedCountry = action.payload
    return {
      ...state,
      like: [...state.like, addedCountry],
    }
  case RREMOVE_COUNTRY:
    const removedCountry = action.payload
    const filteredLike = state.like.filter(
      (country) => country !== removedCountry
    )

    return {
      ...state,
      like: [...filteredLike],
    }
  default:
    return state
  }
}

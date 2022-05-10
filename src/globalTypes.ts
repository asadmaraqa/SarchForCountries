// Action types
export const FETCH_LOADING = 'FETCH_LOADING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const RREMOVE_COUNTRY = 'REMOVE_COUNTRY'

export type AppState = {
  country: CountryinitState
  like: LikeinitState
}

export type CardData = {
  name: { common: string }
  flags: { png: string }
  region: string
  population: string
  languages: []
  onClick: Function
  buttonStatus: boolean
}

export type CountryInfoData = {
  name: { common: string }
  flags: { png: string }
  region: string
  population: string
  languages: []
  capital: string
  maps: { googleMaps: string }
}

export type LikeData = {
  name: { common: string }
}

// A product
export type CountryinitState = {
  countries: []
  isLoading: boolean
  error: string
}
export type LikeinitState = {
  like: object[]
}
export type FetchLoadingAction = {
  type: typeof FETCH_LOADING
}
export type FetchSuccessAction = {
  type: typeof FETCH_SUCCESS
  payload: []
}
export type FetchFailedAction = {
  type: typeof FETCH_FAILED
  payload: string
}

//LikeTypes

export type LikeCountry = {}

export type LikeCountryState = {
  like: LikeCountry[]
}
export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: LikeCountry
}

export type RemoveCountryAction = {
  type: typeof RREMOVE_COUNTRY
  payload: LikeCountry
}

// Like component
export type LikedCountryProps = {
  name: { common: string }
  flags: { png: string }
}
export type onClickType = {
  onClick?: React.MouseEventHandler<SVGSVGElement>
}

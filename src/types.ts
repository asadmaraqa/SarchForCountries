// Action types
export const FETCH_LOADING = 'FETCH_LOADING'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAILED = 'FETCH_FAILED'

export type AppState = {
  country: CountryinitState
}

// A product
export type CountryinitState = {
  countries: []
  isLoading: boolean
  error: string
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

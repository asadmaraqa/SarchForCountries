import { Dispatch } from 'redux'
import axios from 'axios'

import {
  FetchFailedAction,
  FetchLoadingAction,
  FetchSuccessAction,
  FETCH_FAILED,
  FETCH_LOADING,
  FETCH_SUCCESS,
} from '../../globalTypes'

export function fetchLoading(): FetchLoadingAction {
  return {
    type: FETCH_LOADING,
  }
}

export function fetchCountriesSucces(countries: []): FetchSuccessAction {
  return {
    type: FETCH_SUCCESS,
    payload: countries,
  }
}

export function fetchCountriesFailed(error: string): FetchFailedAction {
  return {
    type: FETCH_FAILED,
    payload: error,
  }
}

export function fetchCountriesApi() {
  return (dispatch: Dispatch) => {
    dispatch(fetchLoading())
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((respone) => {
        const countries = respone.data
        dispatch(fetchCountriesSucces(countries))
      })
      .catch((error) => {
        dispatch(fetchCountriesFailed(error))
      })
  }
}

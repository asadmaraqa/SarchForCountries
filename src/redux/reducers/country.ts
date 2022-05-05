import {
  CountryinitState,
  FETCH_LOADING,
  FETCH_FAILED,
  FETCH_SUCCESS,
  FetchLoadingAction,
  FetchSuccessAction,
  FetchFailedAction,
} from '../../types'

const initState: CountryinitState = {
  countries: [],
  isLoading: false,
  error: '',
}

export default function country(
  state = initState,
  action: FetchLoadingAction | FetchSuccessAction | FetchFailedAction
) {
  switch (action.type) {
  case FETCH_LOADING:
    return {
      ...state,
      isLoading: true,
    }

  case FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      countries: action.payload,
      error: '',
    }

  case FETCH_FAILED:
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
  default:
    return state
  }
}

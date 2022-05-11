import { createContext } from 'react'

export interface likeprops {
  buttonStatus: any
}

const likeContext = createContext({
  buttonStatus: false,
} as likeprops)

export default likeContext

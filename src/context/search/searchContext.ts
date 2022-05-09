import { createContext } from 'react'

export interface searchContextProps {
  onChange: any
  input: string
}

const SearchContext = createContext({
  onChange: '',
} as searchContextProps)

export default SearchContext

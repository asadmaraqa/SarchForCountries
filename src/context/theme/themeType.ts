/* eslint-disable no-unused-vars */
import { Dispatch, SetStateAction } from 'react'

export enum Color {
  BLUE = '#61b0b7',
  DARK_BLUE = '#0583d2',
  BLUE_BG = '#b8e3ff',

  RED = '#FFAFAF',
  DARK_RED = '#FF9999',
  RED_BG = '#FFEBCC',

  GREEN = '#B4E197',
  DARK_GREEN = '#83BD75',
  GREEN_BG = '#E9EFC0',

  ORIGINAL = '#B667F1',
  DARK_ORIGINAL = '#9C51E0',
  ORIGINAL_BG = '#ECC488',
}

export type ThemeType = 'blue' | 'red' | 'green' | 'original'

export interface Theme {
  '--primary': Color
  '--secondary': Color
  '--background': Color
}

export interface ThemeContextProps {
  themeType: ThemeType
  theme: Theme
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>
}

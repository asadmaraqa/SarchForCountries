import { Color, Theme, ThemeType } from './themeType'

export const themesColors: Record<ThemeType, Theme> = {
  blue: {
    '--primary': Color.BLUE,
    '--secondary': Color.DARK_BLUE,
    '--background': Color.BLUE_BG,
  },
  red: {
    '--primary': Color.RED,
    '--secondary': Color.DARK_RED,
    '--background': Color.RED_BG,
  },
  green: {
    '--primary': Color.GREEN,
    '--secondary': Color.DARK_GREEN,
    '--background': Color.GREEN_BG,
  },
  original: {
    '--primary': Color.ORIGINAL,
    '--secondary': Color.DARK_ORIGINAL,
    '--background': Color.ORIGINAL_BG,
  },
}

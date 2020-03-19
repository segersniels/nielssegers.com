import {
  createGlobalStyle,
  css,
  default as styled,
  keyframes,
  ServerStyleSheet,
  ThemeProvider,
} from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const breakpoints: { [key: string]: string } = {
  xsm: '370px',
  sm: '576px',
  md: '758px',
  lg: '992px',
  xl: '1200px',
};

const theme = {
  colors,
  // These breakpoints are used by styled-system, which is used by @rebass/grid
  breakpoints: Object.values(breakpoints),
  fonts,
};

export type DefaultThemeInterface = typeof theme;

export {
  styled,
  breakpoints,
  css,
  colors,
  createGlobalStyle,
  keyframes,
  theme,
  ThemeProvider,
  ServerStyleSheet,
};

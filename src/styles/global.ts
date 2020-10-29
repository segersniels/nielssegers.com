import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 62.5%;
    overflow-y: scroll;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  ul {
    list-style: inside;
    margin-left: 1em;
  }

  input,
  textarea,
  button,
  select {
    -webkit-appearance: none;
    border-radius: 0;
    outline: 0;
  }

  html,
  body,
  [id='__next'] {
    height: 100%;
    width: 100%;
  }

  [id='__next'] {
    height: auto;
    min-height: 100%;
    font-size: 1.8em;
    line-height: 1.8em;
    letter-spacing: -0.02em;
    display: flex;
    flex-direction: column;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco',
      'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif;
    font-display: swap;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    [id='__next'] {
      font-size: 1.5em;
    }
  }

  h1 {
    font-size: 1.56em;
    font-weight: normal;
  }

  h1,
  h2,
  h3 {
    line-height: 1.4;
  }

  img {
    max-width: 100%;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-weight: 300;
    color: #1a1a1a;
  }

  a {
    text-decoration: underline;
    color: inherit;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 200;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 900;
    font-display: block;
    src: url(https://assets.vercel.com/raw/upload/v1587415301/fonts/2/inter-var-latin.woff2)
      format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
      U+FEFF, U+FFFD;
  }
`;

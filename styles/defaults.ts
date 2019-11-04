import { breakpoints, css, styled, theme } from 'styles';
import colors from './colors';

export const desktopSize = '40%';
export const mobileSize = '90%';

export const Title = styled.h1<{ gradient?: boolean }>`
  font-size: 6rem;
  font-weight: ${theme.fonts.thinWeight};

  @media screen and (max-width: ${breakpoints.xsm}) {
    font-size: 5rem;
  }

  ${({ gradient }) => {
    if (gradient) {
      return css`
        background: linear-gradient(70deg, #ff6464 0%, #f5ee9e 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
    }
    return;
  }}
`;

export const SubTitle = styled.h2<{ color?: string }>`
  font-size: 2rem;
  font-weight: ${theme.fonts.boldWeight};

  @media screen and (max-width: ${breakpoints.xsm}) {
    font-size: 1.6rem;
  }

  ${({ color }) => {
    if (color) {
      return css`
        color: ${color};
      `;
    }
    return;
  }}
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: ${colors.darkerGrey};
  margin: 0;

  @media screen and (max-width: ${breakpoints.xsm}) {
    font-size: 1.4rem;
  }
`;

export const Redirect = styled.a<{
  underline?: boolean;
  background?: string;
  color?: string;
}>`
  text-decoration: none;
  cursor: pointer;

  ${({ underline }) => {
    if (underline) {
      return css`
        text-decoration: underline;
      `;
    }
    return;
  }}

  ${({ background }) => {
    if (background) {
      return css`
        background-color: ${background};
        padding-left: 1rem;
        padding-right: 1rem;
        width: fit-content;

        display: inline-flex;

        transform-origin: top;
        transform: skewX(30deg);
      `;
    }
    return;
  }}

${({ color }) => {
  if (color) {
    return css`
      color: ${color};
    `;
  }
  return;
}}
`;

export const Line = styled.hr`
  height: 1px;
  background-color: ${colors.lightGrey};
  border: none;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const Container = styled.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  max-width: 100%;

  flex: 1;

  display: flex;
  flex-direction: column;
`;

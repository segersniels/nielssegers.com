import styled, { css } from 'styled-components';
import breakpoints from 'styles/breakpoints';

export const SubTitle = styled.h2<{ color?: string }>`
  font-size: 2rem;

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
  font-weight: 300;
  margin: 0;
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

export const ViewportAwareContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  max-width: 90vw;

  flex: 1;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${breakpoints.tablet}) {
    max-width: 65vw;
  }

  @media only screen and (min-width: ${breakpoints.laptop}) {
    max-width: 55vw;
  }

  @media only screen and (min-width: ${breakpoints.laptopL}) {
    max-width: 45vw;
  }

  @media only screen and (min-width: ${breakpoints.desktop}) {
    max-width: 35vw;
  }
`;

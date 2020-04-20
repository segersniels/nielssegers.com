import styled, { css } from 'styled-components';

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

export const Text = styled.p<{ color?: string; bold?: boolean }>`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0;

  color: ${(props) => props.color || 'black'};
  font-weight: ${(props) => (props.bold ? 500 : 300)};
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

export const Container = styled.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  max-width: 30vw;

  flex: 1;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    max-width: 90vw;
  }
`;

import styled, { css } from 'styled-components';

export const SubTitle = styled.h2<{ color?: string }>`
  font-size: 2.1rem;

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

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    max-width: 65vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.laptop}) {
    max-width: 55vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.laptopL}) {
    max-width: 45vw;
  }

  @media only screen and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
    max-width: 35vw;
  }
`;

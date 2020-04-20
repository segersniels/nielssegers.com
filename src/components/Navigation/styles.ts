import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 5em;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Links = styled(Row)`
  margin-top: 0.5rem;
`;

export const Item = styled.a<{ isActive?: boolean }>`
  text-decoration: none;

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  &:first-child div {
    display: none;
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        text-decoration: underline;
      `;
    }
    return css`
      &:hover {
        opacity: 0.75;
      }
    `;
  }}
`;

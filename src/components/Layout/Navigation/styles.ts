import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  line-height: 1em;
  letter-spacing: -0.07em;
`;

export const SubTitle = styled(Title)`
  font-size: 1em;
  font-weight: 500;
  margin-top: 1rem;

  background-color: ${({ theme }) => theme.colors.gradient.backgroundColor};
  background-image: ${({ theme }) => theme.colors.gradient.backgroundImage};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) {
    margin-top: 2rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

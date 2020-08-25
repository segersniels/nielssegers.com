import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';
import colors from 'styles/colors';

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
  font-weight: 300;
  margin-top: 1rem;
  color: ${colors.blackLight};

  @media only screen and (max-width: ${breakpoints.tablet}) {
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

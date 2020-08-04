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
`;

export const SubTitle = styled(Title)`
  font-size: 1em;
  font-weight: 300;
  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
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

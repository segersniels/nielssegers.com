import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3em;
  font-weight: 700;
  line-height: 1em;
`;

export const Description = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
`;

export const Item = styled.a`
  text-decoration: none;
`;

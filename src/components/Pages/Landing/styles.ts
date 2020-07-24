import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  align-self: center;
  justify-self: center;
  margin-left: 25vw;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-end;
`;

export const Description = styled.p`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.1em;
  text-align: end;
  margin: 0;

  cursor: pointer;

  @media only screen and (max-width: 768px) {
    font-size: 2em;
  }
`;

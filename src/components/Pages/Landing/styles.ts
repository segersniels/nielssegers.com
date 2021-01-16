import styled from 'styled-components';
import breakpoints from 'styles/breakpoints';

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

export const Highlight = styled.a`
  font-size: 3em;
  font-weight: 700;
  line-height: 1.3em;
  letter-spacing: -0.05em;
  text-align: end;
  margin: 0;

  text-decoration: none;
  cursor: pointer;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    font-size: 2em;
  }

  @media (min-width: ${breakpoints.laptop}) {
    &:hover {
      background: rgb(236, 63, 251);
      background: linear-gradient(
        34deg,
        rgba(236, 63, 251, 1) 0%,
        rgba(252, 229, 70, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
`;

export const Item = styled.a`
  text-decoration: none;
  margin-right: 0.6rem;
`;

export const Icon = styled.p`
  width: fit-content;
  height: fit-content;
  font-size: 1em;
  line-height: 1em;
`;

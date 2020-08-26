import styled from 'styled-components';

export const Terminal = styled.section`
  background: rgb(40, 44, 52);
  padding: 2.3rem 0.55rem 0.55rem 0.55rem;
  max-width: 100%;
  border-radius: 0.5rem;
  position: relative;
  overflow: auto;
  letter-spacing: 0;

  &:after {
    top: 0.8rem;
    left: 0.8rem;
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #f85955;
    box-shadow: 0 0 0 0.2rem #f85955, 1.5rem 0 0 0.2rem #fbbe3f,
      3rem 0 0 0.2rem #45cc4b;
  }
`;

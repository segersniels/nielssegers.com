import styled from 'styled-components';

export const Terminal = styled.section`
  border: 0.05rem solid rgb(40, 44, 52);
  background: rgb(40, 44, 52);
  color: white;
  padding: 2.25rem 0.5rem 0.5rem 0.5rem;
  resize: none;
  max-height: null;
  max-width: 100%;
  height: null;
  border-radius: 0.5rem;
  position: relative;
  overflow: auto;
  z-index: 2;
  letter-spacing: 0;

  &:after {
    top: 0.8rem;
    left: 0.8rem;
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    z-index: 2;
    border-radius: 50%;
    background: #f85955;
    box-shadow: 0 0 0 0.2rem #f85955, 1.5rem 0 0 0.2rem #fbbe3f,
      3rem 0 0 0.2rem #45cc4b;
  }

  &:before {
    height: 2rem;
    line-height: 2rem;
    background: rgb(40, 44, 52);
    border-bottom: 0.05rem solid rgb(40, 44, 52);
    background: rgb(40, 44, 52);
    color: #ccc;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    background-clip: padding-box;
    font-family: -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif,
      'Apple Color Emoji';
  }
`;

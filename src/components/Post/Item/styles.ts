import { breakpoints, colors, styled } from 'styles';
import { Text as TextDefault } from 'styles/defaults';

export const Author = styled(TextDefault)`
  font-size: 1rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const Body = styled.div`
  font-size: 1.8rem;
  color: ${colors.darkerGrey};

  @media screen and (max-width: ${breakpoints.xsm}) {
    font-size: 1.4rem;
  }

  & em {
    background-color: ${colors.codeGrey};
    padding: 0.5rem;
    font-family: monospace;
    font-style: normal;
  }
`;

export const Text = styled(TextDefault)`
  margin-top: 1em;
  text-align: right;
`;

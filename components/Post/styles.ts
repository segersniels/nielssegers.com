import { breakpoints, colors, styled } from 'styles';
import { Text } from 'styles/defaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid ${colors.lightGrey};
`;

export const Author = styled(Text)`
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

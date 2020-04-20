import styled from 'styled-components';
import colors from 'styles/colors';
import { Text as TextDefault } from 'styles/shared';

export const Row = styled.div`
  display: flex;
`;

export const Body = styled.div`
  font-size: 1.8rem;
  color: ${colors.darkerGrey};

  & em {
    background-color: ${colors.codeGrey};
    padding: 0.5rem;
    font-family: monospace;
    font-style: normal;
  }
`;

export const Text = styled(TextDefault)<{ align?: string }>`
  margin-top: 1rem;
  text-align: ${(props) => props.align || 'left'};
`;

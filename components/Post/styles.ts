import { colors, styled } from 'styles';
import { Text as TextDefault } from 'styles/defaults';

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

export const Text = styled(TextDefault)`
  margin-top: 1em;
  text-align: right;
`;

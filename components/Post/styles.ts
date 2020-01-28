import { colors, styled } from 'styles';

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

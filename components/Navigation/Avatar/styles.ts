import { colors, styled } from 'styles';
import { Row as DefaultRow } from '../styles';

export const Row = styled(DefaultRow)`
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  flex: 1;
  border: 2px solid #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

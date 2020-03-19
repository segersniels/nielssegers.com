import { FontAwesomeIcon as DefaultIcon } from '@fortawesome/react-fontawesome';
import { breakpoints, colors, styled } from 'styles';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
`;

export const FontAwesomeIcon = styled(DefaultIcon)`
  margin-right: 1rem;
  color: ${colors.darkGrey};
  cursor: pointer;
  flex: 1;
`;

export const Icons = styled.div`
  width: 3rem;
  @media screen and (max-width: ${breakpoints.sm}) {
    margin-bottom: 1.5rem;
    margin-right: 1rem;
  }
`;

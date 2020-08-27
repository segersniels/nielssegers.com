import styled from 'styled-components';
import colors from 'styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid ${colors.lightGrey};

  img {
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;

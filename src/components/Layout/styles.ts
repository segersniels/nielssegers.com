import { breakpoints, styled } from 'styles';
import { desktopSize, mobileSize } from 'styles/defaults';

export const Container = styled.div`
  flex: 1;
  display: flex;
  width: ${desktopSize};
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: ${breakpoints.sm}) {
    width: ${mobileSize};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 5rem;
`;

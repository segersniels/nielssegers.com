import { colors, css, styled, theme } from 'styles';
import { desktopSize, Text as DefaultText } from 'styles/defaults';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  align-items: center;
`;

export const Item = styled.a<{ isActive?: boolean }>`
  text-decoration: none;

  margin-left: 2rem;
  align-self: flex-end;

  &:first-child div {
    display: none;
  }

  &:first-child {
    margin-left: 0;
  }

  ${({ isActive }) => {
    if (isActive) {
      return css`
        text-decoration: underline;
      `;
    }
    return css`
      &:hover {
        opacity: 0.75;
      }
    `;
  }}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  flex: 1;

  border: 2px solid #fff;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
`;

export const Line = styled.hr`
  height: 1px;
  background-color: ${colors.lightGrey};
  border: none;
  width: ${desktopSize};

  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Description = styled(DefaultText)``;

export const Job = styled.span`
  transform: skewX(-30deg);
  font-weight: ${theme.fonts.thinWeight};
`;

export const Links = styled(Row)`
  margin-top: 0.5rem;
`;

export const Text = styled(DefaultText)`
  color: ${colors.pink};
`;

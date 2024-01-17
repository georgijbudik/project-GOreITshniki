import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ChaptersWrapper = styled.ul`
  display: flex;
  padding-left: 0;
  gap: 28px;
  //   margin-top: 20px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
  @media screen and (min-width: 1440px) {
    justify-content: end;
  }
`;

export const DesktopWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const LinkStyled = styled(NavLink)`
  position: relative;
  display: block;
  color: rgba(239, 237, 232, 0.4);
  // color: var(--border-color);
  text-decoration: none;

  &.active {
    color: var(--main-text-color);

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      bottom: -8px;
      width: 100%;
      height: 4px;
      background-color: var(--accent-color);
      border-radius: 2px;
    }
  }
`;

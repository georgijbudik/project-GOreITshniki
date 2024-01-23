import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DesktopBackgroundContainer = styled.div`
  width: 670px;
  height: 902px;
  position: fixed;
  z-index: -1;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 1440px) {
    position: fixed;
    right: -163px;
    bottom: -156px;
    background-position: right bottom;
    background-size: contain;

    background-image: ${({ theme }) =>
      theme.palette.mode === 'dark' &&
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image.jpg'
      })`};
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: ${({ theme }) =>
      theme.palette.mode === 'dark' &&
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image@2x.jpg'
      })`};
  }
`;

export const WrapperExercises = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 48px;

  @media screen and (min-width: 768px) {
    height: 726px;
    margin-bottom: 66px;

    overflow-y: scroll;
    max-height: 1024px;
    &::-webkit-scrollbar {
      width: 8px;
      height: 2px;
      background: rgba(239, 237, 232, 0.1);
      border-radius: 12px;
    }
    &::-webkit-scrollbar-thumb {
      width: 8px;
      height: 153px;
      flex-shrink: 0;

      background: rgba(239, 137, 100, 1);
      border-radius: 12px;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 850px;
    height: 487px;
    margin-bottom: 81px;
  }
`;

export const NameExercises = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 116.667%;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 700;
    line-height: 137.5%;
  }
`;

export const ButtonGoBack = styled.button`
  z-index: 0;
  width: 65px;
  display: flex;
  align-items: center;
  background: none;
  border: 0;

  position: absolute;
  top: 10px;
  left: 0;

  transition: var(--transition);

  &:hover {
    & > a {
      color: ${({ theme }) => theme.palette.text.primary};
    }

    & > svg {
      stroke: ${({ theme }) => theme.palette.text.primary};
    }
  }

  @media screen and (min-width: 768px) {
    top: 32px;
  }
`;

export const LinkBtn = styled(Link)`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.7)'};
  padding-left: 8px;
  font-size: 14px;
  transition: var(--transition);
`;

export const IconWrapperBack = styled.svg`
  stroke: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.7)'};
  width: 13px;
  height: 13px;
  transform: rotate(180deg);

  transition: var(--transition);

  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

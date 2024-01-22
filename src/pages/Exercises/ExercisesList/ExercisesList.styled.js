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

    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image.jpg'
      })`};
  }

  @media screen and (min-width: 1440px) and (min-resolution: 2dppx) {
    background-image: ${() =>
      `url(${
        process.env.PUBLIC_URL + '/images/desktop/lg-welcome-image@2x.jpg'
      })`};
  }
`;

export const WrapperExercises = styled.ul`
  /* width: 335px; */
  /* max-height: 726px; */

  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 48px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    /* width: 710px; */
    height: 726px;
    padding-bottom: 66px;

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
    padding-bottom: 81px;
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
  z-index: 2;
  width: 65px;
  display: flex;
  align-items: center;
  background: none;
  border: 0;

  position: absolute;
  top: 10px;
  left: 0;

  @media screen and (min-width: 768px) {
    top: 32px;
  }
`;

export const LinkBtn = styled(Link)`
  color: rgba(239, 237, 232, 0.4);
  padding-left: 8px;
  font-size: 14px;
`;

export const IconWrapperBack = styled.svg`
  stroke: rgba(239, 237, 232, 0.4);
  width: 13px;
  height: 13px;
  transform: rotate(180deg);
  @media screen and (min-width: 1440px) {
    width: 16px;
    height: 16px;
  }
`;

export const WrapperNav = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    justify-content: space-between;
  }
`;

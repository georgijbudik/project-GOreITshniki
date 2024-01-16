import styled from 'styled-components';

export const Container = styled.div`
  background-color: #040404;
  min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
    padding-top: 72px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 435px;
    min-width: 435px;
    padding: 0 96px;
    padding-left: 49px;
    margin-block-start: 143px;
    border-left: 1px solid #efede833;
  }
`;

export const UserInfo = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 439px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 439px;
    margin: 0 auto;
  }
`;

export const ProfileSettings = styled.h3`
  margin-block-start: 0;
  margin-block-end: 45px;
  font-size: 24px;
  font-weight: 700;
  font-family: Roboto;
  color: var(--main-text-color);

  @media screen and (min-width: 1440px) {
    margin-block-end: 32px;
    margin-block-start: 72px;
    font-size: 32px;
  }
`;

export const UserAvatar = styled.svg`
  width: 50px;
  height: 50px;
  border: 1px solid var(--accent-color);
  border-radius: 50%;
  background-color: rgba(239, 237, 232, 0.1);
  padding: 20px;

  @media screen and (min-width: 1440px) {
    width: 102px;
    height: 102px;

    padding: 24px;
  }
`;

export const UserName = styled.p`
  margin-block-start: 31px;
  color: var(--main-text-color);
  margin-block-end: 4px;
  font-weight: 400;
  font-size: 18px;

  @media screen and (min-width: 768px) {
    margin-block-start: 32px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const UserRole = styled.p`
  margin-block-start: 0;
  color: var(--main-text-color);
  opacity: 0.5;
  font-weight: 400;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-block-start: 8px;
    margin-block-end: 32px;
  }
`;

export const DailyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
`;

export const DailyTitle = styled.p`
  margin-block-start: 0;
  font-size: 12px;
  color: var(--main-text-color);
  opacity: 0.8;
  display: flex;
  align-items: center;
`;

export const SvgDailyIcon = styled.svg`
  margin-block-start: 0;
  margin-right: 8px;
`;

export const DailyResult = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
  font-weight: 700;
  font-size: 18px;
  color: var(--main-text-color);

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

export const DailyCard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--accent-color);
  width: 157px;
  height: 96px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  padding: 14px;
  margin-block-end: 40px;

  @media screen and (min-width: 768px) {
    width: 214px;
  }

  @media screen and (min-width: 1440px) {
    width: 209px;
    height: 108px;
  }
`;

export const DisclaimerContainer = styled.div`
  color: #efede833;
  font-size: 13.5px;
  text-align: left;
  line-height: 1.3;
  display: flex;
  height: 73px;
  margin-block-end: 40px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SvgExclamationIcon = styled.svg`
  border-radius: 50%;
  padding: 5px;
  background-color: #efa082;
  margin-right: 8px;
  max-width: 35px;
  width: 35px;

  @media screen and (min-width: 768px) {
    max-width: 30px;
    width: 30px;
  }
`;

export const LogOutButton = styled.button`
  background: none;
  color: var(--main-text-color);
  border: none;
  padding: 0;
  font-size: 14px;
  line-height: 1.3;
  cursor: pointer;
  outline: inherit;
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SvgLogoutIcon = styled.svg`
  margin-left: 8px;
  stroke: var(--accent-color);
`;

export const AddAvatarButton = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  left: 50%;
  margin-left: -12px;
  top: 100%;
  margin-top: -18px;

  @media screen and (min-width: 1440px) {
    top: 100%;
    margin-left: -35px;
    margin-top: -75px;
  }
`;

export const AddProfilePicBackground = styled.svg`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;

export const AddProfilePicCross = styled.svg`
  transform: rotate(45deg);
  margin-block-start: 238%;
  margin-left: -356%;
  stroke: #efede8;

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;

    margin-block-start: 238%;
    margin-left: -356%;
  }
`;

export const ProfilePicContainer = styled.div`
  position: relative;
`;

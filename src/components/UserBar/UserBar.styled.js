import styled from 'styled-components';

export const StyledUserBar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    order: 2;
  }
`;

export const StyledUserBarSettingButton = styled.button`
  line-height: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;

  color: rgba(239, 237, 232, 0.3);
`;

export const StyledUserBarSettingsIcon = styled.svg`
  height: 26px;
  width: 26px;
  stroke: rgba(239, 237, 232, 0.3);
  transition: var(--transition);

  &:hover {
    stroke: var(--accent-color);
  }

  & > use {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const StyledUserBarAvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledUserBarAvatarBackgroundIcon = styled.svg`
  width: 37px;
  height: 37px;
  fill: rgba(48, 48, 48, 0.3);
  stroke-width: 1px;
  stroke: var(--accent-color);

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const StyledUserBarAvatarIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 21px;
  height: 21px;
  fill: rgba(239, 237, 232, 0.1);

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

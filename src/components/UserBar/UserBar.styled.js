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

  &:hover,
  &:focus {
    & > svg {
      stroke: var(--accent-color);
    }
  }
`;

export const StyledUserBarSettingsIcon = styled.svg`
  height: 26px;
  width: 26px;
  stroke: ${({ theme }) => {
    return theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.3)'
      : 'rgba(39, 37, 32, 0.6)';
  }};
  transition: var(--transition);

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
  line-height: 0;
`;

export const StyledUserBarAvatarBackgroundIcon = styled.svg`
  width: 37px;
  height: 37px;

  stroke-width: 1px;
  stroke: var(--accent-color);

  fill: ${({ theme }) => {
    return theme.palette.mode === 'dark'
      ? 'rgba(48, 48, 48, 0.3)'
      : 'rgba(39, 37, 32, 0.2)';
  }};

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const StyledUserBarAvatarIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 21px;
  height: 21px;

  fill: ${({ theme }) => {
    return theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.1)'
      : 'rgba(39, 37, 32, 0.4)';
  }};

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const StyledUserBarLogOutBtnWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

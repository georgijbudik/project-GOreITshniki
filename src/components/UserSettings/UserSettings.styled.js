import styled from 'styled-components';

export const StyledUserSettingsAvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  line-height: 0;
  cursor: pointer;
`;

export const StyledUserSettingsRealAvatarWrapper = styled.div`
  border-radius: 50%;
  width: 37px;
  height: 37px;
  overflow: hidden;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    width: 46px;
    height: 46px;
  }
`;

export const StyledUserSettingsAvatarBackgroundIcon = styled.svg`
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

export const StyledUserSettingsAvatarIcon = styled.svg`
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

export const StyledUserSettingsAvatarButton = styled.button`
  padding: 0;
  line-height: 0;
  border: none;
  background-color: transparent;
`;

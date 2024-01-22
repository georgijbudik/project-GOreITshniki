import styled from 'styled-components';
import Button from 'components/Button/Button';

export const Container = styled.div`
  .profile-desktop-visible {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    max-width: 760px;
    min-width: 760px;
    padding-right: 64px;
    .profile-desktop-visible {
      display: block;
    }
  }
`;

export const FieldName = styled.p`
  margin-block-start: 0;
  margin-block-end: 4px;
  /* color: var(--main-text-color); */
  opacity: 0.5;
  font-weight: 400;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
  margin-block-end: 14px;

  svg {
    position: absolute;
    top: 38px;
    left: 135.25px;
    @media screen and (min-width: 768px) {
      top: 50px;
      left: 157.25px;
    }

    @media screen and (min-width: 1440px) {
      top: 50px;
      left: 157.25px;
    }
  }
`;

export const MainInput = styled.input`
  all: unset;
  border: ${({ theme }) => {
    return theme.palette.mode === 'dark'
      ? '1px solid var(--border-color)'
      : '1px solid rgba(100, 100, 100, 0.2)';
  }};
  /* color: var(--main-text-color); */
  font-size: 14px;
  border-radius: 12px;
  box-sizing: border-box;
  padding: 14px;
  width: 335px;

  @media screen and (min-width: 768px) {
    width: 346px;
    margin-block-start: 8px;
  }

  @media screen and (min-width: 1440px) {
    width: 341px;
  }
`;

export const SecondaryInput = styled.input`
  all: unset;
  /* border: 1px solid var(--border-color); */
  border: ${({ theme }) => {
    return theme.palette.mode === 'dark'
      ? '1px solid var(--border-color)'
      : '1px solid rgba(100, 100, 100, 0.2)';
  }};
  /* color: var(--main-text-color); */
  box-sizing: border-box;
  font-size: 14px;
  border-radius: 12px;
  padding: 14px;
  width: 160px;

  @media screen and (min-width: 768px) {
    width: 164px;
    margin-block-start: 8px;
    &.desired-weight {
      width: 140px;
    }
  }

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const SecondaryInputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-block-end: 16px;
  }
`;

export const BloodSexContainer = styled.label`
  display: flex;
  margin-block-end: 32px;
`;

export const SexContainer = styled.label`
  display: flex;
`;

export const BloodContainer = styled.div`
  display: flex;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }
`;

// export const BloodSexContainerLabel = styled.label`
//   color: var(--main-text-color);
//   font-size: 14px;

//   @media screen and (min-width: 768px) {
//     font-size: 16px;
//   }
// `;

export const RadioContainer = styled.label`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-block-end: 8px;

  label {
    /* color: var(--main-text-color); */
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
  input {
    appearance: none;
    width: 14px;
    min-width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 1.5px #636366 solid;
    margin-right: 9px;
    cursor: pointer;
    &:checked {
      border-color: var(--icon-color);
      background-color: var(--icon-color);
      box-shadow: 0px 0px 0px 2px black inset;
    }
    &:active {
      border-color: orange;
    }

    @media screen and (min-width: 768px) {
      width: 24px;
      min-width: 24px;
      height: 24px;

      border: 2.5px #636366 solid;
    }
  }

  @media screen and (min-width: 768px) {
    margin-block-end: 12px;
  }
`;

export const ActivityContainer = styled.label`
  display: block;
  margin-right: 8px;
  margin-block-end: 40px;

  @media screen and (min-width: 1440px) {
    margin-block-end: 48px;
  }
`;

export const NameEmailInput = styled.div`
  @media screen and (min-width: 768px) {
    margin-block-end: 8px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const SaveButton = styled(Button)`
  box-sizing: border-box;
  width: 115px;
  height: 42px;
  @media screen and (min-width: 768px) {
    width: 144px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 144px;
    height: 56px;
  }
`;

export const StyledCalendarIcon = styled.svg`
  width: 15px;
  height: 15px;
  fill: ${({ theme }) => {
    return theme.palette.text.primary;
  }};

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

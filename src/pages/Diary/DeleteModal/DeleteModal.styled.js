import styled from 'styled-components';
import { StyledButton } from 'components/Button/Button.styled';

export const StyledDeleteModalWrapper = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    padding: 40px;

    gap: 50px;
  }
`;

export const StyledDeleteModalTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 133.333%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const StyledDeleteModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledDeleteModalButton = styled(StyledButton)`
  padding: 12px 32px;

  font-size: 16px;
  font-weight: 500;
  line-height: 112.5%;

  @media screen and (min-width: 768px) {
    padding: 14px 32px;

    line-height: 150%;
  }
`;

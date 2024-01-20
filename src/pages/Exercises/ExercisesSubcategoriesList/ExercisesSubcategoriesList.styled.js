import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 40px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px 16px;
    margin-top: 70px;
  }
  @media screen and (min-width: 1440px) {
    width: 1300px;
  }
`;

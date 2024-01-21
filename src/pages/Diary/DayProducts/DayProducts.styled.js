import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 335px;
  height: 335px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  margin-top: 40px;
  padding: 16px;
  color: white;
`;

export const CellProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  & div {
    display: flex;
    align-items: center;
    & button {
      width: 77px;
      height: 18px;

      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      background-color: transparent;
      border: 0;
      padding: 0;

      color: #e6533c;
    }
    & svg {
      width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
`;

export const NotFoundMessage = styled.div`
  margin-top: 145px;
  justify-content: center;
  text-align: center;
`;

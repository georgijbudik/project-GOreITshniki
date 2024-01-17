import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 303px;
  height: 303px;

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
    align-items: baseline;
    & a {
      text-decoration: none;
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

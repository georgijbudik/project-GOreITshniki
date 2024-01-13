import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 14px;
  min-width: 240px;
  box-sizing: border-box;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  outline: none;
`;

export const SearchBtn = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  min-width: 26px;
  min-height: 46px;
  border: none;
  background-color: transparent;
`;

export const SearchContainer = styled.div`
  padding-right: 6px;
  min-width: 300px;
  min-height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
border: 1px solid var(--border-color);
`;

export const SearchBtns = styled.div`
  display: flex;
`;

export const SelectContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
`;

export const CategorySelect = styled.select`
  padding: 14px;
 width: 146px;
  min-height: 46px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  outline: none;
`;

export const RecommendSelect = styled.select`
  padding: 14px;
 width: 173px;
  min-height: 46px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  outline: none;
`;

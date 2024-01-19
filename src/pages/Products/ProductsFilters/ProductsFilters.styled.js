import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    display: flex;
    gap: 16px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
  }
`;

export const StyledTextFilters = styled.p`
  display: none;
  height: 18px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: 1.3;

  @media screen and (min-width: 1440px) {
    display: flex;
    position: relative;
    top: -26px;
    right: -680px;
  }
`;

export const StyledSearchContainer = styled.div`
  box-sizing: border-box;
  padding-right: 6px;
  min-width: 280px;
  height: 46px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--border-color);

  @media screen and (min-width: 375px) {
    width: 335px;
  }

  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 236px;
    height: 52px;
  }
`;

export const StyledSearchInput = styled.input`
  box-sizing: border-box;
  padding: 14px;
  min-width: 240px;
  height: 46px;
  border: none;
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  outline: none;

  @media screen and (min-width: 768px) {
    min-width: 0;
    width: 164px;
    height: 52px;
  }
`;

export const StyledSearchBtn = styled.button`
  margin: 0;
  padding: 0;
  width: 26px;
  height: 46px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;

export const StyledBtnsContainer = styled.div`
  display: flex;
`;

export const StyledSelectContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    gap: 16px;
  }
`;

export const StyledCategorySelect = styled.select`
  padding: 14px;
  width: 150px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 375px) {
    width: 146px;
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 52px;
  }
`;

export const StyledRecommendSelect = styled.select`
  padding: 14px;
  width: 130px;
  height: 46px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--main-text-color);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  outline: none;

  @media screen and (min-width: 375px) {
    width: 173px;
  }

  @media screen and (min-width: 768px) {
    width: 204px;
    height: 52px;
  }
`;

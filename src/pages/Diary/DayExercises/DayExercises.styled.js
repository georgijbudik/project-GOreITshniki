import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 335px;
  height: 335px;
  overflow-y: auto;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  background: rgba(239, 237, 232, 0.05);
  margin-top: 40px;
  padding: 16px;
  color: var(--main-text-color);
  height: ${props => (props.noExercises ? '824px' : '335px')};
  &::-webkit-scrollbar {
    width: 6px;
    height: 203px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.1);
    border-radius: 4px;
  }

  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-top: 32px;
    /* height: 234px; */
    height: ${props => (props.noExercises ? '234px' : '234px')};

    overflow-y: auto; /* був unset  */

    position: relative;
    width: 100%;
  }
`;

export const TableHeaderTablet = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const CellExercisesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto; /* Add this line to enable horizontal scrolling */

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(239, 237, 232, 0.2);
    border-radius: 4px;
  }

  & div {
    display: flex;
    align-items: center;
    & button {
      max-width: 81px;
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

      color: var(--accent-color);
    }
    & svg {
      max-width: 16px;
      height: 16px;
      margin-left: 8px;
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
    overflow-x: unset;
    /* height: 234px; */
    /* Add additional styles for larger screens */
    &::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(239, 237, 232, 0.3);
      border-radius: 6px;
    }
  }
`;

export const NotFoundMessage = styled.div`
  margin-top: 145px;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 768px) {
    position: absolute;
    margin-top: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const WrapElem = styled.div`
  @media screen and (min-width: 768px) {
    text-align: unset;
  }
`;

// додано

export const ProdWrap = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const TopProdBlock = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  /* & p {
    max-width: 297px;
    height: 38px;

    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    display: block;
    padding: 10px 14px;
    /* gap: 10px; */
  /* } */
`;

export const BottomProdBlock = styled.div`
  display: Flex;
  & p {
    max-width: 80px;
    height: 38px;
    padding: 10px, 42px, 10px, 14px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    /* gap: 10px; */
  }
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 20px;
    height: 20px;
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  & svg {
    max-width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    & p {
      max-width: none;
    }
  }
`;

export const TitleText = styled.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  text-align: left;
  color: var(--icon-color);
  padding-bottom: 8px;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TitleTextTablet = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: var(--icon-color);
    padding-bottom: 8px;
    padding-top: 16px;
  }
`;

export const MainText = styled.div`
  /* display: flex; */
  align-items: center;
  max-width: 297px;
  height: 38px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 7px 14px;
  color: rgba(239, 237, 232, 1);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MainTextTablet = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    align-items: center;
    max-width: 90px;
    height: 40px;
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 7px 14px;
    color: rgba(239, 237, 232, 1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 204px;
    height: 40px;
  }
`;

export const MainTextTablett = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    align-items: center;
    /* max-width: 130px;
    height: 40px; */
    border-radius: 12px;
    border: 1px solid rgba(239, 237, 232, 0.3);
    padding: 7px 14px;
    color: rgba(239, 237, 232, 1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 130px;
    height: 40px;
    margin-left: 8px;
  }
`;

export const MainTextBottom = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
  height: 38px;
  padding: 10px, 42px, 10px, 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 10px 14px;
  margin-right: 16px;
  color: rgba(239, 237, 232, 1);

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 84px;
    height: 40px;
    margin: 0 0 0 8px;
    padding: 14px;
  }
`;

export const MainTextBottom1 = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
  height: 38px;
  padding: 10px, 42px, 10px, 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 10px 14px;
  margin-right: 16px;
  color: rgba(239, 237, 232, 1);

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 78px;
    height: 40px;
    margin: 0 0 0 8px;
    padding: 14px;
  }
`;
export const MainTextBottom2 = styled.div`
  display: flex;
  align-items: center;
  max-width: 80px;
  height: 38px;
  padding: 10px, 42px, 10px, 14px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  padding: 10px 14px;
  margin-right: 16px;
  color: rgba(239, 237, 232, 1);

  @media screen and (min-width: 768px) {
    max-width: none;
    width: 72px;
    height: 40px;
    margin: 0 0 0 8px;
    padding: 14px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 10px;
  margin-left: -8px;
  @media screen and (min-width: 768px) {
    margin-left: 12px;
  }
`;

export const LiWrap = styled.li`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    display: flex;
  }
`;

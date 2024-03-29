import styled from 'styled-components';

export const Wrapper = styled.div`
  box-sizing: border-box;
  max-width: 335px;
  height: 335px;
  overflow-y: auto;

  border-radius: 12px;
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.2)'
      : '1px solid rgba(100, 100, 100, 0.7)'};
  background: rgba(239, 237, 232, 0.05);
  margin-top: 40px;
  padding: 16px;
  /* color: var(--main-text-color); */
  color: ${({ theme }) => theme.palette.text.primary};
  height: ${props => (props.$noexercises ? '824px' : '335px')};
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin-top: 0;
    /* height: 234px; */
    height: ${props => (props.$noexercises ? '234px' : '234px')};

    overflow-y: auto; /* був unset  */

    position: relative;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
    max-width: none;
    width: 824px;
  }
`;
export const TableHeaderTablet = styled.ul`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const CellProductsHeader = styled.div`
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
    cursor: pointer;

    &:hover,
    &:focus {
      & > button {
        color: var(--icon-color);
      }
      & > svg {
        fill: var(--icon-color);
      }
    }

    & button {
      max-width: 77px;
      height: 18px;

      font-family: Roboto;
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
      text-align: left;
      background-color: transparent;
      border: 0;
      padding: 0;

      color: var(--accent-color);
      transition: var(--transition);
    }
    & svg {
      max-width: 16px;
      height: 16px;
      margin-left: 8px;
      fill: var(--accent-color);
      transition: var(--transition);
    }
  }
  @media screen and (min-width: 768px) {
    max-width: 704px;
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
  @media screen and (min-width: 768px) {
    max-width: none;
  }
`;

export const CardTitle = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.5)'
      : 'rgba(100, 100, 100, 0.7)'};

  font-size: 14px;
  line-height: 128.571%;
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
    gap: 10px;
  } */
`;

export const BottomProdBlock = styled.div`
  display: Flex;

  :nth-child(1) > div {
    &:nth-child(2) {
      width: 81px;
    }
  }

  :nth-child(2) > div {
    &:nth-child(2) {
      width: 80px;
    }
  }

  :nth-child(3) > div {
    &:nth-child(2) {
      width: 76px;
    }
  }

  & p {
    max-width: 80px;
    height: 38px;
    padding: 10px, 42px, 10px, 14px;
    border-radius: 12px;
    border: ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? '1px solid rgba(239, 237, 232, 0.3)'
        : '1px solid rgba(100, 100, 100, 0.7)'};
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
    fill: var(--icon-color);
    max-width: 20px;
    height: 20px;
    transition: var(--transition);

    &:hover {
      fill: var(--accent-color);
    }
  }

  @media screen and (min-width: 768px) {
    height: 40px;
    :nth-child(1) > div {
      &:nth-child(2) {
        width: 90px;
      }
    }

    :nth-child(2) > div {
      &:nth-child(2) {
        width: 90px;
      }
    }

    :nth-child(3) > div {
      &:nth-child(2) {
        width: 80px;
      }
    }
  }
  @media screen and (min-width: 1440px) {
    height: 40px;
    :nth-child(1) > div {
      &:nth-child(2) {
        width: 105px;
      }
    }

    :nth-child(2) > div {
      &:nth-child(2) {
        width: 105px;
      }
    }

    :nth-child(3) > div {
      &:nth-child(2) {
        width: 110px;
      }
    }
  }
`;

export const TitleText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: left;
  color: var(--icon-color);
  padding-bottom: 8px;
  padding-top: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TitleTextTablet1 = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 12px;
    line-height: 150%;
    text-align: left;
    color: var(--icon-color);
    padding-top: 18px;
    margin-right: 188px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 196px;
  }
`;
export const TitleTextTablet2 = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    color: var(--icon-color);
    padding-bottom: 8px;
    padding-top: 16px;
    margin-right: 87px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 125px;
  }
`;
export const TitleTextTablet3 = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-family: Roboto;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    color: var(--icon-color);
    padding-bottom: 8px;
    padding-top: 16px;
    margin-right: 54px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 69px;
  }
`;
export const TitleTextTablet4 = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    color: var(--icon-color);
    padding-bottom: 8px;
    padding-top: 16px;
    margin-right: 60px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 75px;
  }
`;
export const TitleTextTablet5 = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    color: var(--icon-color);
    padding-bottom: 8px;
    padding-top: 16px;
    width: 212px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const MainText = styled.div`
  /* display: flex; */
  max-width: 297px;
  border-radius: 12px;
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.3)'
      : '1px solid rgba(100, 100, 100, 0.7)'};
  padding: 10px 14px;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 14px;
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
    width: 204px;
    height: 40px;
    border-radius: 12px;
    border: ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? '1px solid rgba(239, 237, 232, 0.3)'
        : '1px solid rgba(100, 100, 100, 0.7)'};
    padding: 7px 14px;
    color: ${({ theme }) => theme.palette.text.primary};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    width: 204px;
    height: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 212px;
  }
`;

export const MainTextTablett = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    align-items: center;
    width: 128px;
    height: 40px;
    border-radius: 12px;
    border: ${({ theme }) =>
      theme.palette.mode === 'dark'
        ? '1px solid rgba(239, 237, 232, 0.3)'
        : '1px solid rgba(100, 100, 100, 0.7)'};
    padding: 7px 14px;
    color: ${({ theme }) => theme.palette.text.primary};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 40px;
    margin-left: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 166px;
  }
`;

export const MainTextBottom = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 128.571%;
  width: 80px;
  height: 38px;
  padding: 10px 42px 10px 14px;
  border-radius: 12px;
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.3)'
      : '1px solid rgba(100, 100, 100, 0.7)'};
  padding: 10px 14px;
  margin-right: 16px;
  color: ${({ theme }) => theme.palette.text.primary};

  @media screen and (min-width: 768px) {
    /* display: none; */
    width: 90px;
    height: 40px;
    margin: 0;
    margin-left: 8px;
  }
  @media screen and (min-width: 1440px) {
    width: 105px;
  }
`;

export const RecommemdedTextBottom = styled(MainTextBottom)`
  &::before {
    content: '';
    width: 14px;
    height: 14px;
    top: 50%;
    background-color: ${({ $recommended }) =>
      $recommended === 'No' ? 'red' : 'green'};
    border-radius: 50%;
    margin-right: 8px;
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
  }
`;

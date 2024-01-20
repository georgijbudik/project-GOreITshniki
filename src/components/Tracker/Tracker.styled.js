import styled from 'styled-components';

export const TrackerVideoPlayEl = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ef8964;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TrackerVideoIcon = styled.svg`
  padding-left: 2px;
`;

export const TrackerVideoStyled = styled.div`
  color: #efede8;
`;

export const TrackerVideoContainer = styled.div`
  position: absolute;
  top: 433px;
  left: 101px;
  width: 146px;
  height: 66px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #303030;
  justify-content: center;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    top: 525px;
    left: 299px;
    width: 206px;
    height: 96px;

    @media screen and (min-width: 1440px) {
      top: 150px;
      left: 674px;
    }
  }
`;
export const TrackerVideoText = styled.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: 16px;
`;
export const TrackerVideoTextContainer = styled.div`
  padding-left: 8px;
`;

export const TrackerCaloriesStyled = styled.div`
  color: #efede8;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
  letter-spacing: -1px;
  text-transform: uppercase;
  padding-top: 4px;
`;
export const TrackerCaloriesContainer = styled.div`
  position: absolute;
  top: 569px;
  left: 216px;
  width: 119px;
  height: 76px;
  border-radius: 12px;
  background: #ef8964;
  padding-top: 14px;
  padding-left: 14px;

  @media screen and (min-width: 768px) {
    top: 677px;
    left: 524px;
    width: 180px;
    height: 110px;
  }

  @media screen and (min-width: 1440px) {
    top: 290px;
    left: 1132px;
  }
`;
export const TrackerCaloriesIconEl = styled.div`
  background-color: #efa082;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
`;
export const TrackerCaloriesIcon = styled.svg`
  fill: #efede8;
`;

export const TrackerCaloriesText = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0;
  text-transform: none;
  padding-left: 8px;
`;
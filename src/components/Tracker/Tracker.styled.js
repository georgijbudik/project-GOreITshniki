import styled from 'styled-components';

export const TrackerVideoContainer = styled.div`
  position: absolute;
  width: auto;
  top: 433px;
  left: 101px;

  border-radius: 12px;
  background-color: #303030;

  display: flex;
  align-items: center;
  gap: 8px;

  padding: 14px 18px;

  @media screen and (min-width: 768px) {
    top: 525px;
    left: 299px;

    gap: 12px;
    padding: 20px 36px;
  }

  @media screen and (min-width: 1440px) {
    top: 150px;
    left: 694px;

    width: max-content;
  }
`;

export const TrackerVideoPlayEl = styled.div`
  flex-grow: 1;

  width: 30px;
  height: 30px;
  background-color: #ef8964;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TrackerVideoIcon = styled.svg`
  height: 12px;
  width: 12px;
  fill: #efede8;

  @media screen and (min-width: 768px) {
    height: 20px;
    width: 20px;
  }
`;

export const TrackerVideoStyled = styled.span`
  color: var(--main-text-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 112.5%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 100%;
  }
`;

export const TrackerVideoText = styled.p`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  line-height: 133.333%;

  margin-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 150%;

    margin-top: 8px;
  }
`;

export const TrackerVideoTextContainer = styled.div`
  /* padding-left: 8px; */
`;

export const TrackerCaloriesContainer = styled.div`
  position: absolute;
  top: 569px;
  left: 166px;

  border-radius: 12px;
  background: #ef8964;
  padding: 14px 28px;

  @media screen and (min-width: 768px) {
    top: 677px;
    left: 524px;
  }

  @media screen and (min-width: 1440px) {
    top: 290px;
    left: 1132px;
  }
`;

export const TrackerCaloriesStyled = styled.p`
  color: var(--main-text-color);
  font-size: 24px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -1px;
  text-transform: uppercase;
  padding-top: 4px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 104.167%;
    padding-top: 8px;
  }
`;

export const TrackerCaloriesText = styled.span`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: 133.333%;
  padding-left: 8px;
  text-transform: none;

  @media screen and (min-width: 768px) {
    color: rgba(239, 237, 232, 0.65);
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    padding-left: 11px;
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

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const TrackerCaloriesIcon = styled.svg`
  fill: #efede8;
  width: 12px;
  height: 12px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

import styled from 'styled-components';

export const WrapperExercisesItem = styled.li`
  padding: 16px;
  width: 335px;
  max-height: 163px;

  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid rgba(239, 237, 232, 0.2)'
      : '1px solid rgba(100, 100, 100, 0.2)'};
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 405px;
  }
`;

export const HeaderIndexes = styled.div`
  display: flex;
  gap: 175px;
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    gap: 240px;
    margin-bottom: 25px;
  }
`;

export const ExercisesTitle = styled.p`
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 5px 7.5px;
  border-radius: 4px;
  background: rgba(239, 237, 232, 0.05);
`;

export const WrapperStart = styled.button`
  background: none;
  border: 0px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TextStart = styled.p`
  color: var(--accent-color);

  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`;
export const IconWrapperStart = styled.svg`
  width: 13px;
  height: 13px;
  stroke: var(--accent-color);
`;

export const NameExes = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;

  display: ${props => props.display || 'inline-block'};
  width: ${props => props.width || '263px'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    width: ${props => props.width || '340px'};
    font-size: 24px;
    line-height: 1.3;
  }
`;

export const WrapperNameExes = styled.div`
  display: flex;
  gap: 16px;
`;

export const WrapperIcon = styled.div`
  width: 24px;
  height: 24px;
  background: rgba(239, 160, 130, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.palette.text.primary};
`;
export const WrapperIndexes = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
`;

export const Indexes = styled.div`
  display: flex;
  gap: 4px;
  margin-right: 16px;
`;

export const IndexesText = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.4)'};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
`;

export const IndexesValue = styled.p`
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 1)'
      : 'rgba(100, 100, 100, 1)'};
  font-size: 12px;
  font-weight: 400;
`;

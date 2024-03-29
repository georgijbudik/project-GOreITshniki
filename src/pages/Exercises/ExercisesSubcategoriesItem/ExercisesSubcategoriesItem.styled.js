import styled from 'styled-components';

export const ContHover = styled.div`
  position: relative;
  width: 335px;
  height: 206px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`;

export const Img = styled.img`
  width: 335px;
  height: 206px;
  opacity: ${({ theme }) => (theme.palette.mode === 'dark' ? '0.3' : '0.7')};
  border-radius: 12px;
  object-fit: cover;
  transition: var(--transition);
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
  }
`;
export const ContainerItem = styled.div`
  &:hover ${Img} {
    opacity: 0.5;
  }
`;
export const TextItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
`;

export const NameImg = styled.p`
  margin-bottom: 2px;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  color: rgba(239, 237, 232, 1);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const NameCategory = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  color: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? 'rgba(239, 237, 232, 0.4)'
      : 'rgba(100, 100, 100, 0.9)'};
  text-align: center;
`;

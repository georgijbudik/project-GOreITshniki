import styled from 'styled-components';

export const WrapperPaginate = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding-top: 40px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-top: 35px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 32px;
    padding-bottom: 46px;
  }
`;

export const SpanPagination = styled.a`
  cursor: pointer;
  width: 12px;
  height: 12px;

  background: rgba(239, 237, 232, 0.1);
  border: ${props =>
    props.isactive ? '1px solid rgba(230, 83, 60, 1)' : '1px solid grey'};

  border-radius: 50%;
  display: flex;
  position: relative;
  transition: var(--transition);

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    background: ${props =>
      props.isactive ? '#E6533C' : '1px solid rgba(230, 83, 60, 1)'};

    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;

    transition: var(--transition);
  }

  &:hover {
    border: 1px solid rgba(230, 83, 60, 1);
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      background: rgba(230, 83, 60, 1);
      position: absolute;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 1;
      transition: opacity 0.2s;
    }
  }
`;

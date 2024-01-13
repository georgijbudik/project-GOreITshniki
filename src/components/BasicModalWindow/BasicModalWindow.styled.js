import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(4, 4, 4, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: #10100f;
  color: var(--main-text-color);
  position: relative;
`;

export const StyledModalCloseButton = styled.button`
  padding: 0;
  line-height: 0;
  background-color: transparent;
  cursor: pointer;
  border: none;

  position: absolute;
  top: 14px;
  right: 14px;

  stroke: var(--main-text-color);

  transition: var(--transition);

  &:hover {
    stroke: var(--accent-color);
    transform: rotate(90deg);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export const StyledModalContent = styled.div``;

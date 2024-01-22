import styled from 'styled-components';

export const StyledModalOverlay = styled.div`
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
  border: ${({ theme }) =>
    theme.palette.mode === 'dark'
      ? '1px solid var(--border-color)'
      : '1px solid rgba(100, 100, 100, 0.7)'};

  background: ${({ theme }) =>
    theme.palette.mode === 'dark' ? '#10100f' : '#EFEFEF'};

  position: relative;
  max-height: 90vh;
  overflow-y: auto;

  @media screen and (min-width: 1440px) {
    max-height: 80vh;
  }
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

  stroke: ${({ theme }) => theme.palette.text.primary};

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

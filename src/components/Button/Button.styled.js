import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.palette.text.primary};
  transition: var(--transition);

  padding: ${({ $paddingY, $paddingX }) => `${$paddingY}px ${$paddingX}px`};

  border-radius: 12px;
  border: none;
  background-color: ${({ $secondary }) =>
    $secondary ? 'transparent' : 'var(--accent-color)'};

  border: ${({ $secondary, theme }) => {
    if ($secondary) {
      return `1px solid ${theme.palette.border.primary}`;
    } else {
      return '1px solid var(--accent-color)';
    }
  }};

  font-size: 16px;
  font-weight: 500;
  line-height: 120%;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${({ $secondary }) =>
      $secondary ? 'transparent' : 'var(--icon-color)'};

    border: ${({ $secondary }) =>
      $secondary
        ? `1px solid var(--accent-color)`
        : '1px solid var(--icon-color)'};
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);

    &:hover,
    &:focus {
      background-color: ${({ $secondary }) =>
        $secondary ? 'transparent' : 'var(--accent-color)'};

      border: ${({ $secondary }) =>
        $secondary
          ? '1px solid rgba(239, 237, 232, 0.30);'
          : '1px solid var(--accent-color)'};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;

    padding: ${({ $paddingY, $paddingX }) =>
      `${$paddingY * (4 / 3)}px ${$paddingX * (3 / 2)}px`};
  }
`;

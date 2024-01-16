import { StyledButton } from './Button.styled';

const Button = ({
  children,
  onClick,
  secondary,
  disabled,
  border = false,
  paddingY = 12,
  paddingX = 40,
  fontSize = 16,
}) => {
  const handleClick = () => {
    document.activeElement.blur();
    onClick?.();
  };

  return (
    <StyledButton
      $brdclr={border}
      $secondary={secondary}
      $disabled={disabled}
      $paddingY={paddingY}
      $paddingX={paddingX}
      $fontSize={fontSize}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

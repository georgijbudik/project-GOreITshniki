import { StyledAuthButton } from './SignUpForm/SignUpForm.styled';

const AuthButton = ({
  children,
  onClick,
  secondary,
  disabled,
  paddingY = 12,
  paddingX = 40,
  fontSize = 16,
}) => {
  const handleClick = () => {
    document.activeElement.blur();
    onClick?.();
  };

  return (
    <StyledAuthButton
      $secondary={secondary}
      $disabled={disabled}
      $paddingY={paddingY}
      $paddingX={paddingX}
      $fontSize={fontSize}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </StyledAuthButton>
  );
};

export default AuthButton;

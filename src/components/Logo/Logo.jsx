import { StyledLogo, StyledLogoText, StyledLogoIcon } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo>
      <StyledLogoIcon>
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-logo'
          }
        />
      </StyledLogoIcon>
      <StyledLogoText>
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-logo-text'
          }
        />
      </StyledLogoText>
    </StyledLogo>
  );
};

export default Logo;

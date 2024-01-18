import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';

import { StyledLogo, StyledLogoText, StyledLogoIcon } from './Logo.styled';

const Logo = ({ filled }) => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <StyledLogo
      onClick={() => {
        navigate('/');
      }}
    >
      {isMobile ? (
        <>
          <StyledLogoIcon $filled={filled} width={36} height={13}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-logo-sm'
              }
            />
          </StyledLogoIcon>
          <StyledLogoText height={12} width={82}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-logo-text-sm'
              }
            />
          </StyledLogoText>
        </>
      ) : (
        <>
          <StyledLogoIcon width={44} height={17} $filled={filled}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-logo-lg'
              }
            />
          </StyledLogoIcon>
          <StyledLogoText width={99.527} height={15.26}>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-logo-text-lg'
              }
            />
          </StyledLogoText>
        </>
      )}
    </StyledLogo>
  );
};

export default Logo;

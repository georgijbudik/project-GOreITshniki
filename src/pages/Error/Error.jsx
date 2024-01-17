import React from 'react';
import WelcomeImage from './components/WelcomeImage';

import { StyledErrorPageWrapper } from './ErrorPage.styled';
import Sidenav from '../../pages/Error/components/Sidenav';

const Error = () => {
  return (
    <StyledErrorPageWrapper>
      <Sidenav />
      <WelcomeImage />
    </StyledErrorPageWrapper>
  );
};

export default Error;

import React from 'react';
import WelcomeImage from './components/WelcomeImage';

import Sidenav from './components/Sidenav';

import { StyledErrorPageWrapper } from './ErrorPage.styled';

const Error = () => {
  return (
    <StyledErrorPageWrapper>
      <Sidenav />
      <WelcomeImage />
    </StyledErrorPageWrapper>
  );
};

export default Error;

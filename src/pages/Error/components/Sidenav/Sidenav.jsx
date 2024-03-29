import { useNavigate } from 'react-router-dom';

import ErrorInfo from '../ErrorInfo';

import Logo from 'components/Logo';
import Button from 'components/Button';

import { StyledSidenavWrapper, StyledSidenavContent } from './Sidenav.styled';

const Sidenav = () => {
  const navigate = useNavigate();

  return (
    <StyledSidenavWrapper>
      <Logo />

      <StyledSidenavContent>
        <div style={{ paddingBottom: '28px' }}>
          <ErrorInfo />
        </div>
        <Button
          onClick={() => {
            navigate('/');
          }}
          secondary
          paddingY={12}
          paddingX={40}
        >
          Go Home
        </Button>
      </StyledSidenavContent>
    </StyledSidenavWrapper>
  );
};

export default Sidenav;

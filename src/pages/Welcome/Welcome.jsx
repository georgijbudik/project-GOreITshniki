import { HeroText, WelcomePageContainer, ButtonContainer } from './index';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <WelcomePageContainer>
      <HeroText>Transforming your body shape with Power Pulse</HeroText>
      <ButtonContainer>
        <Button onClick={() => navigate('/signup')}>Sign Up</Button>
        <Button secondary="black" onClick={() => navigate('/signin')}>
          Sign In
        </Button>
      </ButtonContainer>
    </WelcomePageContainer>
  );
};

export default Welcome;

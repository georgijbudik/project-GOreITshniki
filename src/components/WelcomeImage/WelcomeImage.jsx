import {
  StyledWelcomeImageWrapper,
  StyledWelcomeImage,
} from './WelcomeImage.styled';

const WelcomeImage = () => {
  return (
    <StyledWelcomeImageWrapper>
      <StyledWelcomeImage
        src={process.env.PUBLIC_URL + '/images/welcome-image.png'}
        alt="Woman doing squats"
      />
    </StyledWelcomeImageWrapper>
  );
};

export default WelcomeImage;

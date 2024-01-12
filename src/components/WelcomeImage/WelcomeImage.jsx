import { StyledWelcomeImagePicture } from './WelcomeImage.styled';

const WelcomeImage = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <StyledWelcomeImagePicture>
      {/* Mobile */}
      <source
        media="(max-width: 767px)"
        srcSet={`${publicUrl}/images/mobile/sm-welcome-image.png, ${publicUrl}/images/mobile/sm-welcome-image@2x.png 2x`}
      />
      {/* Tablet */}
      <source
        media="(min-width: 768px) and (max-width: 1439px)"
        srcSet={`${publicUrl}/images/tablet/md-welcome-image.png, ${publicUrl}/images/tablet/md-welcome-image@2x.png 2x`}
      />
      {/* Desktop */}
      <source
        media="(min-width: 1440px)"
        srcSet={`${publicUrl}/images/desktop/lg-welcome-image.png, ${publicUrl}/images/desktop/lg-welcome-image@2x.png 2x`}
      />
      {/* Default for all devices */}
      <img
        src={`${publicUrl}/images/desktop/lg-welcome-image.png`}
        srcSet={`${publicUrl}/images/desktop/lg-welcome-image@2x.png 2x`}
        alt="Woman doing squats"
      />
    </StyledWelcomeImagePicture>
  );
};

export default WelcomeImage;

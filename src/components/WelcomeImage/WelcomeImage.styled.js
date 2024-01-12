import styled from 'styled-components';

export const StyledWelcomeImagePicture = styled.picture`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;

  max-width: 446px;

  @media screen and (min-width: 768px) {
    max-width: 670px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 670px;
  }

  & > img {
    display: block;
  }
`;

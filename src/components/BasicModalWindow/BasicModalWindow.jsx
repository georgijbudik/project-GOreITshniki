import { createPortal } from 'react-dom';

import {
  StyledModalOverlay,
  StyledModal,
  StyledModalContent,
  StyledModalCloseButton,
} from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {
  return createPortal(
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalCloseButton>
          <svg width="22" height="22">
            <use
              xlinkHref={
                process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-cross'
              }
            />
          </svg>
        </StyledModalCloseButton>

        <StyledModalContent>{children}</StyledModalContent>
      </StyledModal>
    </StyledModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default BasicModalWindow;

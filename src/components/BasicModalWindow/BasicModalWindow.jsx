import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setIsModalOpen } from '../../redux/global/globalSlice';

import { createPortal } from 'react-dom';
import MainContainer from 'components/MainContainer';

import {
  StyledModalOverlay,
  StyledModal,
  StyledModalContent,
  StyledModalCloseButton,
} from './BasicModalWindow.styled';

const BasicModalWindow = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        dispatch(setIsModalOpen(false));
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(setIsModalOpen(false));
  };

  return createPortal(
    <StyledModalOverlay onClick={closeModal}>
      <MainContainer>
        <StyledModal onClick={e => e.stopPropagation()}>
          <StyledModalCloseButton onClick={closeModal}>
            <svg width="22" height="22">
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-cross'
                }
              />
            </svg>
          </StyledModalCloseButton>

          <StyledModalContent>{children}</StyledModalContent>
        </StyledModal>
      </MainContainer>
    </StyledModalOverlay>,
    document.getElementById('modal-root')
  );
};

export default BasicModalWindow;

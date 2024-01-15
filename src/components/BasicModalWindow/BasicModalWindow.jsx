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

const BasicModalWindow = ({ onClose, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsModalOpen(true));

    return () => {
      dispatch(setIsModalOpen(false));
    };
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const closeModal = () => {
    onClose();
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

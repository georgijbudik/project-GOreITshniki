import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import LogOutBtn from 'components/LogOutBtn';
// import MainContainer from 'components/MainContainer';

// import { setIsModalOpen } from '../../redux/global/globalSlice';

import { createPortal } from 'react-dom';

import {
  StyledUserNav,
  StyledUserNavBurgerButton,
  StyledUserNavBurgerIcon,
  StyledUserNavMobileNavModal,
  StyledUserNavMobileNavContent,
  StyledUserNavMobileNavCloseButton,
  StyledUserNavMobileNavCloseIcon,
  StyledUserNavMobileNavLogoOutBtnWrapper,
  StyledUserNavButtonList,
  StyledUserNavButton,
} from './UserNav.styled';

const UserNav = () => {
  // const dispatch = useDispatch();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handlePageChange = page => {
    document.activeElement.blur();
    navigate(page);
  };

  return (
    <StyledUserNav>
      {isNavOpen &&
        createPortal(
          <StyledUserNavMobileNavModal>
            <StyledUserNavMobileNavCloseButton
              onClick={() => {
                setIsNavOpen(false);
              }}
            >
              <StyledUserNavMobileNavCloseIcon>
                <use
                  xlinkHref={
                    process.env.PUBLIC_URL +
                    '/images/sprite/sprite.svg#icon-cross'
                  }
                />
              </StyledUserNavMobileNavCloseIcon>
            </StyledUserNavMobileNavCloseButton>

            <StyledUserNavMobileNavContent>
              <StyledUserNavButton
                $secondary={true}
                $active={pathname === '/diary'}
                onClick={() => {
                  handlePageChange('/diary');
                  setIsNavOpen(false);
                }}
              >
                Dairy
              </StyledUserNavButton>
              <StyledUserNavButton
                $secondary={true}
                $active={pathname === '/products'}
                onClick={() => {
                  handlePageChange('/products');
                  setIsNavOpen(false);
                }}
              >
                Products
              </StyledUserNavButton>
              <StyledUserNavButton
                $secondary={true}
                $active={pathname === '/exercises'}
                onClick={() => {
                  handlePageChange('/exercises');
                  setIsNavOpen(false);
                }}
              >
                Exercises
              </StyledUserNavButton>
            </StyledUserNavMobileNavContent>

            <StyledUserNavMobileNavLogoOutBtnWrapper>
              <LogOutBtn />
            </StyledUserNavMobileNavLogoOutBtnWrapper>
          </StyledUserNavMobileNavModal>,
          document.getElementById('modal-root')
        )}

      <StyledUserNavBurgerButton
        onClick={() => {
          setIsNavOpen(true);
        }}
      >
        <StyledUserNavBurgerIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-burger'
            }
          ></use>
        </StyledUserNavBurgerIcon>
      </StyledUserNavBurgerButton>

      <StyledUserNavButtonList>
        <StyledUserNavButton
          $secondary={pathname !== '/diary'}
          onClick={() => handlePageChange('/diary')}
        >
          Diary
        </StyledUserNavButton>
        <StyledUserNavButton
          $secondary={pathname !== '/products'}
          onClick={() => handlePageChange('/products')}
        >
          Products
        </StyledUserNavButton>
        <StyledUserNavButton
          $secondary={pathname !== '/exercises'}
          onClick={() => handlePageChange('/exercises')}
        >
          Exercises
        </StyledUserNavButton>
      </StyledUserNavButtonList>
    </StyledUserNav>
  );
};

export default UserNav;

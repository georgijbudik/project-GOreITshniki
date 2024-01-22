import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LogOutBtn from 'components/LogOutBtn';

import { setIsModalOpen } from '../../redux/global/globalSlice';

import { createPortal } from 'react-dom';

import {
  StyledUserNav,
  StyledUserNavBurgerButton,
  StyledUserNavBurgerIcon,
  StyledUserNavMobileNavModalOverlay,
  StyledUserNavMobileNavModal,
  StyledUserNavMobileNavContent,
  StyledUserNavMobileNavCloseButton,
  StyledUserNavMobileNavCloseIcon,
  StyledUserNavMobileNavLogoOutBtnWrapper,
  StyledUserNavButtonList,
  StyledUserNavButton,
} from './UserNav.styled';

const UserNav = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
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
          <StyledUserNavMobileNavModalOverlay
            onClick={() => {
              setIsNavOpen(false);
              dispatch(setIsModalOpen(false));
            }}
          >
            <StyledUserNavMobileNavModal
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <StyledUserNavMobileNavCloseButton
                onClick={() => {
                  setIsNavOpen(false);
                  dispatch(setIsModalOpen(false));
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
                    dispatch(setIsModalOpen(false));
                  }}
                >
                  {t('header.diary')}
                </StyledUserNavButton>
                <StyledUserNavButton
                  $secondary={true}
                  $active={pathname === '/products'}
                  onClick={() => {
                    handlePageChange('/products');
                    setIsNavOpen(false);
                    dispatch(setIsModalOpen(false));
                  }}
                >
                  {t('header.products')}
                </StyledUserNavButton>
                <StyledUserNavButton
                  $secondary={true}
                  $active={pathname.includes('/exercises')}
                  onClick={() => {
                    handlePageChange('/exercises');
                    setIsNavOpen(false);
                    dispatch(setIsModalOpen(false));
                  }}
                >
                  {t('header.exercises')}
                </StyledUserNavButton>
              </StyledUserNavMobileNavContent>

              <StyledUserNavMobileNavLogoOutBtnWrapper>
                <LogOutBtn
                  white
                  onClose={() => {
                    setIsNavOpen(false);
                    dispatch(setIsModalOpen(false));
                  }}
                />
              </StyledUserNavMobileNavLogoOutBtnWrapper>
            </StyledUserNavMobileNavModal>
          </StyledUserNavMobileNavModalOverlay>,
          document.getElementById('modal-root')
        )}

      <StyledUserNavBurgerButton
        onClick={() => {
          setIsNavOpen(true);
          dispatch(setIsModalOpen(true));
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
          {t('header.diary')}
        </StyledUserNavButton>
        <StyledUserNavButton
          $secondary={pathname !== '/products'}
          onClick={() => handlePageChange('/products')}
        >
          {t('header.products')}
        </StyledUserNavButton>
        <StyledUserNavButton
          $secondary={!pathname.includes('/exercises')}
          onClick={() => handlePageChange('/exercises')}
        >
          {t('header.exercises')}
        </StyledUserNavButton>
      </StyledUserNavButtonList>
    </StyledUserNav>
  );
};

export default UserNav;

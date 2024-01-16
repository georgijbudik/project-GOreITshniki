import {
  StyledUserNav,
  StyledUserNavBurgerButton,
  StyledUserNavBurgerIcon,
  StyledUserNavButtonList,
  StyledUserNavButton,
} from './UserNav.styled';

import { useNavigate } from 'react-router-dom';

const UserNav = () => {
  const navigate = useNavigate();

  return (
    <StyledUserNav>
      <StyledUserNavBurgerButton>
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
          onClick={() => {
            navigate('/diary');
          }}
        >
          Diary
        </StyledUserNavButton>
        <StyledUserNavButton
          onClick={() => {
            navigate('/products');
          }}
        >
          Products
        </StyledUserNavButton>
        <StyledUserNavButton
          onClick={() => {
            navigate('/exercises');
          }}
        >
          Exercises
        </StyledUserNavButton>
      </StyledUserNavButtonList>
    </StyledUserNav>
  );
};

export default UserNav;

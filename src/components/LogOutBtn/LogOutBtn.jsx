import { StyledLogOutBtn } from './LogOutBtn.styled';

const LogOutBtn = () => {
  return (
    <StyledLogOutBtn>
      <span>Logout</span>
      <svg width="20" height="20" stroke="rgba(230, 83, 60, 1)">
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-log-out'
          }
        />
      </svg>
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;

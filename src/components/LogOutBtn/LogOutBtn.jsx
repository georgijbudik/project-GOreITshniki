import {
  StyledLogOutBtn,
  StyledLogOutBtnIcon,
  StyledLogOutBtnText,
} from './LogOutBtn.styled';

const LogOutBtn = ({ filled }) => {
  return (
    <StyledLogOutBtn>
      <StyledLogOutBtnText>Logout</StyledLogOutBtnText>
      <StyledLogOutBtnIcon
        $filled={filled}
        width="20"
        height="20"
        stroke="rgba(230, 83, 60, 1)"
      >
        <use
          xlinkHref={
            process.env.PUBLIC_URL + '/images/sprite/sprite.svg#icon-log-out'
          }
        />
      </StyledLogOutBtnIcon>
    </StyledLogOutBtn>
  );
};

export default LogOutBtn;

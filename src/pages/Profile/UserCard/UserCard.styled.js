import styled from 'styled-components';

export const Container = styled.div`
background-color: #040404;
min-width: 320px;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
  padding-top:40px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 96px;
  }
`;

export const UserInfo = styled.div`
text-align:center;
`;

export const ProfileSettings = styled.h3`
margin-block-start:0;
margin-block-end: 45px;
font-size:24px;
font-weight:700;
font-family:Roboto;
color:var(--main-text-color);
`;

export const UserAvatar = styled.svg`
border:1px solid var(--accent-color);
border-radius:50%;
margin-block-end: 31px;
background-color:rgba(239, 237, 232, 0.1);
padding:20px;
`;

export const UserName = styled.p`
color:var(--main-text-color);
margin-block-start:0;
margin-block-end: 4px;
font-weight:400;
font-size:18px;
`;

export const UserRole = styled.p`
margin-block-start:0;
color:var(--main-text-color);
opacity:0.5;
font-weight:400;
font-size:14px;
`;

export const DailyContainer = styled.div`
display:flex;
justify-content: space-between;
flex-wrap:wrap;
text-align:left;
`;

export const DailyTitle = styled.p`
margin-block-start:0;
font-size:12px;
color:var(--main-text-color);
opacity:0.8;
display:flex;
align-items:center;
`;

export const SvgDailyIcon = styled.svg`
margin-block-start:0;
margin-right:8px;
`;

export const DailyResult = styled.p`
margin-block-start:0;
margin-block-end:0;
font-weight:700;
font-size:18px;
color:var(--main-text-color);
`;

export const DailyCard = styled.div`
box-sizing: border-box;
display:flex;
flex-direction:column;
justify-content: space-between;
background-color:var(--accent-color);
width:157px;
height:96px;
border-radius:12px;
border: 1px solid var(--border-color);
padding:14px;
margin-block-end:40px;
`;

export const DisclaimerContainer = styled.div`
color: #EFEDE833;
font-size:13.5px;
text-align: left;
line-height:1.3;
display:flex;
height:73px;
margin-block-end:40px;
`;

export const SvgExclamationIcon = styled.svg`
border-radius:50%;
padding:5px;
background-color:#EFA082;
margin-right:8px;
`;

export const LogOutButton = styled.button`
background: none;
color: var(--main-text-color);
border: none;
padding: 0;
font-size: 14px;
line-height:1.3;
cursor: pointer;
outline: inherit;
display:flex;
align-items:center;
margin-left:auto;
`;

export const SvgLogoutIcon = styled.svg`
margin-left:8px;
stroke:var(--accent-color);

`;
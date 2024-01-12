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

export const FieldName = styled.p`
margin-block-start:0;
margin-block-end:4px;
color:var(--main-text-color);
opacity:0.5;
font-weight:400;
font-size:12px;
`;

export const FieldContainer = styled.p`
margin-block-end:14px;
`;

export const MainInput = styled.input`
all: unset;
border:1px solid var(--border-color);
color:var(--main-text-color);
font-size:14px;
border-radius:12px;
padding:14px;
min-width: 300px;
  max-width: 355px;
`;

export const SecondaryInput = styled.input`
all: unset;
border:1px solid var(--border-color);
color:var(--main-text-color);
font-size:14px;
border-radius:12px;
padding:14px;
min-width: 120px;
max-width: 130px;
`;


export const SecondaryInputContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`;

export const BloodSexContainer = styled.div`
display:flex;
margin-block-end:32px;
`;

export const SexContainer = styled.div`
display:flex;
`;

export const BloodContainer = styled.div`
display:flex;
margin-right:20px;
`;

export const BloodSexContainerLabel = styled.label`
color:var(--main-text-color);
font-size:14px;
`;

export const Radio = styled.input`
 appearance:none;
  width: 14px;
height: 14px;
border-radius:50%;
 border: 1.5px #636366 solid;
 margin-right:9px;
 cursor:pointer;
 &:checked{
border-color:var(--icon-color);
background-color:var(--icon-color);
box-shadow:0px 0px 0px 2px black inset;
 }
 &:active{
    border-color:orange;
 }
`;

export const RadioContainer = styled.label`
display:flex;
align-items:center;
margin-right:8px;
margin-block-end:8px;
`;
import { Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 90px 0px 35px 0px;

  @media screen and (min-width: 768px) {
    width: 496px;
    padding-top: 140px;
    padding-bottom: 39px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 150px;
  }
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin: 0 0 14px 0;
  line-height: calc(28 / 24);
  letter-spacing: 0.02em;
  color: var(--main-text-color);

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: calc(44 / 32);
    margin-bottom: 16px;
  }
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  margin: 0;
  margin-bottom: 28px;
  line-height: calc(18 / 14);
  letter-spacing: 0.02em;
  color: var(--main-text-color);
  opacity: 0.3;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: calc(24 / 16);
    margin-bottom: 32px;
  }
`;

export const InfoLink = styled.p`
  font-weight: 400;
  font-size: 12px;
  margin: 0;
  margin-top: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.02em;
  color: var(--main-text-color);
  opacity: 0.6;
`;

export const StyledLink = styled(Link)`
  font-weight: 500;
  font-size: 12px;
  line-height: calc(18 / 12);
  letter-spacing: 0.02em;
  color: var(--main-text-color);
`;

// Forma CSS
export const Forma = styled(Form)`
  width: 335px;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  /* gap: 18px; */
  @media screen and (min-width: 768px) {
    width: 364px;
  }

  @media screen and (min-width: 1440px) {
    width: 496px;
  }
`;

export const ContainerInput = styled.div`
width:100%;
position:relative;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const Input = styled(Field)`
  font-size: 16px;
  color: var(--main-text-color);
  width: 100%;
  height: 46px;
  opacity: 0.3;
  padding: 0 0 0 14px;
  margin-bottom: 18px;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 12px;
  outline: none;
  &::placeholder {
    color: var(--main-text-color);
    font-weight: 400;
    font-size: 16px;
    line-height: calc(18 / 14);
    letter-spacing: 0.02em;
    opacity: 0.6;
  }
  &:hover {
    border-color: var(--accent-color);
  }

  &:not(:placeholder-shown):valid {
    border-color: var(--green-colro);
  }
  &:not(:placeholder-shown):invalid {
    border-color: var(--red-color);
  }

  @media screen and (min-width: 768px) {
    height: 52px;
    margin-bottom: 20px;
  }
`;

export const Error = styled(ErrorMessage)`
  color: red;
  opacity: 0.6;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: -18px;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

// button
export const StyledAuthButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 42px;
  color: var(--main-text-color);
  transition: var(--transition);

  padding: ${({ $paddingY, $paddingX }) => `${$paddingY}px ${$paddingX}px`};

  border-radius: 12px;
  background-color: ${({ $secondary }) =>
    $secondary ? 'transparent' : 'var(--accent-color)'};
  border: ${({ $secondary }) =>
    $secondary ? '1px solid rgba(239, 237, 232, 0.30);' : 'none'};

  font-size: 16px;
  font-weight: 500;
  line-height: 120%;

  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${({ $secondary }) =>
      $secondary ? 'transparent' : 'var(--icon-color)'};

    border: ${({ $secondary }) =>
      $secondary ? `1px solid var(--accent-color)` : 'none'};
  }

  &:disabled {
    color: rgba(239, 237, 232, 0.6);

    &:hover,
    &:focus {
      background-color: ${({ $secondary }) =>
        $secondary ? 'transparent' : 'var(--accent-color)'};

      border: ${({ $secondary }) =>
        $secondary ? '1px solid rgba(239, 237, 232, 0.30);' : 'none'};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 192px;
    height: 56px;

    padding: ${({ $paddingY, $paddingX }) =>
      `${$paddingY * (4 / 3)}px ${$paddingX * (3 / 2)}px`};
  }
`;

// password eye
export const ContainerShowButton = styled.div`
position:relative;
`;

export const ShowPassButton = styled.button`
z-index:9;
position:absolute;
top: 40%;
left: 95%;
transform: translate(-50%, -50%);
background-color: transparent;
border: none
`;

export const ShowPassSVG = styled.svg`
transition: stroke 2250ms cubic-bezier(0.4, 0, 0.2, 1), scale 250ms ease-in-out;;

&:hover{
  stroke:#E6533C;
  scale: 1.2;
}
`;
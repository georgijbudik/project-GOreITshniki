import { Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 90px 20px 35px 20px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  padding-bottom: 14px;
  line-height: calc(28 / 24);
  letter-spacing: 0.02em;
  color: var(--main-text-color);
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 28px;
  margin: 0;
  line-height: calc(18 / 14);
  letter-spacing: 0.02em;
  color: var(--main-text-color);
  opacity: 0.3;
`;

export const InfoLink = styled.p`
  font-weight: 400;
  font-size: 12px;
  padding-top: 12px;
  margin: 0;
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
  /* display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  gap: 18px; */
`;

export const Input = styled(Field)`
  font-size: 16px;
  color: var(--main-text-color);
  width: 100%;
  height: 46px;
  opacity: 0.3;
  padding: 0 14px;
  margin: 0 0 18px 0;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 12px;
  outline: none;
  &:last-child {
    margin-bottom: 28px;
  }
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
`;

export const Error = styled(ErrorMessage)`
  color: red;
  opacity: 0.6;
  font-weight: 400;
  font-size: 0.8rem;
  margin-top: -15px;
  transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 133ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

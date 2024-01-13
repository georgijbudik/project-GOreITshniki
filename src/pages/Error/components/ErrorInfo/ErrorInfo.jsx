import {
  StyledErrorInfoWrapper,
  StyledErrorMessage,
  StyledErrorStatus,
} from './ErrorInfo.styled';

const ErrorInfo = () => {
  return (
    <StyledErrorInfoWrapper>
      <StyledErrorStatus>404</StyledErrorStatus>
      <StyledErrorMessage>
        Sorry, you have reached a page that we could not find. It seems that you
        are lost among the numbers and letters of our virtual space. Perhaps
        this page went on vacation or decided to disappear into another
        dimension. We apologize for this inconvenience.
      </StyledErrorMessage>
    </StyledErrorInfoWrapper>
  );
};

export default ErrorInfo;

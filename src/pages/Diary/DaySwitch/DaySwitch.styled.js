import { createGlobalStyle, styled } from 'styled-components';
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  text-align: end;
  text-transform: uppercase;
  justify-content: end;

  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative;
    width: 120px;
    margin: auto;
    text-align: center;

  }
  .react-datepicker {
    position: absolute;
    left: 50%;
    /* top: 50%; */
    transform: translate(-40%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 215px;
    height: 236px;
    padding: 9px 18px;
    background-color: #EF8964;
    /* font-family: Inter; */
    /* border-radius: 16px; */
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #EF8964;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
    width: 120px;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
    width: 140px;
    
  }
  .react-datepicker__day-name {
    margin: 0;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    right: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:#040404;
    color:#EFEDE8;
    font-size: 14px;

  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:#040404;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:#040404;
    color:#EFEDE8;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
`;

export const TitleWrapper = styled.button`
  width: 120px;
  color: #efede8;
  background: black;
  border: 0;
  font-weight: 700;
  line-height: 18px;
  text-align: right;
  text-transform: uppercase;
  /* padding: 8px 12px; */
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;

export const GlobWrapDP = styled.div`
  display: flex;
  justify-content: flex-end;

  /* flex-direction: column; */
`;

export const ChangDayBtn = styled.button`
  /* color: #efede8;
  background-color: #040404;
  width: 16px;
  height: 16px;
  font-size: 16px;
  font-weight: 700;
  border: 1px;
  border-color: #efede8; */
  width: 16px;
  height: 16px;
  padding: 0;
  border: 0;
  /* display: flex;
  justify-content: center; */
  cursor: pointer;
`;

export const CalendarIcon = styled.svg`
  fill: green;
  /* background-color: #040404; */
  width: 16px;
  height: 16px;
  margin: 0 20px 0 2px;
`;

export const ChangeDayIcon = styled.svg`
  fill: red;
  background-color: #040404;
  width: 16px;
  height: 16px;

  &:hover {
    /* filter: brightness(0) invert(1.2); // Легкое изменение яркости при наведении */
    fill: red;
  }
`;

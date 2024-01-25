import dayjs from 'dayjs';
import { isBefore } from 'date-fns';

import { useState, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../../redux/diary/diarySlice';
import { setIsModalOpen } from '../../../redux/global/globalSlice';
import { selectDiaryDate } from '../../../redux/diary/diarySelectors';

import DatePicker from 'react-datepicker';
import { es, uk, enUS } from 'date-fns/locale';
import { format, subDays, addDays } from 'date-fns';

import { selectLanguage } from '../../../redux/global/globalSlice';
import { selectRegisterDate } from '../../../redux/auth/authSelectors';

import {
  StyledDate,
  StyledDaySwitchWrapper,
  StyledDateText,
  StyledCalendarContainer,
  StyledCalendarIcon,
  StyledCalendarNavigationContainer,
  StyledCalendarNavigationButton,
  StyledCalendarNavigationIcon,
} from './DaySwitch.styled';

const DaySwitch = () => {
  const dispatch = useDispatch();

  const lang = useSelector(selectLanguage);
  const registerDate = useSelector(selectRegisterDate);
  const currentDate = useSelector(selectDiaryDate);

  const dateComponents = currentDate.split('.');

  // Create a new Date object using the components (month is zero-based in JavaScript Date)
  const date = new Date(
    parseInt(dateComponents[2]),
    parseInt(dateComponents[1]) - 1,
    parseInt(dateComponents[0])
  );

  const [startDate, setStartDate] = useState(date);

  const getLocale = () => {
    switch (lang) {
      case 'es':
        return es;

      case 'uk':
        return uk;

      default:
        return enUS;
    }
  };

  const handleDateChange = date => {
    const formatedDate = dayjs(date).format('DD.MM.YYYY');
    dispatch(setDate(formatedDate));
    setStartDate(date);
  };

  const handleDateDecrease = () => {
    const date = subDays(startDate, 1);

    if (isBefore(date, new Date(registerDate))) {
      return;
    }

    const formatedDate = dayjs(date).format('DD.MM.YYYY');
    dispatch(setDate(formatedDate));
    setStartDate(date);
  };

  const handleDateIncrease = () => {
    const date = addDays(startDate, 1);
    const formatedDate = dayjs(date).format('DD.MM.YYYY');
    dispatch(setDate(formatedDate));
    setStartDate(date);
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <StyledDate onClick={onClick} ref={ref}>
        <StyledDateText>{format(startDate, 'dd/MM/yyyy')}</StyledDateText>

        <StyledCalendarIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-calendarOMG'
            }
          ></use>
        </StyledCalendarIcon>
      </StyledDate>
    );
  });

  return (
    <StyledDaySwitchWrapper>
      <StyledCalendarContainer>
        <div>
          <DatePicker
            nextMonthButtonLabel="hello"
            minDate={new Date(registerDate)}
            scrollableYearDropdown={true}
            locale={getLocale()}
            selected={startDate}
            onChange={date => handleDateChange(date)}
            dateFormat="dd/MM/yyyy"
            onCalendarOpen={() => {
              dispatch(setIsModalOpen(true));
            }}
            onCalendarClose={() => {
              dispatch(setIsModalOpen(false));
            }}
            customInput={<CustomInput />}
          />
        </div>
      </StyledCalendarContainer>

      <StyledCalendarNavigationContainer>
        <StyledCalendarNavigationButton onClick={handleDateDecrease}>
          <StyledCalendarNavigationIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-chevron-leftOMG'
              }
            ></use>
          </StyledCalendarNavigationIcon>
        </StyledCalendarNavigationButton>

        <StyledCalendarNavigationButton onClick={handleDateIncrease}>
          <StyledCalendarNavigationIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-chevron-rightOMG'
              }
            ></use>
          </StyledCalendarNavigationIcon>
        </StyledCalendarNavigationButton>
      </StyledCalendarNavigationContainer>
    </StyledDaySwitchWrapper>
  );
};

export default DaySwitch;

import dayjs from 'dayjs';

import { useState, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../../../redux/diary/diarySlice';

import DatePicker from 'react-datepicker';
import { es, uk, enUS } from 'date-fns/locale';
import { format, subDays, addDays } from 'date-fns';

import { selectLanguage } from '../../../redux/global/globalSlice';

import {
  TitleWrapper,
  StyledDaySwitchWrapper,
  StyledCalendarContainer,
  StyledCalendarIcon,
  StyledCalendarNavigationContainer,
  StyledCalendarNavigationButton,
  StyledCalendarNavigationIcon,
} from './DaySwitch.styled';

const DaySwitch = () => {
  const dispatch = useDispatch();

  const lang = useSelector(selectLanguage);

  const [startDate, setStartDate] = useState(new Date());

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
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(startDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <StyledDaySwitchWrapper>
      <StyledCalendarContainer>
        <DatePicker
          locale={getLocale()}
          selected={startDate}
          onChange={date => handleDateChange(date)}
          dateFormat="dd/MM/yyyy"
          customInput={<CustomInput />}
        />

        <StyledCalendarIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-calendarOMG'
            }
          ></use>
        </StyledCalendarIcon>
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

// import dayjs from 'dayjs';
// import { setDate } from '../../../redux/diary/diarySlice';

// import { forwardRef, useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// // import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import { format, subDays, addDays } from 'date-fns';
// import {
//   // useSelector,
//   useDispatch,
// } from 'react-redux';
// import {
//   CalendarGlobalStyles,
//   TitleWrapper,
//   GlobWrapDP,
//   ChangDayBtn,
//   CalendarIcon,
//   ChangeDayIcon,
// } from './DaySwitch.styled';

// const DaySwitch = () => {
//   const dispatch = useDispatch();
//   // const user = useSelector(state => state.auth.user);
//   // console.log(user);

//   const [selectedDate, setSelectedDate] = useState(Date.now());

//   const CustomInput = forwardRef(({ value, onClick }, ref) => {
//     return (
//       <TitleWrapper onClick={onClick} ref={ref}>
//         {format(selectedDate, 'dd/MM/yyyy')}
//       </TitleWrapper>
//     );
//   });

//   return (
//     <GlobWrapDP>
//       <DatePicker
//         selected={selectedDate}
//         onChange={date => {
//           const formatedDate = dayjs(date).format('DD.MM.YYYY');
//           dispatch(setDate(formatedDate));
//           setSelectedDate(date);
//         }}
//         customInput={<CustomInput />}
//         dateFormat={'dd MM yyyy'}
//         calendarStartDay={1}
//         formatWeekDay={day => day.substring(0, 1)}
//         wrapperClassName="datePicker"
//       />

//       <CalendarIcon>
//         <use
//           xlinkHref={
//             process.env.PUBLIC_URL +
//             '/images/sprite/sprite.svg#icon-calendarOMG'
//           }
//         />
//       </CalendarIcon>

//       <ChangDayBtn
//         onClick={() => {
//           const date = subDays(selectedDate, 1);
//           const formatedDate = dayjs(date).format('DD.MM.YYYY');
//           dispatch(setDate(formatedDate));
//           setSelectedDate(date);
//         }}
//       >
//         <ChangeDayIcon width="16" height="16">
//           <use
//             xlinkHref={
//               process.env.PUBLIC_URL +
//               '/images/sprite/sprite.svg#icon-chevron-leftOMG'
//             }
//           />
//         </ChangeDayIcon>
//       </ChangDayBtn>

//       <ChangDayBtn
//         onClick={() => {
//           const date = addDays(selectedDate, 1);
//           const formatedDate = dayjs(date).format('DD.MM.YYYY');
//           dispatch(setDate(formatedDate));
//           setSelectedDate(date);
//         }}
//       >
//         <ChangeDayIcon width="16" height="16">
//           <use
//             xlinkHref={
//               process.env.PUBLIC_URL +
//               '/images/sprite/sprite.svg#icon-chevron-rightOMG'
//             }
//           />
//         </ChangeDayIcon>
//       </ChangDayBtn>

//       <CalendarGlobalStyles />
//     </GlobWrapDP>
//   );
// };

// export default DaySwitch;

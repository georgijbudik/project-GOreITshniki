import dayjs from 'dayjs';
import { setDate } from '../../../redux/diary/diarySlice';

import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { format, subDays, addDays } from 'date-fns';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';
import {
  CalendarGlobalStyles,
  TitleWrapper,
  GlobWrapDP,
  ChangDayBtn,
  CalendarIcon,
  ChangeDayIcon,
} from './DaySwitch.styled';

const DaySwitch = () => {
  const dispatch = useDispatch();
  // const user = useSelector(state => state.auth.user);
  // console.log(user);

  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, 'dd/MM/yyyy')}
      </TitleWrapper>
    );
  });

  return (
    <GlobWrapDP>
      <DatePicker
        selected={selectedDate}
        onChange={date => {
          const formatedDate = dayjs(date).format('DD.MM.YYYY');
          dispatch(setDate(formatedDate));
          setSelectedDate(date);
        }}
        customInput={<CustomInput />}
        dateFormat={'dd MM yyyy'}
        calendarStartDay={1}
        formatWeekDay={day => day.substring(0, 1)}
        wrapperClassName="datePicker"
      />

      <CalendarIcon>
        <use
          xlinkHref={
            process.env.PUBLIC_URL +
            '/images/sprite/sprite.svg#icon-calendarOMG'
          }
        />
      </CalendarIcon>

      <ChangDayBtn
        onClick={() => {
          const date = subDays(selectedDate, 1);
          const formatedDate = dayjs(date).format('DD.MM.YYYY');
          dispatch(setDate(formatedDate));
          setSelectedDate(date);
        }}
      >
        <ChangeDayIcon width="16" height="16">
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-chevron-leftOMG'
            }
          />
        </ChangeDayIcon>
      </ChangDayBtn>

      <ChangDayBtn
        onClick={() => {
          const date = addDays(selectedDate, 1);
          const formatedDate = dayjs(date).format('DD.MM.YYYY');
          dispatch(setDate(formatedDate));
          setSelectedDate(date);
        }}
      >
        <ChangeDayIcon width="16" height="16">
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-chevron-rightOMG'
            }
          />
        </ChangeDayIcon>
      </ChangDayBtn>

      <CalendarGlobalStyles />
    </GlobWrapDP>
  );
};

export default DaySwitch;

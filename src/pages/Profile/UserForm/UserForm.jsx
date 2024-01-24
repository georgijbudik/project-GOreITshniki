import DatePicker from 'react-datepicker';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
import './datepicker.css';
import { ProfileSettings } from '../UserCard/UserCard.styled';
import { refreshUser, updateUser } from '../../../redux/auth/authOperations';
import {
  Container,
  FieldName,
  FieldContainer,
  MainInput,
  SecondaryInput,
  SecondaryInputContainer,
  BloodSexContainer,
  BloodContainer,
  SexContainer,
  RadioContainer,
  ActivityContainer,
  NameEmailInput,
  SaveButton,
  StyledCalendarIcon,
} from './UserForm.styled';
import { useEffect } from 'react';
import { selectUserInfo } from '../../../redux/auth/authSelectors';
import dayjs from 'dayjs';
import { t } from 'i18next';

const activityOptions = [
  { id: 'no_activity', value: '1', label: t('profile.user_form.activity_1') },
  {
    id: 'little_activity',
    value: '2',
    label: t('profile.user_form.activity_2'),
  },
  {
    id: 'normal_activity',
    value: '3',
    label: t('profile.user_form.activity_3'),
  },
  { id: 'very_activity', value: '4', label: t('profile.user_form.activity_4') },
  {
    id: 'extreme_activity',
    value: '5',
    label: t('profile.user_form.activity_5'),
  },
];

const UserForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUserInfo);

  const initialValues = {
    name: currentUser.name || '',
    height: currentUser.height || '',
    currentWeight: currentUser.currentWeight || '',
    desiredWeight: currentUser.desiredWeight || '',
    birthday: currentUser.birthday ? new Date(currentUser.birthday) : '',
    blood: currentUser.blood || '',
    sex: currentUser.sex || '',
    levelActivity: currentUser.levelActivity || '',
  };
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const {
        name,
        height,
        currentWeight,
        desiredWeight,
        blood,
        sex,
        levelActivity,
        birthday,
      } = values;

      const formattedBirthday = birthday
        ? dayjs(birthday).format('YYYY-MM-DD')
        : null;

      dispatch(
        updateUser({
          name,
          height: Number(height),
          currentWeight: Number(currentWeight),
          desiredWeight: Number(desiredWeight),
          blood: Number(blood),
          sex,
          levelActivity: Number(levelActivity),
          birthday: formattedBirthday,
        })
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Container>
        <ProfileSettings className="profile-desktop-visible">
          {t('profile.user_form.settings')}{' '}
        </ProfileSettings>
        <NameEmailInput>
          <FieldContainer className="nameEmail">
            <FieldName>{t('profile.user_form.name')} </FieldName>
            <MainInput
              type="text"
              name="name"
              required
              placeholder={currentUser.name}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FieldContainer>
          <FieldContainer className="nameEmail">
            <FieldName>{t('profile.user_form.email')} </FieldName>
            <MainInput
              type="email"
              name="email"
              required
              placeholder={currentUser.email}
              disabled
            />
          </FieldContainer>
        </NameEmailInput>
        <SecondaryInputContainer>
          <FieldContainer>
            <FieldName>{t('profile.user_form.height')} </FieldName>
            <SecondaryInput
              type="number"
              name="height"
              min={150}
              max={230}
              required
              placeholder="0"
              onChange={formik.handleChange}
              value={formik.values.height}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldName>{t('profile.user_form.current_weight')} </FieldName>
            <SecondaryInput
              type="number"
              name="currentWeight"
              max={180}
              min={35}
              required
              placeholder="0"
              onChange={formik.handleChange}
              value={formik.values.currentWeight}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldName>{t('profile.user_form.desired_weight')} </FieldName>
            <SecondaryInput
              className="desired-weight"
              name="desiredWeight"
              min={35}
              max={150}
              required
              type="number"
              placeholder="0"
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldName>{t('profile.user_form.date_of_birth')} </FieldName>
            <DatePicker
              selected={formik.values.birthday}
              name="dateOfBirth"
              required
              onChange={date => formik.setFieldValue('birthday', date)}
            />
            <StyledCalendarIcon>
              <use
                xlinkHref={
                  process.env.PUBLIC_URL +
                  '/images/sprite/sprite.svg#icon-calender-outline'
                }
              />
            </StyledCalendarIcon>
          </FieldContainer>
        </SecondaryInputContainer>

        <FieldName>{t('profile.user_form.blood')} </FieldName>
        <BloodSexContainer>
          <BloodContainer>
            {[1, 2, 3, 4].map(value => (
              <RadioContainer key={value}>
                <input
                  type="radio"
                  id={`blood_${value}`}
                  name="blood"
                  value={value}
                  defaultChecked={formik.values.blood === value}
                  onChange={formik.handleChange}
                />
                <label htmlFor={`blood_${value}`}>{value}</label>
              </RadioContainer>
            ))}
          </BloodContainer>

          <SexContainer>
            {['male', 'female'].map(value => (
              <RadioContainer key={value}>
                <input
                  type="radio"
                  id={`sex_${value}`}
                  name="sex"
                  value={value}
                  checked={formik.values.sex === value}
                  onChange={formik.handleChange}
                />
                <label htmlFor={`sex_${value}`}>
                  {t(`profile.user_form.${value}`)}
                </label>
              </RadioContainer>
            ))}
          </SexContainer>
        </BloodSexContainer>
        <ActivityContainer
          onChange={formik.handleChange}
          value={formik.values.levelActivity}
        >
          {activityOptions.map(option => (
            <RadioContainer key={option.id}>
              <input
                type="radio"
                id={option.id}
                name="levelActivity"
                value={option.value}
                checked={formik.values.levelActivity === option.value}
                onChange={formik.handleChange}
              />
              <label htmlFor={option.id}>
                {t(`profile.user_form.activity_${option.value}`)}
              </label>
            </RadioContainer>
          ))}
        </ActivityContainer>

        <SaveButton type="submit" className="save-button">
          {t('profile.user_form.save')}
        </SaveButton>
      </Container>
    </form>
  );
};

export default UserForm;

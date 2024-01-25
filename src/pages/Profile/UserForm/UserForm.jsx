import { forwardRef, useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectUserInfo } from '../../../redux/auth/authSelectors';
import { refreshUser, updateUser } from '../../../redux/auth/authOperations';

import dayjs from 'dayjs';
import DatePicker from 'react-datepicker';

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
  StyledCalendarWrapper,
} from './UserForm.styled';
import { ProfileSettings } from '../UserCard/UserCard.styled';

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
  const {
    name,
    email,
    height,
    currentWeight,
    desiredWeight,
    birthday,
    blood,
    sex,
    levelActivity,
  } = useSelector(selectUserInfo);
  const initialValues = {
    name: name || '',
    email: email,
    height: height || '',
    currentWeight: currentWeight || '',
    desiredWeight: desiredWeight || '',
    birthday: birthday ? new Date(birthday) : new Date(),
    blood: blood || '',
    sex: sex || '',
    levelActivity: levelActivity || '',
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const formik = useFormik({
    initialValues,
    onSubmit: ({
      name,
      height,
      currentWeight,
      desiredWeight,
      blood,
      sex,
      levelActivity,
      birthday,
    }) => {
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

  const CustomInput = forwardRef(({ id, value, onClick }, ref) => {
    return (
      <StyledCalendarWrapper onClick={onClick} ref={ref}>
        <SecondaryInput id={id} value={value} onChange={() => {}} />

        <StyledCalendarIcon>
          <use
            xlinkHref={
              process.env.PUBLIC_URL +
              '/images/sprite/sprite.svg#icon-profile-calendar'
            }
          />
        </StyledCalendarIcon>
      </StyledCalendarWrapper>
    );
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Container>
        <ProfileSettings className="profile-desktop-visible">
          {t('profile.user_form.settings')}{' '}
        </ProfileSettings>
        <NameEmailInput>
          <FieldContainer className="nameEmail">
            <FieldName htmlFor="name">{t('profile.user_form.name')} </FieldName>
            <MainInput
              id="name"
              type="text"
              name="name"
              required
              placeholder={name}
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
              placeholder={email}
              disabled
              // value={formik.initialValues.email}
            />
          </FieldContainer>
        </NameEmailInput>
        <SecondaryInputContainer>
          <FieldContainer>
            <FieldName htmlFor="height">
              {t('profile.user_form.height')}{' '}
            </FieldName>
            <SecondaryInput
              id="height"
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
            <FieldName htmlFor="currentWeight">
              {t('profile.user_form.current_weight')}{' '}
            </FieldName>
            <SecondaryInput
              id="currentWeight"
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
            <FieldName htmlFor="desiredWeight">
              {t('profile.user_form.desired_weight')}{' '}
            </FieldName>
            <SecondaryInput
              id="desiredWeight"
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
            <FieldName htmlFor="dateOfBirth">
              {t('profile.user_form.date_of_birth')}{' '}
            </FieldName>

            <DatePicker
              selected={formik.values.birthday}
              name="dateOfBirth"
              id="dateOfBirth"
              required
              customInput={<CustomInput />}
              onChange={date => formik.setFieldValue('birthday', date)}
              dateFormat={'dd.MM.yyyy'}
              showYearDropdown
              yearDropdownItemNumber={20}
            />
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
          {activityOptions.map(({ id, value }) => (
            <RadioContainer key={id}>
              <input
                type="radio"
                id={id}
                name="levelActivity"
                value={value}
                checked={String(formik.values.levelActivity) === String(value)}
                onChange={formik.handleChange}
              />
              <label htmlFor={id}>
                {t(`profile.user_form.activity_${value}`)}
              </label>
            </RadioContainer>
          ))}
        </ActivityContainer>

        <SaveButton
          type="submit"
          className="save-button"
          disabled={
            !formik.dirty ||
            !formik.isValid ||
            Object.values(formik.values).some(value => value === '')
          }
        >
          {t('profile.user_form.save')}
        </SaveButton>
      </Container>
    </form>
  );
};

export default UserForm;

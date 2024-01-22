import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslation } from 'react-i18next';
import './datepicker.css';
import { ProfileSettings } from '../UserCard/UserCard.styled';

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

const initialValues = {
  email: '',
  name: '',
  height: '',
  currentWeight: '',
  desiredWeight: '',
  dateOfBirth: '',
  blood: '',
  sex: '',
  activity: '',
};

const UserForm = () => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const {
        // email,
        // name,
        // height,
        // currentWeight,
        // desiredWeight,
        blood,
        sex,
        activity,
      } = values;
      var dateOfBirth;
      const dateNow = new Date();
      console.log(activity + ' ' + sex + ' ' + blood);

      if (dateNow.getFullYear() - startDate.getFullYear() >= 18) {
        dateOfBirth = startDate;
        console.log(dateOfBirth);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Container>
        <ProfileSettings className="profile-desktop-visible">
          {t('profile.user_form.settings')}{' '}
        </ProfileSettings>
        <NameEmailInput>
          <FieldContainer>
            <FieldName>{t('profile.user_form.name')} </FieldName>
            <MainInput
              type="text"
              name="name"
              required
              placeholder={t('profile.user_form.name_example')}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </FieldContainer>
          <FieldContainer>
            <FieldName>{t('profile.user_form.email')} </FieldName>
            <MainInput
              type="email"
              name="email"
              required
              placeholder="annarybachok@gmail.com"
              onChange={formik.handleChange}
              value={formik.values.email}
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
              selected={startDate}
              name="dateOfBirth"
              required
              onChange={date => setStartDate(date)}
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
          <BloodContainer
            onChange={formik.handleChange}
            value={formik.values.blood}
          >
            <RadioContainer>
              <input type="radio" id="blood_1" name="blood" value="1" />
              <label htmlFor="blood_1">1</label>
            </RadioContainer>
            <RadioContainer>
              <input type="radio" id="blood_2" name="blood" value="2" />
              <label htmlFor="blood_2">2</label>
            </RadioContainer>
            <RadioContainer>
              <input type="radio" id="blood_3" name="blood" value="3" />
              <label htmlFor="blood_3">3</label>
            </RadioContainer>
            <RadioContainer>
              <input type="radio" id="blood_4" name="blood" value="4" />
              <label htmlFor="blood_4">4</label>
            </RadioContainer>
          </BloodContainer>

          <SexContainer
            onChange={formik.handleChange}
            value={formik.values.sex}
          >
            <RadioContainer>
              <input type="radio" id="sex_male" name="sex" value="male" />
              <label htmlFor="sex_male">{t('profile.user_form.male')} </label>
            </RadioContainer>
            <RadioContainer>
              <input type="radio" id="sex_female" name="sex" value="female" />
              <label htmlFor="sex_female">
                {t('profile.user_form.female')}{' '}
              </label>
            </RadioContainer>
          </SexContainer>
        </BloodSexContainer>
        <ActivityContainer
          onChange={formik.handleChange}
          value={formik.values.activity}
        >
          <RadioContainer>
            <input type="radio" id="no_activity" name="activity" value="1" />
            <label htmlFor="no_activity">
              {t('profile.user_form.activity_1')}
            </label>
          </RadioContainer>

          <RadioContainer>
            <input
              type="radio"
              id="little_activity"
              name="activity"
              value="2"
            />
            <label htmlFor="little_activity">
              {t('profile.user_form.activity_2')}
            </label>
          </RadioContainer>
          <RadioContainer>
            <input
              type="radio"
              id="normal_activity"
              name="activity"
              value="3"
            />
            <label htmlFor="normal_activity">
              {t('profile.user_form.activity_3')}
            </label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="very_activity" name="activity" value="4" />
            <label htmlFor="very_activity">
              {t('profile.user_form.activity_4')}
            </label>
          </RadioContainer>
          <RadioContainer>
            <input
              type="radio"
              id="extreme_activity"
              name="activity"
              value="5"
            />
            <label htmlFor="extreme_activity">
              {t('profile.user_form.activity_5')}
            </label>
          </RadioContainer>
        </ActivityContainer>

        <SaveButton type="submit" className="save-button">
          {t('profile.user_form.save')}
        </SaveButton>
      </Container>
    </form>
  );
};

export default UserForm;

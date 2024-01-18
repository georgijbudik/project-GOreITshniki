
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { ProfileSettings } from "../UserCard/UserCard.styled";

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
  label,
  Radio,
  RadioContainer,
  ActivityContainer,
  NameEmailInput,
  SaveButton,
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
  activity: ''
};

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Is not in correct format'),
  name: yup
    .string()
    .min(2, 'Name is too short - should be 2 chars minimum.')
});

const UserForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      const { email, name, height, currentWeight, desiredWeight, blood, sex, activity } = values;
      var dateOfBirth;
      const dateNow = new Date();

      if ((dateNow.getFullYear() - startDate.getFullYear()) >= 18) {
        dateOfBirth = startDate;
        console.log(dateOfBirth);
      }

    }
  });

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Container>
        <ProfileSettings className='profile-desktop-visible'>Profile Settings</ProfileSettings>
        <NameEmailInput>
          <FieldContainer>
            <FieldName>Name</FieldName>
            <MainInput type="text" name="name" required placeholder="Anna Rybachok" onChange={formik.handleChange} value={formik.values.name} />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Email</FieldName>
            <MainInput type="email" name="email" required placeholder="annarybachok@gmail.com" onChange={formik.handleChange} value={formik.values.email} />
          </FieldContainer></NameEmailInput>
        <SecondaryInputContainer>
          <FieldContainer>
            <FieldName>Height</FieldName>
            <SecondaryInput type="number" name="height" min={150} max={230} required placeholder="0" onChange={formik.handleChange} value={formik.values.height} />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Current Weight</FieldName>
            <SecondaryInput type="number" name="currentWeight" max={180} min={35} required placeholder="0" onChange={formik.handleChange} value={formik.values.currentWeight} />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Desired Weight</FieldName>
            <SecondaryInput className='desired-weight' name="desiredWeight" min={35} max={150} required type="number" placeholder="0" onChange={formik.handleChange} value={formik.values.desiredWeight} />
          </FieldContainer>
          <FieldContainer>
            <FieldName>Date of birth</FieldName>
            <DatePicker selected={startDate} name="dateOfBirth" required onChange={(date) => setStartDate(date)} />
            <svg>
              <use fill='#efede8' width="15" height="15" xlinkHref={
                process.env.PUBLIC_URL +
                '/images/sprite/sprite.svg#icon-calender-outline'
              } />
            </svg>
          </FieldContainer>
        </SecondaryInputContainer>

        <FieldName>Blood</FieldName>
        <BloodSexContainer>
          <div>
            <BloodContainer onChange={formik.handleChange} value={formik.values.blood}>
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
          </div>

          <SexContainer onChange={formik.handleChange} value={formik.values.sex}>
            <RadioContainer>
              <input type="radio" id="sex_male" name="sex" value="male" />
              <label htmlFor="sex_male">Male</label>
            </RadioContainer>
            <RadioContainer>
              <input type="radio" id="sex_female" name="sex" value="female" />
              <label htmlFor="sex_female">
                Female
              </label>
        </SexContainer>
      </BloodSexContainer>
     <ActivityContainer onChange={formik.handleChange} value={formik.values.activity}>
          <RadioContainer>
            <input type="radio" id="no_activity" name="activity" value="1" />
            <label htmlFor="no_activity">
              Sedentary lifestyle (little or no physical activity)
            </label>
          </RadioContainer>

          <RadioContainer >
            <input type="radio" id="little_activity" name="activity" value="2" />
            <label htmlFor="little_activity">
              Light activity (light exercises/sports 1-3 days per week)
            </label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="normal_activity" name="activity" value="3" />
            <label htmlFor="normal_activity">
              Moderately active (moderate exercises/sports 3-5 days per week)
            </label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="very_activity" name="activity" value="4" />
            <label htmlFor="very_activity">
              Very active (intense exercises/sports 6-7 days per week)
            </label>
          </RadioContainer>
          <RadioContainer>
            <input type="radio" id="extreme_activity" name="activity" value="5" />
            <label htmlFor="extreme_activity">
              Extremely active (very strenuous exercises/sports and physical work)
            </label>
          </RadioContainer>
        </ActivityContainer>

        <SaveButton type="submit" className='save-button'>Save</SaveButton>
    </Container>
</form>
  );
};

export default UserForm;

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.css";
import { ProfileSettings } from "../UserCard/UserCard.styled";
import Button from '../../../components/Button';
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
  BloodSexContainerLabel,
  Radio,
  RadioContainer,
  ActivityContainer,
  NameEmailInput,
  SaveButton
} from './UserForm.styled';

const UserForm = () => {

  const [startDate, setStartDate] = useState(new Date());

  return (
    <Container>
      <ProfileSettings className='profile-desktop-visible'>Profile Settings</ProfileSettings>

      <NameEmailInput>
        <FieldContainer>
          <FieldName>Name</FieldName>
          <MainInput type="text" placeholder="Anna Rybachok" />
        </FieldContainer>
        <FieldContainer>
          <FieldName>Email</FieldName>
          <MainInput type="email" placeholder="annarybachok@gmail.com" />
        </FieldContainer></NameEmailInput>
      <SecondaryInputContainer>
        <FieldContainer>
          <FieldName>Height</FieldName>
          <SecondaryInput type="number" placeholder="0" />
        </FieldContainer>
        <FieldContainer>
          <FieldName>Current Weight</FieldName>
          <SecondaryInput type="number" placeholder="0" />
        </FieldContainer>
        <FieldContainer>
          <FieldName>Desired Weight</FieldName>
          <SecondaryInput className='desired-weight' type="number" placeholder="0" />
        </FieldContainer>
        <FieldContainer>
          <FieldName>Date of birth</FieldName>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </FieldContainer>
      </SecondaryInputContainer>

      <FieldName>Blood</FieldName>
      <BloodSexContainer>
        <div>
          <BloodContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_1" name="blood" value={1} />
              <BloodSexContainerLabel htmlFor="blood_1">1</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_2" name="blood" value={2} />
              <BloodSexContainerLabel htmlFor="blood_2">2</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_3" name="blood" value={3} />
              <BloodSexContainerLabel htmlFor="blood_3">3</BloodSexContainerLabel>
            </RadioContainer>
            <RadioContainer>
              <Radio type="radio" id="blood_4" name="blood" value={4} />
              <BloodSexContainerLabel htmlFor="blood_4">4</BloodSexContainerLabel>
            </RadioContainer>
          </BloodContainer>
        </div>

        <SexContainer>
          <RadioContainer>
            <Radio type="radio" id="sex_male" name="sex" value="male" />
            <BloodSexContainerLabel htmlFor="sex_male">Male</BloodSexContainerLabel>
          </RadioContainer>
          <RadioContainer>
            <Radio type="radio" id="sex_female" name="sex" value="female" />
            <BloodSexContainerLabel htmlFor="sex_female">
              Female
            </BloodSexContainerLabel>
          </RadioContainer>
        </SexContainer>
      </BloodSexContainer>
      <ActivityContainer>
        <RadioContainer>
          <Radio type="radio" id="no_activity" name="activity" value={0} />
          <BloodSexContainerLabel htmlFor="no_activity">
            Sedentary lifestyle (little or no physical activity)
          </BloodSexContainerLabel>
        </RadioContainer>

        <RadioContainer>
          <Radio type="radio" id="little_activity" name="activity" value={1} />
          <BloodSexContainerLabel htmlFor="little_activity">
            Light activity (light exercises/sports 1-3 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="normal_activity" name="activity" value={2} />
          <BloodSexContainerLabel htmlFor="normal_activity">
            Moderately active (moderate exercises/sports 3-5 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="very_activity" name="activity" value={3} />
          <BloodSexContainerLabel htmlFor="very_activity">
            Very active (intense exercises/sports 6-7 days per week)
          </BloodSexContainerLabel>
        </RadioContainer>
        <RadioContainer>
          <Radio type="radio" id="extreme_activity" name="activity" value={4} />
          <BloodSexContainerLabel htmlFor="extreme_activity">
            Extremely active (very strenuous exercises/sports and physical work)
          </BloodSexContainerLabel>
        </RadioContainer>
      </ActivityContainer>

      <SaveButton className='save-button'>Save</SaveButton>


    </Container>
  );
};

export default UserForm;
